import React from "react";
import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import LayoutContainer from "@/components/common/LayoutContainer";
import FAQs from "@/components/common/FAQs";
import Departments from "@/components/departments/Departments";
import Doctors from "@/components/doctors/Doctors";
import Features from "@/components/features/Features";
import Gallery from "@/components/gallery/Gallery";
import Header from "@/components/header/Header";
import Provide from "@/components/provide/Provide";
import Statistic from "@/components/statistic/Statistic";
import Testimonial from "@/components/testimonial/Testimonial";

const Home = () => {
  const navbarStyle = 1;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Header />
      <Features />
      <About />
      <Departments />
      <Doctors />
      <Provide />
      <Statistic />
      <Gallery />
      <Testimonial />
      <FAQs />
      <Blog />
    </LayoutContainer>
  );
};

export default Home;
