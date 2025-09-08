"use client";
import React from "react";
import { topNavbar } from "@/data/topNavbar";
import { useShareData } from "@/context/ShareDataContext";
import Link from "next/link";

const TopNavbar = () => {
  const { toggleSearchPopup } = useShareData();

  return (
    <div className="top-navbar">
      <div className="container mx-auto px-4">
        <div className="content-box flex items-center justify-between">
          <ul className="website-info">
            {topNavbar.contactInfo.map((item) => (
              <li key={item.value}>
                <i className={item.icon}></i>
                {item.link ? (
                  <Link href={item.link}>{item.value}</Link>
                ) : (
                  <span>{item.value}</span>
                )}
              </li>
            ))}
          </ul>
          <ul className="website-icon-social">
            {topNavbar.socialLinks.map((social, index) => (
              <li key={index}>
                <Link href={social.link}>
                  <i className={social.icon}></i>
                </Link>
              </li>
            ))}
            <li>
              <button onClick={toggleSearchPopup}>
                <i className="fas fa-search search-icon open"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
