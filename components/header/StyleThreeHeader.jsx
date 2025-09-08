"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import AnimatedText from "../common/AnimatedText";

const StyleThreeHeader = () => {
  return (
    <>
      <section className="header header-3">
        <Swiper
          className="header-carousel"
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
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
                backgroundImage: "url(/assets/images/header/05_header.webp)",
              }}
            >
              <div className="table-cell">
                <div className="overlay"></div>
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="col-lg-6 flex items-center justify-between">
                      <div className="banner">
                        <h1 className="handline splt-txt wow">
                          <AnimatedText text="Expert Child Development Services" />
                        </h1>
                        <p className="about-website splt-txt wow">
                          <AnimatedText
                            text="DakshinRehab provides specialized child development programs to support physical, cognitive, and emotional growth. Our expert pediatric therapists offer personalized care for developmental delays, motor skill improvement, and holistic child wellness."
                          />
                        </p>
                        <Link
                          className="btn-1 move-section  wow fadeInUp"
                          data-wow-delay=".3s"
                          href="#start"
                        >
                          Let's Start
                        </Link>
                        <Link
                          className="btn-1 btn-2 ml-30  wow fadeInUp"
                          data-wow-delay=".5s"
                          href="/department-3"
                        >
                          Our Department
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 flex items-center justify-end header-features">
                      <div className="features-box">
                        <div className="item wow fadeInUp" data-wow-delay=".3s">
                          <i className="flaticon-doctor-1"></i>
                          <div className="item-content">
                            <h4>Sports Injuries Care</h4>
                            <p>
                              Expert physiotherapists providing personalized <br />
                              treatment for sports injuries, rehabilitation, and performance recovery.
                            </p>
                          </div>
                        </div>
                        <div
                          className="item active wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <i className="flaticon-medicine"></i>
                          <div className="item-content">
                            <h4>Clinical Pilates</h4>
                            <p>
                              Personalized pilates programs designed to <br />
                              improve core strength, posture, and overall mobility.
                            </p>
                          </div>
                        </div>
                        <div className="item wow fadeInUp" data-wow-delay=".7s">
                          <i className="flaticon-cross"></i>
                          <div className="item-content">
                            <h4>Standards Of Treatments</h4>
                            <p>
                              Lorem Ipsum is simply text of <br />
                              the printing.
                            </p>
                          </div>
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
                backgroundImage: "url(/assets/images/header/01_header.webp)",
              }}
            >
              <div className="table-cell">
                <div className="overlay"></div>
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="col-lg-6 flex items-center justify-between">
                      <div className="banner">
                        <h1 className="handline splt-txt wow">
                          <AnimatedText text="Advanced Bionic Hand Prostheses" />
                        </h1>
                        <p className="about-website splt-txt wow">
                          <AnimatedText
                            text="DakshinRehab provides cutting-edge bionic hand prostheses, helping patients regain functionality, dexterity, and independence. Our personalized fitting and rehabilitation programs ensure optimal comfort and performance."
                          />
                        </p>
                        <Link
                          className="btn-1 move-section  wow fadeInUp"
                          data-wow-delay=".3s"
                          href="/appointment"
                        >
                          make an appointment
                        </Link>
                        <Link
                          className="btn-1 btn-2 ml-30  wow fadeInUp"
                          data-wow-delay=".5s"
                          href="/about-3"
                        >
                          Discover More
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 flex items-center justify-end header-features">
                      <div className="features-box">
                        <div className="item wow fadeInUp" data-wow-delay=".3s">
                          <i className="flaticon-hospital"></i>
                          <div className="item-content">
                            <h4>Advanced Prosthetics</h4>
                            <p>
                              State-of-the-art bionic hand prostheses <br />
                              designed for optimal functionality and comfort.
                            </p>
                          </div>
                        </div>
                        <div
                          className="item active wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <i className="flaticon-medicine"></i>
                          <div className="item-content">
                            <h4>Personalized Fitting</h4>
                            <p>
                              Custom fitting and rehabilitation programs <br />
                              tailored to individual patient needs.
                            </p>
                          </div>
                        </div>
                        <div className="item wow fadeInUp" data-wow-delay=".7s">
                          <i className="flaticon-cross"></i>
                          <div className="item-content">
                            <h4>Functional Recovery</h4>
                            <p>
                              Comprehensive therapy to help patients <br />
                              regain independence and dexterity.
                            </p>
                          </div>
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
                backgroundImage: "url(/assets/images/header/03_header.webp)",
              }}
            >
              <div className="table-cell">
                <div className="overlay"></div>
                <div className="container mx-auto px-4">
                  <div className="flex flex-wrap -mx-3">
                    <div className="col-lg-6 flex items-center justify-between">
                      <div className="banner">
                        <h1 className="handline splt-txt wow">
                          <AnimatedText text="Relief for Common Orthopedic Pain Conditions" />
                        </h1>
                        <p className="about-website splt-txt wow">
                          <AnimatedText
                            text="DakshinRehab provides expert assessment and treatment for common orthopedic issues such as back pain, joint stiffness, arthritis, and sports-related injuries. Our personalized rehabilitation plans help reduce pain, restore mobility, and improve overall quality of life."
                          />
                        </p>
                        <Link
                          className="btn-1 move-section  wow fadeInUp"
                          data-wow-delay=".3s"
                          href="/about-3"
                        >
                          More About Us
                        </Link>
                        <Link
                          className="btn-1 btn-2 ml-30  wow fadeInUp"
                          data-wow-delay=".5s"
                          href="/about-3"
                        >
                          Discover More
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 flex items-center justify-end header-features">
                      <div className="features-box">
                        <div className="item wow fadeInUp" data-wow-delay=".3s">
                          <i className="flaticon-stethoscope"></i>
                          <div className="item-content">
                            <h4>Expert Assessment</h4>
                            <p>
                              Comprehensive evaluation of orthopedic <br />
                              conditions using advanced diagnostic methods.
                            </p>
                          </div>
                        </div>
                        <div
                          className="item active wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <i className="flaticon-doctor-1"></i>
                          <div className="item-content">
                            <h4>Personalized Treatment</h4>
                            <p>
                              Customized rehabilitation plans designed <br />
                              for optimal pain relief and recovery.
                            </p>
                          </div>
                        </div>
                        <div className="item wow fadeInUp" data-wow-delay=".7s">
                          <i className="flaticon-medicine"></i>
                          <div className="item-content">
                            <h4>Quality of Life</h4>
                            <p>
                              Restoring mobility and improving <br />
                              overall quality of life through expert care.
                            </p>
                          </div>
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

export default StyleThreeHeader;
