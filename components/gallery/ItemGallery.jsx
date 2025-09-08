"use client";
import { useShareData } from "@/context/ShareDataContext";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const ItemGallery = ({ data, delay }) => {
  const imgBoxRef = useRef(null);
  const { showImagePopupHandel } = useShareData();

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
    <>
      <div className="gallery-item wow fadeInUp" data-wow-delay={delay} ref={imgBoxRef}>
        <span></span>
        <div className="img-box">
          <Image
            className="img-fluid gallery-item-img"
            src={data.image}
            alt={data.alt}
            width={800}
            height={800}
          />
        </div>
        <div className="hover-box">
          <div className="text-box">
            <div className="tags">
              <Link href={data.details_link}>{data.tag}</Link>
            </div>
            <h4>
              <Link href={data.details_link}>{data.title}</Link>
            </h4>
          </div>
          <ul className="gallery-icon">
            <li>
              <Link href={data.details_link}>
                <i className="fas fa-link"></i>
              </Link>
            </li>
            <li>
              <button
                onClick={() => showImagePopupHandel(data.title, data.image)}
                className="popup"
              >
                <i className="far fa-eye"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ItemGallery;
