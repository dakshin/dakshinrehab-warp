import React from "react";
import LayoutContainer from "@/components/common/LayoutContainer";
import StyleThreeHeader from "@/components/header/StyleThreeHeader";
import Blog from "@/components/blog/Blog";
import StyleTwoAbout from "@/components/about/StyleTwoAbout";
import Provide from "@/components/provide/Provide";
import StyleThreeAbout from "@/components/about/StyleThreeAbout";
import StyleThreeDepartments from "@/components/departments/StyleThreeDepartments";
import StyleThreeTestimonial from "@/components/testimonial/StyleThreeTestimonial";

const HomeThree = () => {
  const navbarStyle = 3;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <StyleThreeHeader />
      <StyleThreeAbout />
      <StyleThreeDepartments navbarStyle={navbarStyle} />
      <Provide navbarStyle={navbarStyle} className="provide provide-home-3" />
      <StyleTwoAbout navbarStyle={navbarStyle} />
      <StyleThreeTestimonial />
      <Blog navbarStyle={navbarStyle} />
    </LayoutContainer>
  );
};

export default HomeThree;
