import React from "react";
import SecTitle from "../common/SecTitle";
import { provideTwoData } from "@/data/provide";
import Link from "next/link";
import Image from "next/image";
import ItemStatistic from "../statistic/ItemStatistic";
import Skills from "../skills/Skills";

const StyleTwoProvide = ({ navbarStyle }) => {
  return (
    <section className="provide-2 py-100 relative">
      <div className="bg-section-2">
        <div className="bg-section-2-left"></div>
        <div className="bg-section-2-right relative">
          <Image
            src="/assets/images/provide/01_provide.webp"
            alt="Provide service background"
            fill
            sizes="50vw"
            className="object-cover"
            priority={false}
          />
          <div className="overlay overlay-4"></div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/3 px-3">
            <div className="text-box">
              <SecTitle
                style={2}
                navbarStyle={navbarStyle}
                title={provideTwoData.sectionTitle.title}
                subTitle={provideTwoData.sectionTitle.subTitle}
              />
              <ul className="provide-core">
                {provideTwoData.features.map((item, index) => (
                  <li key={item} className="wow fadeInUp" data-wow-delay={`${0.3 + index * 0.1}s`}>
                    <i className="fas fa-check-double"></i>
                    <h4>{item}</h4>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap -mx-3">
                {provideTwoData.statistics.map((item) => (
                  <div key={item.count} className="flex-1 px-3">
                    <ItemStatistic data={item} style={2} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-3">
            <div className="img-box relative">
              <Image
                src={provideTwoData.image}
                alt="Provide service feature"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
          <div className="col-lg-4 flex items-center justify-between">
            <div className="text-box two">
              <SecTitle
                style={2}
                navbarStyle={navbarStyle}
                description={provideTwoData.description}
              />
              <Skills data={provideTwoData.skills} />
              <div className="flex flex-wrap -mx-3">
                <div className="col-4 flex items-center justify-between wow fadeInUp" data-wow-delay=".3s">
                  <Image
                    className="img-fluid"
                    src={provideTwoData.signature}
                    alt="About signature"
                    width={120}
                    height={50}
                  />
                </div>
                <div className="col flex items-center justify-between wow fadeInUp" data-wow-delay=".5s">
                  <Link className="btn-1 btn-2" href="/about-2">
                    Discover provide More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleTwoProvide;
