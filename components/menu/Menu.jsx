"use client";
import { useShareData } from "@/context/ShareDataContext";
import React from "react";
import InnerMenu from "./InnerMenu";

const Menu = () => {
  const { openMenuPopup, toggleMenuPopup } = useShareData();
  return (
    <div
      className={`menu-box ${openMenuPopup ? "active" : ""}`}
      onClick={toggleMenuPopup}
    >
      <div
        className="inner-menu"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <InnerMenu />
      </div>
    </div>
  );
};

export default Menu;
