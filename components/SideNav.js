import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  const navStyle = {
    marginTop : "20px",
    width: "300px",
    bottom : "0px", // Full height of the viewport
    backgroundColor: "#f8f9fa",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    overflowY: "auto", // 
  };

  return (
    <div style={navStyle}>
      <input
        type="text"
        placeholder="Search..."
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <h3>Previous Year Questions (PYQs)</h3>
      <h4 style={{ marginTop: "20px" }}>Subjects</h4>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link
            to="/physics"
            style={{ textDecoration: "none", color: "#007bff", display: "block", marginBottom: "10px" }}
          >
            Physics
          </Link>
        </li>
        <li>
          <Link
            to="/chemistry"
            style={{ textDecoration: "none", color: "#007bff", display: "block", marginBottom: "10px" }}
          >
            Chemistry
          </Link>
        </li>
        <li>
          <Link
            to="/mathematics"
            style={{ textDecoration: "none", color: "#007bff", display: "block", marginBottom: "10px" }}
          >
            Mathematics
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
