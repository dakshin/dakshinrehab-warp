import Careers from "@/components/careers/Careers";
import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import React from "react";

const CareersPage = () => {
  const navbarStyle = 1;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={1}
        title="Careers"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />
      <Careers />
    </LayoutContainer>
  );
};

export default CareersPage;
