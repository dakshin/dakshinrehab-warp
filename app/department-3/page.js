import React from "react";
import LayoutContainer from "@/components/common/LayoutContainer";
import Blog from "@/components/blog/Blog";
import StyleTwoAbout from "@/components/about/StyleTwoAbout";
import StyleThreeAbout from "@/components/about/StyleThreeAbout";
import StyleThreeDepartments from "@/components/departments/StyleThreeDepartments";
import StyleThreeTestimonial from "@/components/testimonial/StyleThreeTestimonial";
import Breadcrumb from "@/components/common/Breadcrumb";

const DepartmentPageThree = () => {
  const navbarStyle = 3;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={3}
        title="About Us 3"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us 3" }]}
      />
      <StyleThreeAbout />
      <StyleThreeDepartments navbarStyle={navbarStyle} />
      <Blog navbarStyle={navbarStyle} />
    </LayoutContainer>
  );
};

export default DepartmentPageThree;
