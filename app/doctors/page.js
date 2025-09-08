import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import Doctors from "@/components/doctors/Doctors";
import React from "react";

const DoctorsPage = () => {
  const navbarStyle = 1;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={1}
        title="Doctors 1"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Doctors 1" }]}
      />
      <Doctors />
    </LayoutContainer>
  );
};

export default DoctorsPage;
