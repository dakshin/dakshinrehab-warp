import React from "react";
import { aboutFourData } from "@/data/about";
import SecTitle from "../common/SecTitle";
import StyleThreeItemDepartment from "./StyleThreeItemDepartment";

const StyleThreeDepartments = ({ navbarStyle = 3 }) => {
  return (
    <section className="departments departments-2 departments-3 py-100-70">
      <div className="container mx-auto px-4">
        <SecTitle
          navbarStyle={navbarStyle}
          title={aboutFourData.secTitle.title}
          subTitle={aboutFourData.secTitle.subTitle}
          description={aboutFourData.secTitle.description}
          button={aboutFourData.secTitle.button}
        />
        <div className="flex flex-wrap -mx-3">
          {aboutFourData.departments.map((item, index) => (
            <div key={item.title} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={`${0.3 + index * 0.1}s`}>
              <StyleThreeItemDepartment data={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StyleThreeDepartments;
