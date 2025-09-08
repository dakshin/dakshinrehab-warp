"use client";
import React from "react";
import Image from "next/image";
import SecTitle from "../common/SecTitle";
import { provideData } from "@/data/provide";
import ContentProvide from "./ContentProvide";
import Quote from "../quote/Quote";
import { useShareData } from "@/context/ShareDataContext";

const Provide = ({ navbarStyle = 1, className = "provide" }) => {
  const { showYoutubeVideoUrlHandel } = useShareData();
  return (
    <>
      <section className={`${className} relative`}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/provide/01_provide.webp"
            alt="Provide service background"
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
          <div className="overlay overlay-3"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <SecTitle
            navbarStyle={navbarStyle}
            title={provideData.title}
            subTitle={provideData.subtitle}
            description={provideData.description}
            button={provideData.button}
          />
          <div className="provide-content mb-16">
            <div className="flex flex-wrap -mx-4">
              {provideData.features.map((item, index) => (
                <div key={item.title} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                  <ContentProvide data={item} delay={`${0.3 + index * 0.1}s`} />
                </div>
              ))}
            </div>
          </div>

          <div className="quote-and-presentation">
            <div className="flex flex-wrap -mx-3">
              <div className="w-full lg:w-1/2 px-3 wow fadeInUp" data-wow-delay="0.3s">
                <Quote />
              </div>
              <div className="w-full lg:w-1/2 px-3 wow fadeInUp" data-wow-delay="0.5s">
                <div className="video-presentation relative">
                  <Image
                    src="/assets/images/presentation/01_presentation.webp"
                    alt="Video presentation"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                    priority={false}
                  />
                  <div className="overlay"></div>
                  <div className="presentation-box">
                    <button
                      aria-label="pulse-2"
                      className="pulse"
                      onClick={() =>
                        showYoutubeVideoUrlHandel(
                          "https://www.youtube.com/embed/TKnufs85hXk?si=28-Wg09VkcMw2l_I"
                        )
                      }
                    >
                      <i className="fas fa-play"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Provide;
