import Breadcrumb from "@/components/common/Breadcrumb";
import FAQs from "@/components/common/FAQs";
import LayoutContainer from "@/components/common/LayoutContainer";
import React from "react";

const FAQsPage = () => {
  const navbarStyle = 2;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={2}
        title="Frequently Asked Questions"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]}
      />
      {/* Use enhanced FAQ component with default DakshinRehab content */}
      <FAQs navbarStyle={navbarStyle} />
    </LayoutContainer>
  );
};

export default FAQsPage;
