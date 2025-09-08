import React from "react";
import LayoutContainer from "@/components/common/LayoutContainer";
import Breadcrumb from "@/components/common/Breadcrumb";
import TimetableDoctors from "@/components/doctors/TimetableDoctors";

const TimetableDoctorsPage = () => {
  const navbarStyle = 3;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={3}
        title="Doctors Timetable"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Doctors Timetable" }]}
      />
      <TimetableDoctors />
    </LayoutContainer>
  );
};

export default TimetableDoctorsPage;
