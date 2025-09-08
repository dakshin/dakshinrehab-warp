"use client";
import React, { useEffect } from "react";

const BackToTop = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      const backTopButton = document.getElementById("scroll-up");

      if (window.scrollY > 50) {
        backTopButton.classList.add("active");
      } else {
        backTopButton.classList.remove("active");
      }
    });
  }, []);

  const backToTop = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-up" id="scroll-up">
      <button onClick={backToTop} aria-label="scroll-up">
        <i className="fas fa-long-arrow-alt-up"></i>
      </button>
    </div>
  );
};

export default BackToTop;
