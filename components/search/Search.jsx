"use client";
import { useShareData } from "@/context/ShareDataContext";
import React from "react";

const Search = () => {
  const { openSearchPopup, toggleSearchPopup } = useShareData();
  return (
    <div
      className={`search-box ${openSearchPopup ? "active" : ""}`}
      onClick={toggleSearchPopup}
    >
      <form
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <input type="text" placeholder="Search Here....." />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <span className="search-box-icon exit" onClick={toggleSearchPopup}>
        <i className="fas fa-times"></i>
      </span>
    </div>
  );
};

export default Search;
