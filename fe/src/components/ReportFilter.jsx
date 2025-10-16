import React, { useState } from "react";
import "./ReportFilter.css";

const ReportFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    mood: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleReset = () => {
    setFilters({ startDate: "", endDate: "", mood: "" });
    onFilter({ startDate: "", endDate: "", mood: "" });
  };

  return (
    <form className="filter-form" onSubmit={handleSubmit}>
      <h2 className="filter-title">📊 Filter Reports</h2>
      <div className="filters">
        <div className="filter-group">
          <label>Start Date</label>
          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleChange}
          />
        </div>

        <div className="filter-group">
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleChange}
          />
        </div>

        <div className="filter-group">
          <label>Mood</label>
          <select name="mood" value={filters.mood} onChange={handleChange}>
            <option value="">All Moods</option>
            <option value="Happy">😊 Happy</option>
            <option value="Neutral">😐 Neutral</option>
            <option value="Sad">😢 Sad</option>
            <option value="Angry">😠 Angry</option>
            <option value="Anxious">😰 Anxious</option>
          </select>
        </div>
      </div>

      <div className="filter-buttons">
        <button type="submit" className="apply-btn">
          Apply Filter
        </button>
        <button
          type="button"
          className="reset-btn"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default ReportFilter;
