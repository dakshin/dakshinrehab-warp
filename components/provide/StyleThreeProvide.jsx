"use client";
import React from "react";
import Image from "next/image";
import SecTitle from "../common/SecTitle";
import { provideThreeData } from "@/data/provide";
import Quote from "../quote/Quote";
import ItemStatistic from "../statistic/ItemStatistic";

const StyleThreeProvide = ({ navbarStyle = 1 }) => {
  return (
    <>
      <section className="provide provide-home-2 relative">
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
            title={provideThreeData.SecTitle.title}
            subTitle={provideThreeData.SecTitle.subTitle}
            description={provideThreeData.SecTitle.description}
            button={provideThreeData.SecTitle.button}
          />
          <div className="provide-content">
            <div className="flex flex-wrap -mx-3">
              {provideThreeData.statistics.map((item) => (
                <div key={item.label} className="w-full sm:w-1/2 lg:w-1/4 px-3">
                  <ItemStatistic data={item} />
                </div>
              ))}
            </div>
          </div>

          <div className="quote-and-presentation">
            <div className="row wow fadeInUp" data-wow-delay=".3s">
              <div className="flex-1 px-3">
                <div className="quote-box">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full lg:w-1/3 px-3">
                      <div className="quote-img-box relative">
                        <Image
                          src="/assets/images/qoute/01_quote.webp"
                          alt="Quote section image"
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover"
                          priority={false}
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-2/3 px-3">
                      <Quote className="quote-text-box form-contact" />
                    </div>
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

export default StyleThreeProvide;
