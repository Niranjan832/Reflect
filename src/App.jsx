import React, { Component } from "react";
import JournalForm from "./components/JournalForm";
import ReportFilter from "./components/ReportFilter";
import JournalList from "./components/JournalList";
import "./styles.css";

class App extends Component {
  state = {
    journals: [],
  };

  // Add a new journal entry
  addJournal = async (entry) => {
    try {
      const response = await fetch("http://localhost:5000/api/journals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });
      const data = await response.json();
      this.setState({ journals: [...this.state.journals, data] });
    } catch (error) {
      console.error("Error adding journal:", error);
    }
  };

  // Fetch filtered journals
  fetchReports = async (filters) => {
    const query = new URLSearchParams(filters).toString();
    const response = await fetch(`http://localhost:5000/api/journals?${query}`);
    const data = await response.json();
    this.setState({ journals: data });
  };

  render() {
    return (
      <div className="app-container">
        <h1>📝 Daily Journal</h1>
        <JournalForm onSubmit={this.addJournal} />
        <ReportFilter onFilter={this.fetchReports} />
        <JournalList entries={this.state.journals} />
      </div>
    );
  }
}

export default App;
