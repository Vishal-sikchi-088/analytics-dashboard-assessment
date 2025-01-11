import React from "react";
import Chart from "react-apexcharts";

const VehicleTypeDistribution = ({ data }) => {
  const types = data.map((vehicle) => vehicle["Electric Vehicle Type"]);
  const typeCounts = types.reduce((acc, type) => {
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    series: Object.values(typeCounts),
    options: {
      chart: {
        type: "pie",
      },
      labels: Object.keys(typeCounts),
      legend: {
        position: "bottom",
        labels: {
          colors: "#333",
          useSeriesColors: true,
        },
      },
      colors: ["#FF5733", "#33C4FF", "#28A745", "#FFC107", "#6F42C1"],
      dataLabels: {
        style: {
          fontSize: "14px",
          colors: ["#fff"],
        },
      },
      tooltip: {
        theme: "dark",
        y: {
          formatter: (val) => `${val} vehicles`,
        },
      },
    },
  };

  return (
    <div style={styles.cardContainer}>
      <h3 style={styles.title}>Electric Vehicle Type Distribution</h3>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width="100%"
        height={400}
      />
    </div>
  );
};

const styles = {
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "20px 0",
    width: "100%",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "20px",
  },
};

export default VehicleTypeDistribution;
