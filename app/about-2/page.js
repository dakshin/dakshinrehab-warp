import StyleTwoAbout from "@/components/about/StyleTwoAbout";
import Blog from "@/components/blog/Blog";
import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import StyleTwoDepartments from "@/components/departments/StyleTwoDepartments";
import StyleTwoFeatures from "@/components/features/StyleTwoFeatures";
import StyleTwoGallery from "@/components/gallery/StyleTwoGallery";
import StyleThreeProvide from "@/components/provide/StyleThreeProvide";
import StyleTwoTestimonial from "@/components/testimonial/StyleTwoTestimonial";
import React from "react";

const AboutPageTwo = () => {
  const navbarStyle = 2;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={2}
        title="About Us 2"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us 2" }]}
      />
      <StyleTwoFeatures />
      <StyleTwoAbout />
      <StyleTwoDepartments navbarStyle={navbarStyle} />
      <StyleThreeProvide navbarStyle={navbarStyle} />
      <StyleTwoGallery navbarStyle={navbarStyle} />
      <StyleTwoTestimonial />
      <Blog navbarStyle={navbarStyle} />
    </LayoutContainer>
  );
};

export default AboutPageTwo;
