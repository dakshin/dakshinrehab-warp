"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import ItemGallery from "./ItemGallery";
import { galleryData } from "@/data/gallery";
import SecTitle from "../common/SecTitle";

const StyleTwoGallery = ({ navbarStyle }) => {
  return (
    <section className="gallery gallery-2 py-100-70">
      <div className="container mx-auto px-4">
        <SecTitle
          navbarStyle={navbarStyle}
          title={galleryData.title}
          subTitle={galleryData.subtitle}
          description={galleryData.description}
          button={{ text: galleryData.button.text, href: "/gallery-2" }}
        />
        <Swiper
          className="gallery-carousel"
          modules={[Navigation, Autoplay]}
          loop={true}
          spaceBetween={30}
          speed={1000}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
          }}
        >
          {galleryData.gallery_items.map((item) => (
            <SwiperSlide key={item.title}>
              <ItemGallery data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default StyleTwoGallery;
