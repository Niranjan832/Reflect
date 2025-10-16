import React, { useState } from "react";
import "./JournalForm.css";

const JournalForm = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const [mood, setMood] = useState("Neutral");
  const [charCount, setCharCount] = useState(0);

  const moods = [
    { name: "Happy", icon: "😊" },
    { name: "Neutral", icon: "😐" },
    { name: "Sad", icon: "😢" },
    { name: "Angry", icon: "😠" },
    { name: "Anxious", icon: "😰" },
  ];

  const handleChange = (e) => {
    setText(e.target.value);
    setCharCount(e.target.value.length);
  };

  const handleMoodChange = (m) => {
    setMood(m);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    onSubmit({
      text,
      mood,
      date: new Date(),
    });

    setText("");
    setMood("Neutral");
    setCharCount(0);
  };

  return (
    <form className="journal-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Write Your Thoughts</h2>
      <textarea
        name="text"
        placeholder="How are you feeling today? Write freely..."
        value={text}
        onChange={handleChange}
        required
        maxLength={500}
      ></textarea>

      <div className="char-count">{charCount}/500</div>

      <div className="mood-section">
        <p className="mood-label">Select your mood:</p>
        <div className="mood-options">
          {moods.map((m) => (
            <button
              type="button"
              key={m.name}
              className={`mood-btn ${mood === m.name ? "selected" : ""}`}
              onClick={() => handleMoodChange(m.name)}
            >
              <span className="mood-icon">{m.icon}</span>
              <span>{m.name}</span>
            </button>
          ))}
        </div>
      </div>

      <button type="submit" className="save-btn">
        Save Entry
      </button>
    </form>
  );
};

export default JournalForm;
