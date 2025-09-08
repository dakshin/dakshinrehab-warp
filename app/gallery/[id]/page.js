import React from "react";
import LayoutContainer from "@/components/common/LayoutContainer";
import Breadcrumb from "@/components/common/Breadcrumb";
import DepartmentDetails from "@/components/departments/DepartmentDetails";

const GalleryDetailsPage = () => {
  const navbarStyle = 3;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={3}
        title="Gallery Details"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery Details" }]}
      />
      <DepartmentDetails />
    </LayoutContainer>
  );
};

export default GalleryDetailsPage;
