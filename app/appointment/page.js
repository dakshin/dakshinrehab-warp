import Breadcrumb from "@/components/common/Breadcrumb";
import LayoutContainer from "@/components/common/LayoutContainer";
import BookingPage from "@/components/booking/BookingPage";
import React from "react";

const AppointmentPage = () => {
  const navbarStyle = 1;
  return (
    <LayoutContainer navbarStyle={navbarStyle}>
      <Breadcrumb
        style={1}
        title="Book Your Appointment"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Book Appointment" }]}
      />
      <BookingPage />
    </LayoutContainer>
  );
};

export default AppointmentPage;
