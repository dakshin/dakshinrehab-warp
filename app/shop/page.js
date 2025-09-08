import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import Shop from "@/components/shop/Shop";
import React from "react";

const ShopPage = () => {
  const navbarStyle = 1;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={1}
        title="Our Products"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Products" }]}
      />
      <Shop />
    </LayoutContainer>
  );
};

export default ShopPage;
