import React, { Component } from "react";

class JournalForm extends Component {
  state = {
    text: "",
    mood: "Neutral",
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.trim()) return;
    this.props.onSubmit({
      text: this.state.text,
      mood: this.state.mood,
      date: new Date(),
    });
    this.setState({ text: "", mood: "Neutral" });
  };

  render() {
    return (
      <form className="journal-form" onSubmit={this.handleSubmit}>
        <textarea
          name="text"
          placeholder="Write your thoughts..."
          value={this.state.text}
          onChange={this.handleChange}
          required
        ></textarea>

        <label>
          Mood:
          <select name="mood" value={this.state.mood} onChange={this.handleChange}>
            <option>Happy</option>
            <option>Neutral</option>
            <option>Sad</option>
            <option>Angry</option>
            <option>Anxious</option>
          </select>
        </label>

        <button type="submit">Save Entry</button>
      </form>
    );
  }
}

export default JournalForm;
