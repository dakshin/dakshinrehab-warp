"use client";
import { useShareData } from "@/context/ShareDataContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconFollow from "../common/IconFollow";

const Widget = ({ style, data }) => {
  const { showImagePopupHandel } = useShareData();
  const departmentWidget = data?.departments && (
    <div className="widget">
      <div className="widget-title">
        <h3>Department</h3>
      </div>
      <div className="widget-body">
        <ul className="single-department-list">
          {data.departments.map((item, index) => (
            <li key={index} className={index === 0 ? "active" : ""}>
              <Link href={`#${item}`}>
                {item} <i className="fas fa-angle-right"></i>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  const instagramWidget = data?.instagram && (
    <div className="widget">
      <div className="widget-title">
        <h3>Instagram</h3>
      </div>
      <div className="widget-body">
        <div className="instagram">
          <ul>
            {data.instagram.map((item, index) => (
              <li
                key={index}
                onClick={() => showImagePopupHandel(`Gallery-${index}`, item)}
              >
                <Image
                  className="img-fluid"
                  src={item}
                  alt={`Gallery-${index}`}
                  width={1000}
                  height={1000}
                  style={{ width: "100%", height: "auto" }}
                />
                <div className="open-photo">
                  <i className="fas fa-plus"></i>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  const searchWidget = (
    <div className="widget">
      <div className="widget-title">
        <h3>Search</h3>
      </div>
      <div className="widget-body">
        <div className="search">
          <input
            type="text"
            name="search"
            placeholder="Search Your Keywords..."
          />
          <button className="click">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
  const tagsWidget = data?.tags && (
    <div className="widget">
      <div className="widget-title">
        <h3>Tags</h3>
      </div>
      <div className="widget-body">
        <div className="tags">
          <ul>
            {data.tags.map((item, index) => (
              <li key={index}>
                <Link href={`#${item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  const categoriesWidget = data?.categories && (
    <div className="widget">
      <div className="widget-title">
        <h3>categories</h3>
      </div>
      <div className="categories">
        <ul>
          {data.categories.map((item, index) => (
            <li key={index}>
              <Link href={`#${item}`}>
                <i className="fas fa-folder-open"></i> {item}
                <span>
                  <i className="fas fa-angle-right"></i>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  const followWidget = data?.follow && (
    <div className="widget">
      <div className="widget-title">
        <h3>Follow Us</h3>
      </div>
      <div className="widget-body">
        <div className="follow">
          <IconFollow className="icon" followData={data?.follow} />
        </div>
      </div>
    </div>
  );
  const blogsWidget = data?.blogs && (
    <div className="widget">
      <div className="widget-title">
        <h3>News, Tips &amp; More :</h3>
      </div>
      <div className="news-box">
        {data?.blogs.map((item) => (
          <div className="news-item" key={item.title}>
            <Image
              className="img-fluid"
              src={item.image}
              alt={item.title}
              width={60}
              height={60}
            />
            <div className="item-content">
              <span>
                <Link href="/blog/1">{item.date}</Link>
              </span>
              <Link href="/blog/1" className="title-blog">
                <h5>{item.title}</h5>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return style === "department"
    ? departmentWidget
    : style === "instagram"
    ? instagramWidget
    : style === "search"
    ? searchWidget
    : style === "tags"
    ? tagsWidget
    : style === "categories"
    ? categoriesWidget
    : style === "follow"
    ? followWidget
    : style === "blogs"
    ? blogsWidget
    : null;
};

export default Widget;
