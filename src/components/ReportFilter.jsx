import React, { Component } from "react";

class ReportFilter extends Component {
  state = {
    startDate: "",
    endDate: "",
    mood: "",
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleMoodSelect = (selectedMood) => {
    this.setState({ mood: selectedMood });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFilter(this.state);
  };

  render() {
    const moods = ["Happy", "Neutral", "Sad", "Angry", "Anxious"];
    const { mood } = this.state;

    return (
      <form className="filter-card" onSubmit={this.handleSubmit}>
        <h3>📊 Filter Reports</h3>
        <div className="filter-inputs">
          <input
            type="date"
            name="startDate"
            onChange={this.handleChange}
          />
          <input
            type="date"
            name="endDate"
            onChange={this.handleChange}
          />
        </div>

        <div className="filter-moods">
          <p>Select Mood:</p>
          <div className="mood-buttons">
            {moods.map((m) => (
              <button
                key={m}
                type="button"
                className={`mood-btn ${m.toLowerCase()} ${mood === m ? "selected" : ""}`}
                onClick={() => this.handleMoodSelect(m)}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <button type="submit" className="apply-btn">Apply Filter</button>
      </form>
    );
  }
}

export default ReportFilter;
