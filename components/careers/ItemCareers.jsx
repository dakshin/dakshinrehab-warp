import Link from "next/link";
import React from "react";

const ItemCareers = ({ data }) => {
  return (
    <div className="item-careers">
      <h4>
        <Link href={data.url}>{data.title}</Link>
      </h4>
      <ul>
        <li className="active">{data.type}</li>
        <li>{data.location}</li>
      </ul>
      <p>{data.description}</p>
      <Link href={data.discover_more} className="link">
        Discover More
      </Link>
    </div>
  );
};

export default ItemCareers;
