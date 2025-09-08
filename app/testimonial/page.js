import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import Features from "@/components/features/Features";
import Testimonial from "@/components/testimonial/Testimonial";
import React from "react";

const TestimonialPage = () => {
  const navbarStyle = 1;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={1}
        title="Testimonial 1"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Testimonial 1" }]}
      />
      <Features />
      <About />
      <Testimonial />
      <Blog navbarStyle={navbarStyle} />
    </LayoutContainer>
  );
};

export default TestimonialPage;
