import React, { Component } from "react";
import LoginPage from "./components/LoginPage"; // modern login/signup
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

  // Handle login/signup
  handleLogin = (user) => {
    this.setState({ user, page: "journal" });
  };

  // Add journal entry
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

        {page === "login" && <LoginPage onLogin={this.handleLogin} />}

        {page === "journal" && user && (
          <>
            <p className="welcome-text">Welcome, {user.username}!</p>
            <JournalForm onSubmit={this.addJournal} />
            <button onClick={this.goToReport} className="nav-btn">Go to Reports</button>
          </>
        )}

        {page === "report" && user && (
          <>
            <ReportFilter onFilter={(filters) => console.log("Filtered:", filters)} />
            <JournalList entries={journals} />
            <button onClick={this.goToJournal} className="nav-btn">Back to Journal</button>
          </>
        )}
      </div>
    );
  }
}

export default App;
