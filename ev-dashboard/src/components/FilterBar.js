import React, { useState } from "react";

const FilterBar = ({ filters, onFilterChange }) => {
  // Remove duplicates from states and modelYears
  const uniqueStates = [...new Set(filters.states)];
  const uniqueYears = [...new Set(filters.modelYears)];

  // Local state to keep track of selected values
  const [selectedState, setSelectedState] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const handleStateChange = (state) => {
    setSelectedState(state);
    onFilterChange({ state, year: selectedYear }); // Pass both state and year
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);
    onFilterChange({ state: selectedState, year }); // Pass both state and year
  };

  return (
    <div style={styles.filterBar}>
      {/* State Filter */}
      <select
        style={styles.select}
        onChange={(e) => handleStateChange(e.target.value)}
        value={selectedState}
      >
        <option value="">All States</option>
        {uniqueStates.map((state, index) => (
          <option key={`${state}-${index}`} value={state}>
            {state}
          </option>
        ))}
      </select>

      {/* Model Year Filter */}
      <select
        style={styles.select}
        onChange={(e) => handleYearChange(e.target.value)}
        value={selectedYear}
      >
        <option value="">All Years</option>
        {uniqueYears.map((year, index) => (
          <option key={`${year}-${index}`} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

const styles = {
  filterBar: {
    display: "flex",
    gap: "20px",
  },
  select: {
    padding: "10px 15px",
    fontSize: "16px",
    border: "1px solid rgba(0, 0, 0, 0.1)", 
    backgroundColor: "transparent", 
    color: "#333", 
    borderRadius: "4px",
    outline: "none", 
    appearance: "none", 
    transition: "all 0.3s ease", 
  },
};

export default FilterBar;
