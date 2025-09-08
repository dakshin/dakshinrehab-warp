"use client";
import { useShareData } from "@/context/ShareDataContext";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LinkNavbar = ({ item }) => {
  const { toggleNavbarLinks } = useShareData();
  const [openLinkItem, setOpenLinkItem] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const openLinkItemHandel = () => {
    if (isMobile && item.subMenu) {
      setOpenLinkItem(!openLinkItem);
    }
  };

  return (
    <li
      className={`item-level-1 ${item.subMenu ? "has-menu" : ""}`}
      onClick={openLinkItemHandel}
    >
      <Link
        href={item.link}
        className={`link-level-1 ${openLinkItem ? "active" : ""}`}
      >
        {item.title}
      </Link>

      {item.subMenu && (
        <ul className={`level-2 ${openLinkItem ? "active" : ""}`}>
          {item.subMenu.map((subItem, subIndex) => (
            <li
              key={subIndex}
              className="item-level-2"
              onClick={toggleNavbarLinks}
            >
              <Link href={subItem.link} className="link-level-2">
                {subItem.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default LinkNavbar;
