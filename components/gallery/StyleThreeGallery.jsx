"use client";
import React, { useState } from "react";
import { galleryData } from "@/data/gallery";
import ItemGallery from "./ItemGallery";
import SecTitle from "../common/SecTitle";

const StyleThreeGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const uniqueCategories = [
    "all",
    ...new Set(galleryData.gallery_items.map((item) => item.category)),
  ];

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  return (
    <div className="gallery py-100-70">
      <div className="container mx-auto px-4">
        <SecTitle
          navbarStyle={3}
          title={galleryData.title}
          subTitle={galleryData.subtitle}
          description={galleryData.description}
        />
        <div className="gallery-list text-center">
          <ul className="list-name-gallery">
            {uniqueCategories.map((category) => (
              <li
                key={category}
                className={activeFilter === category ? "active" : ""}
                onClick={() => handleFilterClick(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </li>
            ))}
          </ul>
        </div>
        <div className="row all-gallery">
          {galleryData.gallery_items
            .filter(
              (item) => activeFilter === "all" || item.category === activeFilter
            )
            .map((item) => (
              <div
                className={`col-md-6 col-lg-4 ${item.category}`}
                key={item.title}
              >
                <ItemGallery data={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default StyleThreeGallery;
