import StyleTwoAbout from "@/components/about/StyleTwoAbout";
import Blog from "@/components/blog/Blog";
import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import StyleTwoFeatures from "@/components/features/StyleTwoFeatures";
import StyleTwoTestimonial from "@/components/testimonial/StyleTwoTestimonial";
import React from "react";

const TestimonialPageTwo = () => {
  const navbarStyle = 2;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={2}
        title="Testimonial 2"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonial 2" }]}
      />
      <StyleTwoFeatures />
      <StyleTwoAbout />
      <StyleTwoTestimonial />
      <Blog navbarStyle={navbarStyle} />
    </LayoutContainer>
  );
};

export default TestimonialPageTwo;
