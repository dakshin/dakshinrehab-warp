import Link from "next/link";
import React from "react";

const IconFollow = ({ className, followData }) => {
  return (
    <ul className={className ? className : "icon-follow"}>
      {followData.map((item, index) => (
        <li key={`followData-${index}`}>
          <Link href={item.href} aria-label={item.icon}>
            <i className={item.icon}></i>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default IconFollow;
