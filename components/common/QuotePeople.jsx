import React from "react";

const QuotePeople = ({ data }) => {
  return (
    <div className="quotes-people">
      <p>{data.text}</p>
      <div className="people-name">
        <h5>{data.person.name}</h5>
        <span>{data.person.designation}</span>
      </div>
    </div>
  );
};

export default QuotePeople;
