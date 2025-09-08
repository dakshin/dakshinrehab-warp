import React from "react";
import AllNavbar from "../navbar/AllNavbar";
import Search from "../search/Search";
import Menu from "../menu/Menu";
import BackToTop from "./BackToTop";
import Footer from "../footer/Footer";

const LayoutContainer = ({ children, navbarStyle }) => {
  return (
    <>
      <AllNavbar navbarStyle={navbarStyle} />
      <Search />
      <Menu />
      {children}
      <Footer />
      <BackToTop />
    </>
  );
};

export default LayoutContainer;
