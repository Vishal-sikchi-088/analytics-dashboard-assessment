import React, { useState } from "react";

const Table = ({ data, rowsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return data.slice(startIndex, endIndex);
  };

  return (
    <div>
      <table style={styles.table}>
        <thead style={styles.thead}>
          <tr>
            <th style={styles.th}>Make</th>
            <th style={styles.th}>Model</th>
            <th style={styles.th}>Year</th>
            <th style={styles.th}>Electric Range</th>
            <th style={styles.th}>State</th>
          </tr>
        </thead>
        <tbody style={styles.tbody}>
          {getCurrentPageData().map((row, index) => (
            <tr key={index} style={styles.tr}>
              <td style={styles.td}>{row.Make}</td>
              <td style={styles.td}>{row.Model}</td>
              <td style={styles.td}>{row["Model Year"]}</td>
              <td style={styles.td}>{row["Electric Range"]}</td>
              <td style={styles.td}>{row.State}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={styles.pagination}>
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          style={
            currentPage === 1
              ? { ...styles.paginationButton, ...styles.paginationButtonDisabled }
              : styles.paginationButton
          }
        >
          First
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={
            currentPage === 1
              ? { ...styles.paginationButton, ...styles.paginationButtonDisabled }
              : styles.paginationButton
          }
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={
            currentPage === totalPages
              ? { ...styles.paginationButton, ...styles.paginationButtonDisabled }
              : styles.paginationButton
          }
        >
          Next
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          style={
            currentPage === totalPages
              ? { ...styles.paginationButton, ...styles.paginationButtonDisabled }
              : styles.paginationButton
          }
        >
          Last
        </button>
      </div>
    </div>
  );
};

const styles = {
  table: {
    width: "96%",
    borderCollapse: "collapse",
    margin: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  thead: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    textAlign: "left",
    fontSize: "16px",
  },
  th: {
    padding: "12px 15px",
    borderBottom: "2px solid #ddd",
  },
  tbody: {
    backgroundColor: "#f9f9f9",
  },
  td: {
    padding: "12px 15px",
    borderBottom: "1px solid #ddd",
    textAlign: "left",
    fontSize: "14px",
  },
  tr: {
    transition: "background-color 0.3s",
  },
  trHover: {
    backgroundColor: "#f1f1f1",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  paginationButton: {
    padding: "8px 12px",
    margin: "0 5px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    transition: "background-color 0.3s",
  },
  paginationButtonDisabled: {
    backgroundColor: "#ccc",
    cursor: "not-allowed",
  },
  paginationButtonHover: {
    backgroundColor: "#45a049",
  },
};

export default Table;
