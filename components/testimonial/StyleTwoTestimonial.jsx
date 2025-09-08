"use client";
import React from "react";
import { testimonialsData } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ItemTestimonial from "./ItemTestimonial";

const StyleTwoTestimonial = () => {
  return (
    <section className="testimonial testimonial-2 py-100">
      <div className="container mx-auto px-4">
        <div className="row wow fadeInUp" data-wow-delay=".3s">
          <div className="w-full md:w-5/6 md:mx-auto px-3">
            <Swiper
              className="testimonial-carousel"
              modules={[Autoplay]}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: true }}
              speed={1000}
              slidesPerView={1}
            >
              {testimonialsData.map((item) => (
                <SwiperSlide key={item.name}>
                  <ItemTestimonial data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleTwoTestimonial;
