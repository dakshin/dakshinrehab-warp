"use client";
import React, { useEffect, useState } from "react";
import LogoNavbar from "./LogoNavbar";
import LinksNavbar from "./LinksNavbar";
import ToolsNavbar from "./ToolsNavbar";

const Navbar = ({ navbarStyle }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-bar ${isScrolled ? "active" : ""}`}>
      <div className="container mx-auto px-4">
        <div className="content-box flex items-center justify-between">
          <LogoNavbar />
          <LinksNavbar />
          <ToolsNavbar navbarStyle={navbarStyle} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
