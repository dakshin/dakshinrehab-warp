import React from "react";

const ItemSkills = ({ skill }) => {
  return (
    <div className="skill-box">
      <div className="skill-top">
        <span className="name">{skill.name}</span>
        <span className="number">{skill.value}</span>
      </div>
      <div className="skill-line">
        <div className="line" data-value={skill.value}></div>
      </div>
    </div>
  );
};

export default ItemSkills;
