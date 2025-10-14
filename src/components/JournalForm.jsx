import React, { Component } from "react";

class JournalForm extends Component {
  state = {
    text: "",
    mood: "Neutral",
    charCount: 0,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ 
      [name]: value,
      charCount: name === "text" ? value.length : this.state.charCount
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.trim()) return;
    this.props.onSubmit({
      text: this.state.text,
      mood: this.state.mood,
      date: new Date(),
    });
    this.setState({ text: "", mood: "Neutral", charCount: 0 });
  };

  render() {
    const moods = ["Happy", "Neutral", "Sad", "Angry", "Anxious"];
    const { text, mood, charCount } = this.state;

    return (
      <form className="journal-form" onSubmit={this.handleSubmit}>
        <textarea
          name="text"
          placeholder="Write your thoughts..."
          value={text}
          onChange={this.handleChange}
          required
          maxLength={500}
        ></textarea>
        <div className="char-count">{charCount}/500</div>

        <div className="mood-options">
          <p>Select your mood:</p>
          {moods.map((m) => (
            <label key={m} className={`mood-label ${m.toLowerCase()}`}>
              <input
                type="radio"
                name="mood"
                value={m}
                checked={mood === m}
                onChange={this.handleChange}
              />
              {m}
            </label>
          ))}
        </div>

        <button type="submit" className="save-btn">Save Entry</button>
      </form>
    );
  }
}

export default JournalForm;
