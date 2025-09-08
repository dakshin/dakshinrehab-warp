import React from "react";
import { aboutData } from "@/data/about";
import SecTitle from "../common/SecTitle";
import Image from "next/image";
import AnimatedText from "../common/AnimatedText";

const About = () => {
  return (
    <section className="about-us py-100" id={aboutData.id}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-5/12 px-3">
            <div className="about-img-box">
              <div
                className="img-box"
                style={{
                  backgroundImage: `url(${aboutData.aboutImageBox.backgroundImage})`,
                }}
              ></div>
              {aboutData.aboutImageBox.experience && (
                <div className="about-experience">
                  <i className="flaticon-experience"></i>
                  <div className="experience-counter">
                    {aboutData.aboutImageBox.experience.years}
                  </div>
                  <h5 className="splt-txt wow"><AnimatedText text={aboutData.aboutImageBox.experience.text} /></h5>
                </div>
              )}
            </div>
          </div>
          <div className="w-full lg:w-7/12 px-3">
            <div className="about-text-box">
              <SecTitle
                style={2}
                title={aboutData.aboutTextBox.sectionTitle.title}
                subTitle={aboutData.aboutTextBox.sectionTitle.subTitle}
                description={aboutData.aboutTextBox.sectionTitle.description}
              />
              <ul className="about-core">
                {aboutData.aboutTextBox.aboutCore.map((item, index) => (
                  <li key={item} className="wow fadeInUp" data-wow-delay={`${0.3 + index * 0.1}s`}>
                    <i className="fas fa-check-double"></i>
                    <h4>{item}</h4>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap -mx-3">
                <div className="col-sm-4 wow fadeInUp" data-wow-delay=".3s">
                  <Image
                    className="img-fluid"
                    src={aboutData.aboutTextBox.aboutProfile.signature}
                    alt="About signature"
                    width={170}
                    height={80}
                  />
                </div>
                <div className="col wow fadeInUp" data-wow-delay=".5s">
                  <div className="about-profile">
                    <Image
                      className="img-fluid"
                      src={aboutData.aboutTextBox.aboutProfile.profileImage}
                      alt="About Profile Photo"
                      width={60}
                      height={60}
                    />
                    <div className="name">
                      <span>{aboutData.aboutTextBox.aboutProfile.name}</span>
                      <span>
                        {aboutData.aboutTextBox.aboutProfile.position}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
