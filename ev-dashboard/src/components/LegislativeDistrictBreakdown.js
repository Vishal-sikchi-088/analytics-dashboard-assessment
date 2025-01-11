import React from "react";

const LegislativeDistrictBreakdown = ({ data }) => {
  const districts = data.map((vehicle) => vehicle["Legislative District"]);
  const districtCounts = districts.reduce((acc, district) => {
    acc[district] = (acc[district] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="summary-card" style={styles.cardContainer}>
      <h3 style={styles.title}>Vehicles by Legislative District</h3>
      <ul style={styles.list}>
        {Object.entries(districtCounts).map(([district, count]) => (
          <li key={district} style={styles.listItem}>
            <span style={styles.districtLabel}>District {district}: </span>
            <span style={styles.count}>{count} vehicles</span>
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
  districtLabel: {
    fontWeight: "500",
  },
  count: {
    backgroundColor: "#4CAF50", 
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "20px",
    fontWeight: "bold",
  },
};

export default LegislativeDistrictBreakdown;
