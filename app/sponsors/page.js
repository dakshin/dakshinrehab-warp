import React from "react";
import LayoutContainer from "@/components/common/LayoutContainer";
import Breadcrumb from "@/components/common/Breadcrumb";
import Sponsors from "@/components/sponsors/Sponsors";

const SponsorsPage = () => {
  const navbarStyle = 3;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={3}
        title="Sponsors"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sponsors" }]}
      />
      <Sponsors />
    </LayoutContainer>
  );
};

export default SponsorsPage;
