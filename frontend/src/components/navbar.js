import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">ExcerTracker</Link>
      <Link to="/">Excercises</Link>
      <Link to="/create">Create Exercise Log</Link>
      <Link to="/user">Create User</Link>
    </div>
  );
};

export default Navbar;
