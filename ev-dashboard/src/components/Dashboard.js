import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/api";
import FilterBar from "./FilterBar";
import AverageElectricRange from "./AverageElectricRange";
import VehicleCountByMake from "./VehicleCountByMake";
import ModelYearDistribution from "./ModelYearDistribution";
import PriceVsRangeChart from "./PriceVsRangeChart";
import VehicleTypeDistribution from "./VehicleTypeDistribution";
import TopElectricVehiclesByRange from "./TopElectricVehiclesByRange";
import LegislativeDistrictBreakdown from "./LegislativeDistrictBreakdown";
import TotalVehiclesCount from "./TotalVehiclesCount";
import Table from "./Table";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  CssBaseline,
  CircularProgress,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({ states: [], modelYears: [] });
  const [activeComponent, setActiveComponent] = useState("Table");
  const [loading, setLoading] = useState(true); // Add loading state
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
        setFilteredData(data);

        const states = [...new Set(data.map((d) => d.State))];
        const modelYears = [...new Set(data.map((d) => d["Model Year"]))];
        setFilters({ states, modelYears });

        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Stop loading even if there's an error
      });
  }, []);

  const handleFilterChange = ({ state, year }) => {
    const filtered = data.filter(
      (d) =>
        (d.State === state || !state) && // Filter by state if a state is selected
        (d["Model Year"] === year || !year) // Filter by year if a year is selected
    );
    setFilteredData(filtered);
  };

  const renderComponent = (component) => {
    switch (component) {
      case "Vehicle Count":
        return <TotalVehiclesCount data={filteredData} />;
      case "Average Electric Range":
        return <AverageElectricRange data={filteredData} />;
      case "Vehicle Count by Make":
        return <VehicleCountByMake data={filteredData} />;
      case "Model Year Distribution":
        return <ModelYearDistribution data={filteredData} />;
      case "Price vs Range Chart":
        return <PriceVsRangeChart data={filteredData} />;
      case "Vehicle Type Distribution":
        return <VehicleTypeDistribution data={filteredData} />;
      case "Top Electric Vehicles by Range":
        return <TopElectricVehiclesByRange data={filteredData} />;
      case "Legislative District Breakdown":
        return <LegislativeDistrictBreakdown data={filteredData} />;
      case "Table":
        return <Table data={filteredData} rowsPerPage={10} />;
      default:
        return null;
    }
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" style={{ zIndex: 1300 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">EV Analytics Dashboard</Typography>
          <Box style={{ flex: 1 }} />
          <FilterBar filters={filters} onFilterChange={handleFilterChange} />
        </Toolbar>
      </AppBar>

      <Drawer open={open} onClose={handleDrawerToggle} variant="temporary">
        <div style={{ padding: 15, width: 300 }}>
          <List>
            {[
              "Filter Data",
              "Vehicle Count",
              "Average Electric Range",
              "Vehicle Count by Make",
              "Model Year Distribution",
              "Price vs Range Chart",
              "Vehicle Type Distribution",
              "Top Electric Vehicles by Range",
              "Legislative District Breakdown",
              "Table",
            ].map((text) => (
              <ListItem
                button
                key={text}
                onClick={() => {
                  setActiveComponent(text);
                  setLoading(true); // Show loading when switching components
                  setTimeout(() => setLoading(false), 500); // Simulate loading time
                  setOpen(false);
                }}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>

      <main style={{ marginLeft: open ? 250 : 0, width: "100%", transition: "margin-left 0.3s" }}>
        <div style={{ marginTop: 80, padding: 20 }}>
          {loading ? (
            <Box display="flex" justifyContent="center" alignItems="center" style={{ height: "50vh" }}>
              <CircularProgress />
            </Box>
          ) : (
            renderComponent(activeComponent)
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
