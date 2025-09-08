// DakshinRehab Specialties and Time Slots Configuration
// Based on appointment_booking system.md requirements

export const maritalStatusOptions = [
  "Single",
  "Married", 
  "Divorced",
  "Widowed",
  "Prefer not to say"
];

export const dakshinSpecialties = {
  physiotherapy: {
    id: "physiotherapy",
    name: "🟢 Physiotherapy",
    color: "#22c55e",
    reasons: [
      "Back Pain",
      "Knee Pain", 
      "Sciatica",
      "Post-Surgery Rehab",
      "Frozen Shoulder",
      "ACL Injury",
      "Stroke Rehab",
      "Plantar Fasciitis"
    ],
    timeSlots: [
      "09:00 AM - 09:45 AM",
      "10:00 AM - 10:45 AM", 
      "11:00 AM - 11:45 AM",
      "12:00 PM - 12:45 PM",
      "03:30 PM - 04:15 PM",
      "04:30 PM - 05:15 PM",
      "06:00 PM - 06:45 PM",
      "07:00 PM - 07:45 PM"
    ],
    duration: "45 min",
    department: "Physiotherapy"
  },
  
  prosthetics: {
    id: "prosthetics",
    name: "🔵 Prosthetics & Orthotics", 
    color: "#3b82f6",
    reasons: [
      "Amputee Rehab",
      "Limb Fitting",
      "Prosthetic Adjustment"
    ],
    timeSlots: [
      "10:00 AM - 10:45 AM",
      "11:00 AM - 11:45 AM", 
      "12:00 PM - 12:45 PM",
      "04:30 PM - 05:15 PM",
      "06:00 PM - 06:45 PM"
    ],
    duration: "45 min",
    department: "Prosthetics & Orthotics"
  },
  
  pediatric: {
    id: "pediatric",
    name: "🟠 Pediatric Care",
    color: "#f97316", 
    reasons: [
      "Well Baby Check",
      "Vaccination"
    ],
    timeSlots: [
      "04:30 PM - 05:30 PM"
    ],
    duration: "60 min",
    department: "Pediatrics"
  },
  
  vascular: {
    id: "vascular", 
    name: "🔴 Vascular",
    color: "#ef4444",
    reasons: [
      "Consultation Required"
    ],
    timeSlots: [
      "06:00 PM - 06:45 PM",
      "07:00 PM - 07:45 PM"
    ],
    duration: "45 min", 
    department: "Vascular"
  },
  
  wellness: {
    id: "wellness",
    name: "🟣 Wellness", 
    color: "#a855f7",
    reasons: [
      "Inbody Analysis",
      "Muscle Strength Test",
      "Foot Scan", 
      "Gait Analysis",
      "Clinical Pilates",
      "Infrared Sauna",
      "Body Assessment"
    ],
    timeSlots: [
      "09:00 AM - 09:45 AM",
      "10:00 AM - 10:45 AM",
      "11:00 AM - 11:45 AM", 
      "12:00 PM - 12:45 PM",
      "03:30 PM - 04:15 PM",
      "04:30 PM - 05:15 PM",
      "06:00 PM - 06:45 PM",
      "07:00 PM - 07:45 PM"
    ],
    duration: "45 min",
    department: "Wellness"
  }
};

// Appointment data structure matching your existing admin format
export const appointmentSchema = {
  id: "", // unique booking ID
  patient: {
    name: "",
    age: 0, 
    maritalStatus: "",
    phone: "",
    email: ""
  },
  appointmentDetails: {
    specialty: "", // physiotherapy, prosthetics, etc.
    reason: "", // specific reason from specialty reasons
    date: "", // YYYY-MM-DD format
    timeSlot: "", // from specialty timeSlots
    notes: ""
  },
  // Admin fields matching your existing structure
  doctor: "", // assigned doctor
  status: "Confirmed", // Confirmed, In Progress, Completed, Cancelled
  type: "", // maps to reason
  duration: "", // from specialty duration
  department: "", // from specialty department
  
  // DakshinRehab specific fields
  confirmationNumber: "", // DR2025001 format
  qrCode: "", // base64 QR code data
  createdAt: "", // ISO timestamp
  whatsappShared: false,
  emailSent: false
};

// Generate next 6 days including today for booking
export const generateAvailableDates = () => {
  const dates = [];
  const today = new Date();
  
  for (let i = 0; i < 6; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    dates.push({
      value: date.toISOString().split('T')[0], // YYYY-MM-DD
      label: i === 0 ? "Today" : i === 1 ? "Tomorrow" : date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        month: 'short', 
        day: 'numeric' 
      }),
      fullDate: date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    });
  }
  
  return dates;
};

// Generate unique confirmation number
export const generateConfirmationNumber = () => {
  const year = new Date().getFullYear();
  const timestamp = Date.now().toString().slice(-6);
  return `DR${year}${timestamp}`;
};

// Clinic information for confirmations
export const clinicInfo = {
  name: "DakshinRehab Super Speciality Physiotherapy, Prosthetics, Orthotics & Wellness Clinic",
  address: "3rd Floor, ARD Magnum, Green Hills, Moosapet, Hyderabad – 500018",
  phone: "+91 80192 99888",
  altPhone: "+91 70755 75400", 
  email: "info@dakshinrehab.com",
  website: "www.dakshinrehab.com",
  hours: "Mon–Sat 09:00–20:30 (Closed Sunday)",
  googleMaps: "https://maps.app.goo.gl/SfmZ7W4mE1iXUuL79"
};
