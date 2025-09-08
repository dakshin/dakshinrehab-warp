"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { useShareData } from "@/context/ShareDataContext";
import AnimatedText from "../common/AnimatedText";

const Header = () => {
  const { showYoutubeVideoUrlHandel } = useShareData();
  return (
    <>
      <section className="header">
        <Swiper
          className="header-carousel"
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          speed={1000}
          pagination={{ clickable: true }}
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
                backgroundImage: "url(/assets/images/header/01_header.webp)",
              }}
            >
              <div className="table-cell">
                <div className="overlay"></div>
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full lg:w-1/2 px-3">
                      <div className="banner">
                        <h1 className="handline splt-txt wow">
                          <AnimatedText text="Advanced Stroke & Spinal Cord Injury Rehabilitation" />
                          </h1>
                        <p className="about-website splt-txt wow">
                          <AnimatedText
                            text="DakshinRehab in Hyderabad specializes in comprehensive stroke and spinal cord injury rehabilitation, helping patients regain mobility, strength, and independence through personalized physiotherapy and neuro rehab programs."
                            />
                        </p>
                        <Link
                          className="btn-1 move-section wow fadeInUp"
                          data-wow-delay=".3s"
                          href="#start"
                        >
                          Let's Start
                        </Link>
                        <Link
                          className="btn-1 btn-2 ml-30 wow fadeInUp"
                          data-wow-delay=".5s"
                          href="/department"
                        >
                          Our Department
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
                backgroundImage: "url(/assets/images/header/02_header.webp)",
              }}
            >
              <div className="table-cell">
                <div className="overlay"></div>
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full lg:w-1/2 px-3">
                      <div className="banner">
                        <h1 className="handline splt-txt wow">
                          <AnimatedText text="Sciatica & Radiculopathy Pain Relief in Hyderabad" />
                          </h1>
                        <p className="about-website splt-txt wow">
                          <AnimatedText
                            text="DakshinRehab offers expert sciatica and radiculopathy management using evidence-based physiotherapy techniques, spinal decompression, and personalized rehab plans to alleviate pain and restore function."
                            />
                        </p>
                        <Link
                          className="btn-1 btn-2 wow fadeInUp"
                          data-wow-delay=".3s"
                          href="/doctors-timetable"
                        >
                          Find A Doctor
                        </Link>
                        <Link
                          className="btn-1 btn-3 ml-30 wow fadeInUp"
                          data-wow-delay=".5s"
                          href="/about"
                        >
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
                backgroundImage: "url(/assets/images/header/03_header.webp)",
              }}
            >
              <div className="table-cell">
                <div className="overlay"></div>
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full lg:w-1/2 px-3">
                      <div className="banner">
                        <h1 className="handline splt-txt wow">
                          <AnimatedText text="Prosthetics & Orthotics Solutions in Hyderabad" />
                        </h1>
                        <p className="about-website splt-txt wow">
                          <AnimatedText
                              text="At DakshinRehab, our prosthetics and orthotics specialists design custom devices to restore mobility, enhance comfort, and improve quality of life for patients in Hyderabad."
                            />
                        </p>
                        <div className="flex items-center flex-wrap gap-3">
                          <Link
                            className="btn-1 btn-2 wow fadeInUp"
                            data-wow-delay=".3s"
                            href="/about"
                          >
                            More About Us
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
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </section>
    </>
  );
};

export default Header;
