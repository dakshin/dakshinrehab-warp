"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { useShareData } from "@/context/ShareDataContext";
import AnimatedText from "../common/AnimatedText";

const StyleTwoHeader = () => {
  const { showYoutubeVideoUrlHandel } = useShareData();
  return (
    <>
      <section className="header home-2">
        <Swiper
          className="header-carousel"
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          speed={1000}
          grabCursor={true}
          slidesPerView={1}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            991: { slidesPerView: 1 },
          }}
        >
          <SwiperSlide>
            <div
              className="sec-hero display-table"
              style={{
                backgroundImage: "url(/assets/images/header/04_header.webp)",
              }}
            >
              <div className="table-cell">
                <div className="overlay"></div>
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full lg:w-1/2 px-3">
                      <div className="banner">
                        <h1 className="handline splt-txt wow">
                          <AnimatedText text="Best Care For Your Family" />
                        </h1>
                        <p className="about-website splt-txt wow">
                          <AnimatedText
                            text="MedDoctors Are A Medical And Health Department
                          Provider Institutions. Suitable For Healthcare,
                          Medical, Doctor, Dental, Dentist, Pharmacy, Health And
                          Any Related Medical Care Field."
                          />
                        </p>
                        <div className="flex items-center flex-wrap gap-3">
                          <Link
                            className="btn-1 btn-2 wow fadeInUp"
                            data-wow-delay=".3s"
                            href="#start"
                          >
                            Let's Start
                          </Link>
                          <span
                            className="header-video ml-30 wow fadeInUp"
                            data-wow-delay=".5s"
                            onClick={() =>
                              showYoutubeVideoUrlHandel(
                                "https://www.youtube.com/embed/TKnufs85hXk?si=28-Wg09VkcMw2l_I"
                              )
                            }
                          >
                            <button className="pulse" aria-label="pulse">
                              <i className="fas fa-play"></i>
                            </button>
                            <span className="video-name">
                              Watch Our <br />
                              Video!
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="sec-hero display-table"
              style={{
                backgroundImage: "url(/assets/images/header/02_header.webp)",
              }}
            >
              <div className="table-cell">
                <div className="overlay"></div>
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full lg:w-1/2 px-3">
                      <div className="banner">
                        <h1 className="handline">
                          Specialized Spinal Cord Injury Rehabilitation
                        </h1>
                        <p className="about-website">
                          DakshinRehab provides comprehensive spinal cord injury rehabilitation to help patients regain mobility, strength, and independence. Our expert physiotherapists and neuro rehab specialists deliver personalized treatment plans for optimal recovery.
                        </p>
                        <Link className="btn-1 btn-2" href="/doctors-timetable">
                          Book Appointment
                        </Link>
                        <Link className="btn-1 btn-3 ml-30" href="/about-2">
                          Discover More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="sec-hero display-table"
              style={{
                backgroundImage: "url(/assets/images/header/05_header.webp)",
              }}
            >
              <div className="table-cell">
                <div className="overlay"></div>
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full lg:w-1/2 px-3">
                      <div className="banner">
                        <h1 className="handline">
                          Microprocessor-Controlled Leg Prostheses
                        </h1>
                        <p className="about-website">
                          DakshinRehab offers advanced microprocessor-controlled leg prostheses, designed to provide natural gait, improved stability, and enhanced mobility. Our personalized fitting and rehabilitation programs ensure optimal comfort and functional recovery.
                        </p>
                        <Link className="btn-1" href="/department-2">
                          Our Departments
                        </Link>
                        <a className="btn-1 btn-3 ml-30" href="/about-2">
                          Discover More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="container swiper-pagination-container">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </section>
    </>
  );
};

export default StyleTwoHeader;
