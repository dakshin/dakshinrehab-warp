"use client";

import { useEffect } from "react";
import ItemSkills from "./ItemSkills";

const Skills = ({ data }) => {
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll(".line").forEach((line) => {
        const rect = line.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const widthValue = line.getAttribute("data-value");

        if (rect.top + rect.height < windowHeight) {
          line.style.width = widthValue;
          line.style.transition = "all 2s ease";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="skills">
      {data.map((skill) => (
        <ItemSkills key={skill.name} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;
