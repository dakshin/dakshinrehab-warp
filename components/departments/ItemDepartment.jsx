import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const ItemDepartment = ({ data, delay }) => {
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
    <div className="departments-item">
      <div className="departments-item-text-box">
        <i className={`departments-item-icon wow fadeInUp ${data.icon}`} data-wow-delay={delay}></i>
        <div className="item-content wow fadeInUp" data-wow-delay={delay}>
          <h4>{data.name}</h4>
          <p>{data.description}</p>
          <Link href={data.url} className="more" aria-label={data.name}>
            Discover More
          </Link>
        </div>
      </div>
      <Link
        aria-label={data.url}
        href={data.url}
        className="departments-item-img-box relative block"
        ref={imgBoxRef}
      >
        <Image
          src={data.image}
          alt={data.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 991px) 50vw, 33vw"
          className="object-cover"
          priority={false}
        />
        <span></span>
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <i className={`${data.icon} text-white text-5xl opacity-0 hover:opacity-100 transition-opacity duration-300`}></i>
        </div>
      </Link>
    </div>
  );
};

export default ItemDepartment;
