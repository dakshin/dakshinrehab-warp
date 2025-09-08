import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import Departments from "@/components/departments/Departments";
import Doctors from "@/components/doctors/Doctors";
import Features from "@/components/features/Features";
import React from "react";

const DepartmentPage = () => {
  const navbarStyle = 1;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={1}
        title="Department 1"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Department 1" }]}
      />
      <Features />
      <About />
      <Departments />
      <Doctors />
      <Blog />
    </LayoutContainer>
  );
};

export default DepartmentPage;
