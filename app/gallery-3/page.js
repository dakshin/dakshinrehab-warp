import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import StyleThreeGallery from "@/components/gallery/StyleThreeGallery";
import React from "react";

const GalleryPageThree = () => {
  const navbarStyle = 2;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={3}
        title="About Us 2"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us 2" }]}
      />

      <StyleThreeGallery />
    </LayoutContainer>
  );
};

export default GalleryPageThree;
