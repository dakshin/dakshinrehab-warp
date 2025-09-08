import React from "react";
import LayoutContainer from "@/components/common/LayoutContainer";
import Breadcrumb from "@/components/common/Breadcrumb";
import DepartmentDetails from "@/components/departments/DepartmentDetails";

const DepartmentDetailsPage = () => {
  const navbarStyle = 3;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={3}
        title="Department Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Department Details" },
        ]}
      />
      <DepartmentDetails />
    </LayoutContainer>
  );
};

export default DepartmentDetailsPage;
