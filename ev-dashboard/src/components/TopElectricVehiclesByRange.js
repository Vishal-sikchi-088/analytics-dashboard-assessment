import React from "react";

const TopElectricVehiclesByRange = ({ data }) => {
  const topVehicles = data
    .sort((a, b) => b["Electric Range"] - a["Electric Range"])
    .slice(0, 5);

  return (
    <div className="summary-card" style={styles.cardContainer}>
      <h3 style={styles.title}>Top 5 Electric Vehicles by Range</h3>
      <ul style={styles.list}>
        {topVehicles.map((vehicle, index) => (
          <li key={index} style={index === 0 ? styles.topVehicle : styles.listItem}>
            <span style={styles.rank}>{index + 1}.</span>
            <span style={styles.vehicleName}>
              {vehicle.Make} {vehicle.Model}
            </span>
            <span style={styles.range}>{vehicle["Electric Range"]} miles</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    marginTop: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "15px",
    textAlign: "center",
  },
  list: {
    listStyleType: "none",
    paddingLeft: "0",
    margin: "0",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
    fontSize: "18px",
    color: "#333",
  },
  topVehicle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#4CAF50", 
    fontWeight: "bold",
  },
  rank: {
    fontWeight: "600",
    fontSize: "20px",
    marginRight: "10px",
  },
  vehicleName: {
    fontWeight: "500",
  },
  range: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "20px",
    fontWeight: "bold",
  },
};

export default TopElectricVehiclesByRange;
