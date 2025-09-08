"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
const StyleThreeItemDepartment = ({ data }) => {
  const imgBoxRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imgBoxRef.current) return;
      const { left, top } = imgBoxRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      imgBoxRef.current.querySelector(
        "span"
      ).style.cssText = `top: ${y}px; left: ${x}px;`;
    };

    const imgBoxElement = imgBoxRef.current;
    if (imgBoxElement) {
      imgBoxElement.addEventListener("mouseenter", handleMouseMove);
      imgBoxElement.addEventListener("mouseout", handleMouseMove);
    }

    return () => {
      if (imgBoxElement) {
        imgBoxElement.removeEventListener("mouseenter", handleMouseMove);
        imgBoxElement.removeEventListener("mouseout", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="departments-item" ref={imgBoxRef}>
      <span></span>
      <i className={`departments-item-icon ${data.icon}`}></i>
      <div className="item-content">
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <Link href={data.link.href} className="more">
          {data.link.text}
        </Link>
      </div>
    </div>
  );
};

export default StyleThreeItemDepartment;
