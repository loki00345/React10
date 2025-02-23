import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#eee" }}>
      <h2>My App</h2>
      {user ? (
        <Link to="/profile">
          <img src={user.picture} alt="avatar" style={{ width: "40px", borderRadius: "50%" }} />
        </Link>
      ) : (
        <Link to="/">Увійти</Link>
      )}
    </nav>
  );
};

export default Navbar;
