import StyleTwoAbout from "@/components/about/StyleTwoAbout";
import Blog from "@/components/blog/Blog";
import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import StyleTwoDepartments from "@/components/departments/StyleTwoDepartments";
import React from "react";

const DepartmentPageTwo = () => {
  const navbarStyle = 2;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={2}
        title="Department 2"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Department 2" }]}
      />
      <StyleTwoAbout />
      <StyleTwoDepartments navbarStyle={navbarStyle} />
      <Blog navbarStyle={navbarStyle} />
    </LayoutContainer>
  );
};

export default DepartmentPageTwo;
