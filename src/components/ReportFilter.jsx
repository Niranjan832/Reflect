import React, { Component } from "react";

class ReportFilter extends Component {
  state = {
    startDate: "",
    endDate: "",
    mood: "",
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onFilter(this.state);
  };

  render() {
    return (
      <form className="filter-form" onSubmit={this.handleSubmit}>
        <h3>📊 Filter Reports</h3>
        <div className="filters">
          <input type="date" name="startDate" onChange={this.handleChange} />
          <input type="date" name="endDate" onChange={this.handleChange} />

          <select name="mood" onChange={this.handleChange}>
            <option value="">All Moods</option>
            <option>Happy</option>
            <option>Neutral</option>
            <option>Sad</option>
            <option>Angry</option>
            <option>Anxious</option>
          </select>

          <button type="submit">Apply Filter</button>
        </div>
      </form>
    );
  }
}

export default ReportFilter;
