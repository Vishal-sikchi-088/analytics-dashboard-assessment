import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import CircularProgress from "@mui/material/CircularProgress";

const PriceVsRangeChart = ({ data }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (data.length) {
      // Simulate data processing with a timeout
      setTimeout(() => {
        // Limit the data to improve performance
        const limitedData = data.slice(0, 1000); // Use only the first 1000 entries

        // Map data for chart
        const prices = limitedData.map((vehicle) => vehicle["Base MSRP"]);
        const ranges = limitedData.map((vehicle) => vehicle["Electric Range"]);

        // Prepare chart data
        setChartData({
          series: [
            {
              name: "Electric Range",
              data: ranges.map((range, index) => [prices[index], range]),
            },
          ],
          options: {
            chart: {
              type: "scatter",
            },
            xaxis: {
              title: {
                text: "Base MSRP",
              },
              labels: {
                formatter: (value) => `$${value.toLocaleString()}`,
              },
            },
            yaxis: {
              title: {
                text: "Electric Range (miles)",
              },
            },
            tooltip: {
              shared: false,
              x: {
                formatter: (value) => `$${value.toLocaleString()}`,
              },
              y: {
                formatter: (value) => `${value} miles`,
              },
            },
          },
        });
      }, 500); // Simulated delay
    }
  }, [data]);

  return (
    <div className="summary-card" style={{ textAlign: "center", padding: "20px" }}>
      <h3>Price vs Electric Range</h3>
      {!chartData ? (
        // Show loading spinner while chart data is being prepared
        <CircularProgress />
      ) : (
        <Chart options={chartData.options} series={chartData.series} type="scatter" height={350} />
      )}
    </div>
  );
};

export default PriceVsRangeChart;
