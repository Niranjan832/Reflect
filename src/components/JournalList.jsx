import React, { Component } from "react";

class JournalList extends Component {
  render() {
    return (
      <div className="journal-list">
        <h3>🗂️ Journal Entries</h3>
        {this.props.entries.length === 0 ? (
          <p>No entries found.</p>
        ) : (
          this.props.entries.map((entry, index) => (
            <div className="journal-entry" key={index}>
              <p><strong>Date:</strong> {new Date(entry.date).toLocaleDateString()}</p>
              <p><strong>Mood:</strong> {entry.mood}</p>
              <p>{entry.text}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default JournalList;
