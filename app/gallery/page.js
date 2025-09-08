import React from "react";
import LayoutContainer from "@/components/common/LayoutContainer";
import Breadcrumb from "@/components/common/Breadcrumb";
import Gallery from "@/components/gallery/Gallery";

const GalleryPage = () => {
  const navbarStyle = 3;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={3}
        title="Gallery 1"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery 1" }]}
      />
      <Gallery />
    </LayoutContainer>
  );
};

export default GalleryPage;
