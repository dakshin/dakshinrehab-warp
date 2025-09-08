// WhatsApp Sharing Utility for DakshinRehab Appointments

export const generateWhatsAppMessage = (appointment) => {
  const { patient, appointmentDetails, confirmationNumber } = appointment;
  const message = `
🏥 *DakshinRehab Appointment Confirmed*

📅 *Date:* ${appointmentDetails.date}
⏰ *Time:* ${appointmentDetails.timeSlot}
👤 *Patient:* ${patient.name}
🎯 *Service:* ${appointmentDetails.specialty}
📝 *Reason:* ${appointmentDetails.reason}
🔢 *Confirmation:* ${confirmationNumber}

📍 *Location:*
DakshinRehab Super Speciality Clinic
3rd Floor, ARD Magnum, Green Hills
Moosapet, Hyderabad – 500018

📞 *Contact:* +91 80192 99888
🌐 *Website:* www.dakshinrehab.com

🗺️ *Directions:* https://maps.app.goo.gl/SfmZ7W4mE1iXUuL79

⏰ *Clinic Hours:* Mon–Sat 09:00–20:30 (Closed Sunday)

_Please arrive 15 minutes early for your appointment._
  `.trim();
  
  return message;
};

export const getWhatsAppShareUrl = (appointment) => {
  const message = generateWhatsAppMessage(appointment);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/?text=${encodedMessage}`;
};

export const shareViaWhatsApp = (appointment) => {
  const whatsappUrl = getWhatsAppShareUrl(appointment);
  
  // For client-side usage
  if (typeof window !== 'undefined') {
    window.open(whatsappUrl, '_blank');
  }
  
  return whatsappUrl;
};

// Generate WhatsApp message for admin notifications
export const generateAdminWhatsAppMessage = (appointment) => {
  const { patient, appointmentDetails, confirmationNumber, createdAt } = appointment;
  
  const message = `
🔔 *New Appointment Booking*

📅 *Date:* ${appointmentDetails.date}
⏰ *Time:* ${appointmentDetails.timeSlot}
👤 *Patient:* ${patient.name} (Age: ${patient.age})
📱 *Phone:* ${patient.phone}
💍 *Marital Status:* ${patient.maritalStatus}
🎯 *Service:* ${appointmentDetails.specialty}
📝 *Reason:* ${appointmentDetails.reason}
🔢 *Confirmation:* ${confirmationNumber}
📝 *Notes:* ${appointmentDetails.notes || 'None'}
🕐 *Booked at:* ${new Date(createdAt).toLocaleString()}

🏥 *DakshinRehab Admin Dashboard*
  `.trim();
  
  return message;
};

// Share appointment with specific phone number (for admin notifications)
export const sendAdminNotification = (appointment, adminPhone) => {
  const message = generateAdminWhatsAppMessage(appointment);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${adminPhone}?text=${encodedMessage}`;
};
