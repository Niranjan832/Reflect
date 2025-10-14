import React, { Component } from "react";
import Login from "./components/Login";
import JournalForm from "./components/JournalForm";
import ReportFilter from "./components/ReportFilter";
import JournalList from "./components/JournalList";
import "./styles.css";

class App extends Component {
  state = {
    page: "login", // "login" | "journal" | "report"
    user: null,
    journals: [],
  };

  // Simulated login
  handleLogin = (username) => {
    this.setState({ user: { name: username }, page: "journal" });
  };

  // Add a journal entry
  addJournal = (entry) => {
    this.setState({ journals: [...this.state.journals, entry] });
  };

  // Go to report page
  goToReport = () => {
    this.setState({ page: "report" });
  };

  // Go back to journal page
  goToJournal = () => {
    this.setState({ page: "journal" });
  };

  render() {
    const { page, user, journals } = this.state;

    return (
      <div className="app-container">
        <h1>📝 Daily Journal App</h1>

        {page === "login" && <Login onLogin={this.handleLogin} />}

        {page === "journal" && (
          <>
            <p>Welcome, {user.name}!</p>
            <JournalForm onSubmit={this.addJournal} />
            <button onClick={this.goToReport} className="nav-btn">Go to Reports</button>
          </>
        )}

        {page === "report" && (
          <>
            <ReportFilter onFilter={(filters) => console.log(filters)} />
            <JournalList entries={journals} />
            <button onClick={this.goToJournal} className="nav-btn">Back to Journal</button>
          </>
        )}
      </div>
    );
  }
}

export default App;
