import React from "react";
import ItemGallery from "./ItemGallery";
import { galleryData } from "@/data/gallery";
import SecTitle from "../common/SecTitle";

const Gallery = () => {
  return (
    <div className="gallery py-100-70">
      <div className="container mx-auto px-4">
        <SecTitle
          title={galleryData.title}
          subTitle={galleryData.subtitle}
          description={galleryData.description}
          button={galleryData.button}
        />
        <div className="flex flex-wrap -mx-3">
          {galleryData.gallery_items.map((item, index) => (
            <div key={item.title} className="w-full md:w-1/2 lg:w-1/3 px-3">
              <ItemGallery data={item} delay={`${0.3 + index * 0.1}s`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
