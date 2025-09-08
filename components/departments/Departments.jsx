"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SecTitle from "../common/SecTitle";
import ItemDepartment from "./ItemDepartment";
import { departmentsData } from "@/data/departments";

const Departments = () => {
  return (
    <section className="departments">
      <div className="bg-section">
        <div className="overlay overlay-2"></div>
      </div>
      <div className="container mx-auto px-4">
        <SecTitle
          title={departmentsData.title}
          subTitle={departmentsData.subtitle}
          description={departmentsData.description}
          button={departmentsData.button}
        />
        <Swiper
          className="departments-carousel"
          modules={[Autoplay, Pagination]}
          loop={true}
          spaceBetween={30}
          speed={1000}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
          }}
        >
          {departmentsData.departments.map((item, index) => (
            <SwiperSlide key={item.name}>
              <ItemDepartment data={item} delay={`${0.3 + index * 0.1}s`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Departments;
