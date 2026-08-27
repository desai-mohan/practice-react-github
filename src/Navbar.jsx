import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/consume">Consume</Link>
        <Link to="/countre">Counter</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
