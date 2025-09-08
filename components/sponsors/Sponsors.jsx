"use client";
import React from "react";
import SecTitle from "../common/SecTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { sponsorsData } from "@/data/sponsors";
import Image from "next/image";

const Sponsors = () => {
  return (
    <section className="sponsors-page py-100-70">
      <div className="container mx-auto px-4">
        <SecTitle
          navbarStyle={2}
          title="They MedDoctors Us"
          subTitle="Our Clients"
          description="MedDoctors Are A Medical And Health Department Provider Institutions. Suitable For Healthcare, Medical, Doctor, Dental, Dentist, Pharmacy, Health And Any Related Medical Care Field."
        />
        <Swiper
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={1000}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 2 },
            575: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            991: { slidesPerView: 6 },
          }}
          modules={[Autoplay]}
          className="sponsors-carousel"
        >
          {sponsorsData.map((sponsor, index) => (
            <SwiperSlide key={index}>
              <Image
                className="img-fluid"
                src={sponsor.image}
                alt={sponsor.alt}
                width={190}
                height={125}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Sponsors;
