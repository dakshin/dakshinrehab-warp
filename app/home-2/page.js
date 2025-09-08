import StyleTwoAbout from "@/components/about/StyleTwoAbout";
import Blog from "@/components/blog/Blog";
import LayoutContainer from "@/components/common/LayoutContainer";
import StyleTwoDepartments from "@/components/departments/StyleTwoDepartments";
import Doctors from "@/components/doctors/Doctors";
import FactArea from "@/components/fact-area/FactArea";
import StyleTwoFeatures from "@/components/features/StyleTwoFeatures";
import StyleTwoGallery from "@/components/gallery/StyleTwoGallery";
import StyleTwoHeader from "@/components/header/StyleTwoHeader";
import StyleThreeProvide from "@/components/provide/StyleThreeProvide";
import StyleTwoProvide from "@/components/provide/StyleTwoProvide";
import StyleTwoTestimonial from "@/components/testimonial/StyleTwoTestimonial";
import React from "react";

const HomeTwo = () => {
  const navbarStyle = 2;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <StyleTwoHeader />
      <StyleTwoFeatures />
      <StyleTwoAbout />
      <StyleTwoDepartments navbarStyle={navbarStyle} />
      <StyleTwoProvide navbarStyle={navbarStyle} />
      <StyleTwoGallery navbarStyle={navbarStyle} />
      <FactArea />
      <Doctors navbarStyle={navbarStyle} />
      <StyleThreeProvide navbarStyle={navbarStyle} />
      <StyleTwoTestimonial />
      <Blog navbarStyle={navbarStyle} />
    </LayoutContainer>
  );
};

export default HomeTwo;
