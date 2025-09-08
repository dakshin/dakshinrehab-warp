"use client";
import React from "react";
import Image from "next/image";
import { testimonialsData } from "@/data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ItemTestimonial from "./ItemTestimonial";

const Testimonial = () => {
  return (
    <section className="testimonial py-100 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/testimonial/01_testimonial.webp"
          alt="Testimonial background"
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
        <div className="overlay overlay-2"></div>
      </div>
      <div className="w-full px-4 relative z-10">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full md:w-5/12 p-0">
            <div className="testimonial-img-box">
              <div className="img-box relative">
                <Image
                  src="/assets/images/testimonial/01_testimonial-say.webp"
                  alt="Testimonial person"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-7/12 p-0">
            <div className="testimonial-text-box">
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
      </div>
    </section>
  );
};

export default Testimonial;
