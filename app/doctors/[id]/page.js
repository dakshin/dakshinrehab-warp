import React from "react";
import LayoutContainer from "@/components/common/LayoutContainer";
import Breadcrumb from "@/components/common/Breadcrumb";
import DoctorsDetails from "@/components/doctors/DoctorsDetails";

const DoctorsDetailsPage = () => {
  const navbarStyle = 3;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={3}
        title="Doctors Details"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Doctors Details" }]}
      />
      <DoctorsDetails />
    </LayoutContainer>
  );
};

export default DoctorsDetailsPage;
