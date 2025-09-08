import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import Departments from "@/components/departments/Departments";
import Doctors from "@/components/doctors/Doctors";
import Features from "@/components/features/Features";
import Testimonial from "@/components/testimonial/Testimonial";
import React from "react";

const AboutPage = () => {
  const navbarStyle = 1;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={1}
        title="About Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <Features />
      <About />
      <Departments />
      <Doctors />
      <Testimonial />
      <Blog />
    </LayoutContainer>
  );
};

export default AboutPage;
