import BlogDetails from "@/components/blog/BlogDetails";
import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import React from "react";

const BlogDetailsPage = () => {
  const navbarStyle = 2;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={2}
        title="Blog Details"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog Details" }]}
      />
      <BlogDetails />
    </LayoutContainer>
  );
};

export default BlogDetailsPage;
