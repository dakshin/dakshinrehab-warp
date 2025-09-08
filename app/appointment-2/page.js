import StyleTwoAbout from "@/components/about/StyleTwoAbout";
import Blog from "@/components/blog/Blog";
import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import StyleThreeProvide from "@/components/provide/StyleThreeProvide";
import React from "react";

const AppointmentPageTwo = () => {
  const navbarStyle = 2;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={2}
        title="Appointment 2"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Appointment 2" }]}
      />
      <StyleTwoAbout />
      <StyleThreeProvide navbarStyle={navbarStyle} />
      <Blog navbarStyle={navbarStyle} />
    </LayoutContainer>
  );
};

export default AppointmentPageTwo;
