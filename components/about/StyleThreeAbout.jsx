import React from "react";
import SecTitle from "../common/SecTitle";
import { aboutThreeData } from "@/data/about";
import Link from "next/link";
import CountUp from "../common/CountUp";
import AnimatedText from "../common/AnimatedText";

const StyleThreeAbout = () => {
  return (
    <section className="about-us about-us-3 py-100" id={aboutThreeData.id}>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full lg:w-1/2 px-3">
            <div className="about-img-box">
              <div
                className="img-box"
                style={{
                  backgroundImage: `url(${aboutThreeData.aboutImageBox.backgroundImage})`,
                }}
              ></div>
              {aboutThreeData.experience && (
                <div className="about-experience">
                  <i className="flaticon-stethoscope"></i>
                  <div className="experience-counter wow fadeInUp" data-wow-delay=".3s">
                    <CountUp
                      start={0}
                      end={aboutThreeData.experience.counter}
                      duration={2}
                    />
                  </div>
                  <h5 className="splt-txt wow">
                    <AnimatedText text={aboutThreeData.experience.label} />
                  </h5>
                </div>
              )}
            </div>
          </div>
          <div className="w-full lg:w-5/12 px-3">
            <div className="about-text-box">
              <SecTitle
                style={2}
                title={aboutThreeData.secTitle.title}
                subTitle={aboutThreeData.secTitle.subTitle}
              />
              <p className="wow fadeInUp" data-wow-delay=".3s">
                DakshinRehab is a premier physiotherapy and rehabilitation center in Hyderabad, offering expert care in neuro rehabilitation, pediatric therapy, vascular therapy, clinical pilates, and prosthetics & orthotics. Our certified therapists provide personalized treatment plans to help patients regain mobility, strength, and independence.
              </p>
              <p className="last wow fadeInUp" data-wow-delay=".5s">
                With years of experience and state-of-the-art facilities, we focus on evidence-based therapies and holistic rehabilitation programs to support recovery and improve overall quality of life for our patients.
              </p>
              <div className="flex flex-wrap -mx-3">
                <div className="col wow fadeInUp" data-wow-delay=".7s">
                  <Link className="btn-1" href="/about-3">
                    Discover About More
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

export default StyleThreeAbout;