import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import ShopDetails from "@/components/shop/ShopDetails";
import React from "react";

const ShopDetailsPage = () => {
  const navbarStyle = 2;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={2}
        title="Products Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products Details" },
        ]}
      />
      <ShopDetails />
    </LayoutContainer>
  );
};

export default ShopDetailsPage;
