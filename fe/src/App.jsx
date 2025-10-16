import React, { Component } from "react";
import LoginPage from "./components/LoginPage";
import JournalForm from "./components/JournalForm";
import ReportFilter from "./components/ReportFilter";
import JournalList from "./components/JournalList";
import "./styles.css";

class App extends Component {
  state = {
    page: "login", // login | journal | report
    user: null,
    journals: [],
    loading: false,
    error: null,
  };

  // ✅ Removed auto-login from localStorage
  componentDidMount() {
    console.log("App loaded. Opening login page first.");
  }

  // ✅ Handle login
  handleLogin = (user) => {
    localStorage.setItem("reflectUser", JSON.stringify(user));
    this.setState({ user, page: "journal" });
  };

  // ✅ Handle logout
  handleLogout = () => {
    localStorage.removeItem("reflectUser");
    this.setState({ user: null, page: "login" });
  };

  // (placeholder async methods)
  fetchJournals = async () => {};
  addJournal = async (entry) => {};
  handleFilter = async (filters) => {};

  goToReport = () => this.setState({ page: "report" });
  goToJournal = () => this.setState({ page: "journal" });

  render() {
    const { page, user, journals, loading, error } = this.state;

    return (
      <div className="app-container">
        <h1 className="app-title">🧠 Reflect — Daily Journal</h1>
        <p className="app-welcome-quote">Welcome to Reflect</p>

        {error && <div className="error-banner">{error}</div>}

        {/* ✅ Always open Login first */}
        {page === "login" && <LoginPage onLogin={this.handleLogin} />}

        {/* ✅ Journal Page */}
        {page === "journal" && user && (
          <>
            <p className="welcome-text">Hello, {user.username}!</p>
            <JournalForm onSubmit={this.addJournal} />
            {loading ? (
              <p className="loading">Loading journals...</p>
            ) : (
              <JournalList entries={journals} />
            )}
            <button onClick={this.goToReport} className="nav-btn">
              View Reports
            </button>
            <button onClick={this.handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        )}

        {/* ✅ Report Page */}
        {page === "report" && user && (
          <>
            <ReportFilter onFilter={this.handleFilter} />
            {loading ? (
              <p className="loading">Loading filtered results...</p>
            ) : (
              <JournalList entries={journals} />
            )}
            <button onClick={this.goToJournal} className="nav-btn">
              Back to Journal
            </button>
          </>
        )}

        <footer>
          Reflect © {new Date().getFullYear()} — All rights reserved.
        </footer>
      </div>
    );
  }
}

export default App;
