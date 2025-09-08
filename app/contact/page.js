import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import Contact from "@/components/contact/Contact";
import React from "react";

const ContactPage = () => {
  const navbarStyle = 1;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={1}
        title="Contact Us"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
      />
      <Contact />
    </LayoutContainer>
  );
};

export default ContactPage;
