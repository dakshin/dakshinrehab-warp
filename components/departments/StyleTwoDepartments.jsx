import React from "react";
import { departmentsData } from "@/data/departments";
import SecTitle from "../common/SecTitle";
import StyleTwoItemDepartment from "./StyleTwoItemDepartment";

const StyleTwoDepartments = ({ navbarStyle }) => {
  return (
    <section className="departments departments-2 py-100-70">
      <div className="container mx-auto px-4">
        <SecTitle
          navbarStyle={navbarStyle}
          title={departmentsData.title}
          subTitle={departmentsData.subtitle}
          description={departmentsData.description}
          button={departmentsData.button}
        />
        <div className="flex flex-wrap -mx-3">
          {departmentsData.departments.slice(0, -2).map((item, index) => (
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={`${0.3 + index * 0.1}s`} key={item.name}>
              <StyleTwoItemDepartment data={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StyleTwoDepartments;
