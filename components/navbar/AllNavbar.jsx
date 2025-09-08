import React from "react";
import TopNavbar from "./topNavbar/TopNavbar";
import Navbar from "./Navbar";

const AllNavbar = ({ navbarStyle }) => {
  return (
    <header className="all-navbar">
      {[1, 3].includes(navbarStyle) && <TopNavbar />}
      <Navbar navbarStyle={navbarStyle} />
    </header>
  );
};

export default AllNavbar;
