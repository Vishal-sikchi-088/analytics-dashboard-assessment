import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>EV Analytics Dashboard</h1>
    </nav>
  )
}

const styles = {
  nav: {
    backgroundColor: "#4CAF50",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: "24px",
  },
};

export default Navbar;
