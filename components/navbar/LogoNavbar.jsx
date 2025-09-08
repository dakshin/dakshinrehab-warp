"use client";
import React from "react";
import { navBar } from "@/data/navBar";
import Link from "next/link";
import { useShareData } from "@/context/ShareDataContext";
import Image from "next/image";

const LogoNavbar = () => {
  const { openNavbarLinks, toggleNavbarLinks } = useShareData();

  return (
    <div className="logo">
      <Link href={navBar.logo.link} className="logo-nav">
        <Image
          className="img-fluid one"
          src={navBar.logo.src}
          alt={navBar.logo.alt}
          width={180}
          height={40}
        />
      </Link>
      {openNavbarLinks ? (
        <button
          className="open-nav-bar"
          onClick={toggleNavbarLinks}
          aria-label="open-nav-bar-1"
        >
          <i className="fas fa-times"></i>
        </button>
      ) : (
        <button
          className={`open-nav-bar${openNavbarLinks ? " active" : ""}`}
          onClick={toggleNavbarLinks}
          aria-label="open-nav-bar-2"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
    </div>
  );
};

export default LogoNavbar;
