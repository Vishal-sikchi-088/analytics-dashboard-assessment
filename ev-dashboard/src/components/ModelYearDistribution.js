import React from "react";
import Chart from "react-apexcharts";

const ModelYearDistribution = ({ data }) => {
  const years = data.map((vehicle) => vehicle["Model Year"]);

  // Count occurrences of each model year
  const yearCounts = years.reduce((acc, year) => {
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  // Log the yearCounts to ensure it's correct
  console.log("Year Counts:", yearCounts);

  // Check if yearCounts is empty
  if (Object.keys(yearCounts).length === 0) {
    return <div>No data available</div>;
  }

  const chartData = {
    series: [Object.values(yearCounts)], 
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      xaxis: {
        categories: Object.keys(yearCounts), 
        title: {
          text: "Model Year",
        },
      },
      yaxis: {
        title: {
          text: "Number of Vehicles",
        },
      },
      colors: ["#4CAF50"],
      dataLabels: {
        enabled: true, 
        style: {
          colors: ["#ffffff"], 
        },
      },
      plotOptions: {
        bar: {
          horizontal: false, 
          columnWidth: "40%", 
          endingShape: "rounded", 
        },
      },
      tooltip: {
        theme: "dark", 
      },
    },
  };

  return (
    <div className="summary-card" style={styles.cardContainer}>
      <h3 style={styles.title}>Vehicle Distribution by Model Year</h3>
      <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
    </div>
  );
};

const styles = {
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
    width: "100%",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "20px",
  },
};

export default ModelYearDistribution;
