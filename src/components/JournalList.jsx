import React, { Component } from "react";

class JournalList extends Component {
  render() {
    const { entries } = this.props;

    const moodColors = {
      Happy: "#ffb400",
      Neutral: "#999",
      Sad: "#2196f3",
      Angry: "#f44336",
      Anxious: "#9c27b0",
    };

    return (
      <div className="journal-list">
        <h3>🗂️ Journal Entries</h3>
        {entries.length === 0 ? (
          <p className="no-entries">No entries found.</p>
        ) : (
          entries.map((entry, index) => (
            <div className="journal-entry-card" key={index}>
              <div className="journal-header">
                <span className="journal-date">
                  {new Date(entry.date).toLocaleDateString(undefined, {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span
                  className="journal-mood"
                  style={{ backgroundColor: moodColors[entry.mood] }}
                >
                  {entry.mood}
                </span>
              </div>
              <p className="journal-text">{entry.text}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default JournalList;
