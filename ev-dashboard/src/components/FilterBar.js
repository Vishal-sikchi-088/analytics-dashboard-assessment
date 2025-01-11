import React from "react";

const FilterBar = ({ filters, onFilterChange }) => {
  return (
    <div style={styles.filterBar}>
      <select
        style={styles.select}
        onChange={(e) => onFilterChange("state", e.target.value)}
      >
        <option value="">All States</option>
        {filters.states.map((state, index) => (
          <option key={state + index} value={state}>
            {state}
          </option>
        ))}
      </select>

      <select
        style={styles.select}
        onChange={(e) => onFilterChange("modelYear", e.target.value)}
      >
        <option value="">All Years</option>
        {filters.modelYears.map((year, index) => (
          <option key={year + index} value={year}>
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
    gap: "10px",
    margin: "10px 0",
  },
  select: {
    padding: "5px",
    fontSize: "16px",
  },
};

export default FilterBar;
