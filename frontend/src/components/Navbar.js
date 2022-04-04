import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <Link to="/admin-login">
          <button>Login</button>
        </Link>
        <Link to="/order/create">
          <button>Create Order</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
