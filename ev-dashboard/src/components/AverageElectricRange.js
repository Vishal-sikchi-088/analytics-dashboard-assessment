import React from "react";

const AverageElectricRange = ({ data }) => {
  const totalRange = data.reduce((sum, vehicle) => sum + vehicle["Electric Range"], 0);
  const averageRange = (totalRange / data.length).toFixed(2);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.title}>Average Electric Range</h3>
        <p style={styles.range}>{averageRange} miles</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    height: "50vh", 
    width: "100%",
  },
  card: {
    backgroundColor: "#fff", 
    borderRadius: "12px",
    padding: "30px", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
    textAlign: "center", 
    width: "280px", 
    transition: "transform 0.2s ease-in-out", 
  },
  title: {
    fontSize: "20px", 
    fontWeight: "600", 
    color: "#333", 
    marginBottom: "15px", 
  },
  range: {
    fontSize: "15px", 
    fontWeight: "700", 
    color: "#4CAF50", 
    margin: 0, 
    letterSpacing: "0.5px", 
  },
};

export default AverageElectricRange;
