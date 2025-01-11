import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import FilterBar from "./FilterBar";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({ states: [], modelYears: [] });

  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
      setFilteredData(data);

      const states = [...new Set(data.map((d) => d.State))];
      const modelYears = [...new Set(data.map((d) => d["Model Year"]))];
      setFilters({ states, modelYears });
    });
  }, []);

  const handleFilterChange = (filterKey, value) => {
    const filtered = data.filter((d) => d[filterKey] === value || !value);
    setFilteredData(filtered);
  };

  return (
    <div>
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />
    </div>
  );
};

export default Dashboard;
