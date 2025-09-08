import React from "react";
import { features2Data } from "@/data/features";
import StyleTwoItemFeatures from "./StyleTwoItemFeatures";

const StyleTwoFeatures = () => {
  return (
    <section className="features-2 py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Features Section - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
              {features2Data.features.map((item, index) => (
                <div key={item.title} className="wow fadeInUp" data-wow-delay={`${0.3 + index * 0.1}s`}>
                  <StyleTwoItemFeatures data={item} index={index} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Opening Hours Section - Takes 1 column */}
          <div className="lg:col-span-1">
            <div className="features-opening-hours bg-white rounded-lg p-6 shadow-lg h-full">
              <div className="text-center mb-6">
                <i className="flaticon-globe text-4xl text-[#1a3d7d] mb-4 block wow fadeInUp" data-wow-delay="0.3s"></i>
                <h4 className="text-xl font-semibold text-[#1a3d7d] font-['Rajdhani'] wow fadeInUp" data-wow-delay="0.5s">
                  Clinic Hours
                </h4>
              </div>
              <ul className="opening-hours space-y-3 wow fadeInUp" data-wow-delay="0.7s">
                {features2Data.openingHours.map((item) => (
                  <li key={item.day} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-700 font-['Public_Sans']">{item.day}</span>
                    <span className="text-[#1a3d7d] font-semibold font-['Public_Sans'] text-sm">{item.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleTwoFeatures;
