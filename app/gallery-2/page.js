import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import StyleTwoGallery from "@/components/gallery/StyleTwoGallery";
import React from "react";

const GalleryPageTwo = () => {
  const navbarStyle = 1;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={1}
        title="Gallery 2"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery 2" }]}
      />
      <StyleTwoGallery navbarStyle={2} />
    </LayoutContainer>
  );
};

export default GalleryPageTwo;
