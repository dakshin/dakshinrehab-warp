import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const ItemBlog = ({ data, delay }) => {
  return (
    <div className="blog-item">
      <div className="img-box">
        <Link href={data.link} className="open-post" aria-label={data.title}>
          <Image
            className="img-fluid"
            src={data.image}
            alt={data.title}
            width={900}
            height={900}
          />
        </Link>
        {data.categories && (
          <>
            <ul className="wow fadeInUp" data-wow-delay={delay}>
              {data.categories.map((cat, index) => (
                <Fragment key={cat}>
                  <li>
                    <Link href={data.link} aria-label={cat}>
                      {cat}
                    </Link>
                  </li>
                  {index !== data.categories.length - 1 && (
                    <li>
                      <Link href="/" aria-label=",">
                        
                        ,
                      </Link>
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="text-box wow fadeInUp" data-wow-delay={delay}>
        <span className="blog-date">{data.date}</span>
        <Link href={data.link} aria-label={data.title} className="title-blog">
          <h5>{data.title}</h5>
        </Link>
        <p>{data.excerpt}</p>
        <Link href={data.link} aria-label={data.title} className="link">
          Discover More
        </Link>
      </div>
    </div>
  );
};

export default ItemBlog;
