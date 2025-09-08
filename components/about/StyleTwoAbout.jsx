import React from "react";
import SecTitle from "../common/SecTitle";
import { aboutTwoData } from "@/data/about";
import Link from "next/link";

const StyleTwoAbout = ({ navbarStyle = 2 }) => {
  return (
    <section className="about-us about-us-2 py-100" id={aboutTwoData.id}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/2 px-3">
            <div className="about-text-box">
              <SecTitle
                style={2}
                navbarStyle={navbarStyle}
                className={aboutTwoData.sectionTitle.className}
                title={aboutTwoData.sectionTitle.title}
                subTitle={aboutTwoData.sectionTitle.subTitle}
                description={aboutTwoData.sectionTitle.description}
              />
              <p className="wow fadeInUp" data-wow-delay=".3s">{aboutTwoData.paragraph}</p>
              <ul className="about-core">
                {aboutTwoData.features.map((item, index) => (
                  <li key={item} className="wow fadeInUp" data-wow-delay={`${0.3 + index * 0.1}s`}>
                    <i className="fas fa-check-double"></i>
                    <h4>{item}</h4>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap -mx-3">
                <div className="col wow fadeInUp" data-wow-delay=".3s">
                  <Link className="btn-1" href="/about-2">
                    Discover About More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-3">
            <div className="about-img-box">
              <div
                className="img-box"
                style={{
                  backgroundImage: "url(/assets/images/about/02_about.webp)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleTwoAbout;
