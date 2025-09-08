// WhatsApp Utility Functions for DakshinRehab Appointment Sharing
// Uses WhatsApp URL scheme - no API dependency required

/**
 * Generate WhatsApp message text for appointment confirmation
 * @param {Object} appointmentData - Appointment details
 * @returns {string} Formatted message text
 */
export const generateWhatsAppMessage = (appointmentData) => {
  const {
    patientName,
    doctorName,
    specialty,
    appointmentDate,
    appointmentTime,
    reason,
    appointmentId
  } = appointmentData;

  const message = `🏥 *DAKSHIN REHAB APPOINTMENT CONFIRMATION*

✅ *Appointment Confirmed*

👤 *Patient:* ${patientName}
👨‍⚕️ *Doctor:* Dr. ${doctorName}
🏥 *Specialty:* ${specialty}
📅 *Date:* ${appointmentDate}
⏰ *Time:* ${appointmentTime}
🔖 *Appointment ID:* ${appointmentId || `APT-${Date.now()}`}
📋 *Reason:* ${reason}

📍 *Clinic Address:*
DakshinRehab Super Speciality Physiotherapy, Prosthetics, Orthotics & Wellness Clinic
3rd Floor, ARD Magnum, Green Hills, Moosapet, Hyderabad – 500018

📞 *Contact:*
Phone: +91 80192 99888, +91 70755 75400
Email: info@dakshinrehab.com
Website: www.dakshinrehab.com

🕒 *Clinic Hours:* Mon–Sat 09:00–20:30 (Closed Sunday)

📍 *Location:* https://maps.app.goo.gl/SfmZ7W4mE1iXUuL79

⚠️ *Important Reminders:*
• Please arrive 15 minutes before your appointment
• Bring any relevant medical records
• Bring a valid ID proof
• Contact us if you need to reschedule

Thank you for choosing DakshinRehab! 🙏

#DakshinRehab #PhysiotherapyClinic #Appointment #Healthcare`;

  return message;
};

/**
 * Generate WhatsApp URL for sharing
 * @param {string} message - The message to share
 * @param {string} phoneNumber - Optional phone number to send to specific contact
 * @returns {string} WhatsApp URL
 */
export const generateWhatsAppURL = (message, phoneNumber = null) => {
  const encodedMessage = encodeURIComponent(message);
  
  if (phoneNumber) {
    // Remove any non-numeric characters and ensure proper format
    const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
  }
  
  // General WhatsApp share URL
  return `https://api.whatsapp.com/send?text=${encodedMessage}`;
};

/**
 * Open WhatsApp with appointment message
 * @param {Object} appointmentData - Appointment details
 * @param {string} phoneNumber - Optional phone number
 * @returns {void}
 */
export const shareViaWhatsApp = (appointmentData, phoneNumber = null) => {
  const message = generateWhatsAppMessage(appointmentData);
  const whatsappURL = generateWhatsAppURL(message, phoneNumber);
  
  // Open in new window/tab
  window.open(whatsappURL, '_blank');
};

/**
 * Share appointment with patient's own WhatsApp
 * @param {Object} appointmentData - Appointment details
 * @returns {void}
 */
export const shareWithSelf = (appointmentData) => {
  shareViaWhatsApp(appointmentData);
};

/**
 * Share appointment with family member or friend
 * @param {Object} appointmentData - Appointment details
 * @param {string} contactPhone - Contact's phone number
 * @returns {void}
 */
export const shareWithContact = (appointmentData, contactPhone) => {
  if (!contactPhone) {
    alert('Please provide a phone number to share with.');
    return;
  }
  
  shareViaWhatsApp(appointmentData, contactPhone);
};

/**
 * Get WhatsApp Business link for DakshinRehab (if they have WhatsApp Business)
 * @returns {string} WhatsApp Business URL
 */
export const getDakshinRehabWhatsApp = () => {
  // DakshinRehab's WhatsApp Business number (if available)
  const businessPhone = '918019299888'; // +91 80192 99888
  return `https://wa.me/${businessPhone}`;
};

/**
 * Contact DakshinRehab via WhatsApp
 * @param {string} customMessage - Optional custom message
 * @returns {void}
 */
export const contactClinicViaWhatsApp = (customMessage = '') => {
  const defaultMessage = `Hi DakshinRehab Team! I have a query regarding my appointment.`;
  const message = customMessage || defaultMessage;
  const whatsappURL = generateWhatsAppURL(message, '918019299888');
  
  window.open(whatsappURL, '_blank');
};

/**
 * Check if WhatsApp is available on the device
 * @returns {boolean} True if WhatsApp can be opened
 */
export const isWhatsAppAvailable = () => {
  // Check if we're on mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  // WhatsApp web works on desktop, mobile app on mobile
  return true; // WhatsApp web is universally available
};

/**
 * Get appropriate WhatsApp URL based on device
 * @param {string} message - Message to share
 * @param {string} phoneNumber - Phone number (optional)
 * @returns {string} Platform-specific WhatsApp URL
 */
export const getPlatformSpecificWhatsAppURL = (message, phoneNumber = null) => {
  const encodedMessage = encodeURIComponent(message);
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (phoneNumber) {
    const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
    if (isMobile) {
      return `whatsapp://send?phone=${cleanPhone}&text=${encodedMessage}`;
    } else {
      return `https://web.whatsapp.com/send?phone=${cleanPhone}&text=${encodedMessage}`;
    }
  }
  
  if (isMobile) {
    return `whatsapp://send?text=${encodedMessage}`;
  } else {
    return `https://web.whatsapp.com/send?text=${encodedMessage}`;
  }
};

/**
 * Enhanced share function with better device detection
 * @param {Object} appointmentData - Appointment details
 * @param {string} phoneNumber - Optional phone number
 * @returns {void}
 */
export const enhancedWhatsAppShare = (appointmentData, phoneNumber = null) => {
  const message = generateWhatsAppMessage(appointmentData);
  const whatsappURL = getPlatformSpecificWhatsAppURL(message, phoneNumber);
  
  // Try to open WhatsApp, with fallback
  try {
    window.open(whatsappURL, '_blank');
  } catch (error) {
    console.error('Error opening WhatsApp:', error);
    // Fallback to basic web URL
    const fallbackURL = generateWhatsAppURL(message, phoneNumber);
    window.open(fallbackURL, '_blank');
  }
};
