import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItemDoctors = ({ data, delay }) => {
  return (
    <div className="doctors-box">
      <div className="img-box">
        <Image
          className="img-fluid"
          src={data.image}
          alt={data.name}
          height={800}
          width={800}
        />
        <div className="img-box-hover">
          <ul>
            {data.social_links.facebook && (
              <li>
                <Link href={data.social_links.facebook}>
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
            )}
            {data.social_links.twitter && (
              <li>
                <Link href={data.social_links.twitter}>
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
            )}
            {data.social_links.instagram && (
              <li>
                <Link href={data.social_links.instagram}>
                  <i className="fab fa-instagram"></i>
                </Link>
              </li>
            )}
            {data.social_links.dribbble && (
              <li>
                <Link href={data.social_links.dribbble}>
                  <i className="fab fa-dribbble"></i>
                </Link>
              </li>
            )}
            {data.social_links.behance && (
              <li>
                <Link href={data.social_links.behance}>
                  <i className="fab fa-behance"></i>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="text-box text-center wow fadeInUp" data-wow-delay={delay}>
        <h5>{data.name}</h5>
        <span>{data.specialty}</span>
      </div>
    </div>
  );
};

export default ItemDoctors;
