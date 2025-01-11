import React from "react";

const TotalVehiclesCount = ({ data }) => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 style={styles.title}>Total Electric Vehicles</h3>
        <p style={styles.count}>{data.length}</p>
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
    padding: "20px", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
    textAlign: "center", 
    width: "250px",
  },
  title: {
    fontSize: "18px", 
    fontWeight: "600", 
    color: "#333", 
    marginBottom: "10px", 
  },
  count: {
    fontSize: "24px", 
    fontWeight: "700", 
    color: "#4CAF50", 
    margin: 0, 
  },
};

export default TotalVehiclesCount;
