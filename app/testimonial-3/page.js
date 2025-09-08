import React from "react";
import LayoutContainer from "@/components/common/LayoutContainer";
import Blog from "@/components/blog/Blog";
import StyleThreeAbout from "@/components/about/StyleThreeAbout";
import StyleThreeTestimonial from "@/components/testimonial/StyleThreeTestimonial";
import Breadcrumb from "@/components/common/Breadcrumb";

const TestimonialPageThree = () => {
  const navbarStyle = 3;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={3}
        title="Testimonial 3"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonial 3" }]}
      />
      <StyleThreeAbout />
      <StyleThreeTestimonial />
      <Blog navbarStyle={navbarStyle} />
    </LayoutContainer>
  );
};

export default TestimonialPageThree;
