import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import Doctors from "@/components/doctors/Doctors";
import React from "react";

const DoctorsPageTwo = () => {
  const navbarStyle = 2;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={2}
        title="Doctors 2"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Doctors 2" }]}
      />
      <Doctors navbarStyle={navbarStyle} />
    </LayoutContainer>
  );
};

export default DoctorsPageTwo;
