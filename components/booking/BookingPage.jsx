"use client";
import React, { useState } from 'react';
import DakshinBookingForm from './DakshinBookingForm';
import AppointmentConfirmation from './AppointmentConfirmation';

const BookingPage = () => {
  const [bookingStep, setBookingStep] = useState('form'); // 'form' or 'confirmation'
  const [appointmentData, setAppointmentData] = useState(null);

  const handleBookingSuccess = (appointment) => {
    console.log('Appointment booked successfully:', appointment);
    setAppointmentData(appointment);
    setBookingStep('confirmation');
  };

  const handleNewAppointment = () => {
    setAppointmentData(null);
    setBookingStep('form');
  };

  const handleClose = () => {
    // This could redirect to homepage or close modal, depending on implementation
    setAppointmentData(null);
    setBookingStep('form');
    
    // If this is used in a modal context, you might want to emit an event
    // or call a parent handler to close the modal
    
    // For now, we'll just reset to the form
    console.log('Booking flow completed');
  };

  return (
    <div className="booking-page min-h-screen bg-gray-50 py-8">
      {bookingStep === 'form' && (
        <DakshinBookingForm onSubmitSuccess={handleBookingSuccess} />
      )}
      
      {bookingStep === 'confirmation' && appointmentData && (
        <AppointmentConfirmation 
          appointmentData={appointmentData}
          onNewAppointment={handleNewAppointment}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default BookingPage;
