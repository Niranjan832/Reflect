import React, { Component } from "react";
import LoginPage from "./components/LoginPage";
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

  // Fetch all journals when app loads
  componentDidMount() {
    this.fetchJournals();
  }

  fetchJournals = async () => {
    if (!this.state.user) return;
    try {
      const res = await fetch("http://localhost:5000/api/journals");
      const data = await res.json();
      this.setState({ journals: data });
    } catch (err) {
      console.error("Error fetching journals:", err);
    }
  };

  // Handle login/signup
  handleLogin = (user) => {
    this.setState({ user, page: "journal" }, this.fetchJournals);
  };

  // Add journal entry
  addJournal = async (entry) => {
    try {
      const res = await fetch("http://localhost:5000/api/journals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });
      const savedEntry = await res.json();
      this.setState({ journals: [savedEntry, ...this.state.journals] });
    } catch (err) {
      console.error("Error saving journal:", err);
    }
  };

  // Filter journals
  handleFilter = async (filters) => {
    try {
      let query = [];
      if (filters.startDate) query.push(`startDate=${filters.startDate}`);
      if (filters.endDate) query.push(`endDate=${filters.endDate}`);
      if (filters.mood) query.push(`mood=${filters.mood}`);
      const queryString = query.length ? "?" + query.join("&") : "";

      const res = await fetch(`http://localhost:5000/api/journals${queryString}`);
      const filtered = await res.json();
      this.setState({ journals: filtered });
    } catch (err) {
      console.error("Error filtering journals:", err);
    }
  };

  // Navigation
  goToReport = () => this.setState({ page: "report" });
  goToJournal = () => this.setState({ page: "journal" });

  render() {
    const { page, user, journals } = this.state;

    return (
      <div className="app-container">
        <h1>📝 Daily Journal App</h1>

        {page === "login" && <LoginPage onLogin={this.handleLogin} />}

        {page === "journal" && user && (
          <>
            <p className="welcome-text">Welcome, {user.username}!</p>
            <JournalForm onSubmit={this.addJournal} />
            <button onClick={this.goToReport} className="nav-btn">
              Go to Reports
            </button>
          </>
        )}

        {page === "report" && user && (
          <>
            <ReportFilter onFilter={this.handleFilter} />
            <JournalList entries={journals} />
            <button onClick={this.goToJournal} className="nav-btn">
              Back to Journal
            </button>
          </>
        )}
      </div>
    );
  }
}

export default App;
