"use client";
import React from "react";
import { navBar } from "@/data/navBar";
import { useShareData } from "@/context/ShareDataContext";
import LinkNavbar from "./LinkNavbar";

const LinksNavbar = () => {
  const { openNavbarLinks } = useShareData();
  return (
    <div className={`nav-bar-links${openNavbarLinks ? " active" : ""}`}>
      <ul className="level-1">
        {navBar.menu.map((item) => (
          <LinkNavbar key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default LinksNavbar;
