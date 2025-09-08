// Shared API endpoint for creating new appointments
// Can be used by both main website and admin dashboard

import fs from 'fs';
import path from 'path';
import { generateConfirmationNumber, appointmentSchema, clinicInfo } from '../data/dakshin-specialties.js';
import { generateQRCode } from '../utils/qrGenerator.js';
import { sendConfirmationEmail } from '../utils/emailService.js';

const appointmentsFilePath = path.join(process.cwd(), 'api-shared/data/appointments.json');

// Ensure appointments file exists
const ensureAppointmentsFile = () => {
  if (!fs.existsSync(appointmentsFilePath)) {
    fs.writeFileSync(appointmentsFilePath, JSON.stringify({ appointments: [] }, null, 2));
  }
};

// Get all appointments
const getAppointments = () => {
  ensureAppointmentsFile();
  const data = fs.readFileSync(appointmentsFilePath, 'utf8');
  return JSON.parse(data);
};

// Save appointments
const saveAppointments = (appointmentsData) => {
  fs.writeFileSync(appointmentsFilePath, JSON.stringify(appointmentsData, null, 2));
};

// Validate appointment data
const validateAppointment = (data) => {
  const errors = [];
  
  // Required fields validation
  if (!data.patient?.name) errors.push('Patient name is required');
  if (!data.patient?.age) errors.push('Patient age is required');
  if (!data.patient?.maritalStatus) errors.push('Marital status is required');
  if (!data.appointmentDetails?.specialty) errors.push('Specialty is required');
  if (!data.appointmentDetails?.reason) errors.push('Reason is required');
  if (!data.appointmentDetails?.date) errors.push('Date is required');
  if (!data.appointmentDetails?.timeSlot) errors.push('Time slot is required');
  
  // Phone validation (basic)
  if (data.patient?.phone && !/^\+?[\d\s-()]+$/.test(data.patient.phone)) {
    errors.push('Invalid phone number format');
  }
  
  // Email validation (basic)
  if (data.patient?.email && !/\S+@\S+\.\S+/.test(data.patient.email)) {
    errors.push('Invalid email format');
  }
  
  return errors;
};

// Check if time slot is available
const isTimeSlotAvailable = (date, timeSlot, specialty) => {
  const appointmentsData = getAppointments();
  const existingAppointments = appointmentsData.appointments || [];
  
  // Check for conflicts (same date, time, and specialty)
  const conflictExists = existingAppointments.some(apt => 
    apt.appointmentDetails.date === date &&
    apt.appointmentDetails.timeSlot === timeSlot &&
    apt.appointmentDetails.specialty === specialty &&
    apt.status !== 'Cancelled'
  );
  
  return !conflictExists;
};

// Create appointment handler
export const createAppointment = async (appointmentData) => {
  try {
    // Validate input data
    const validationErrors = validateAppointment(appointmentData);
    if (validationErrors.length > 0) {
      return {
        success: false,
        error: 'Validation failed',
        details: validationErrors
      };
    }
    
    // Check time slot availability
    const { date, timeSlot, specialty } = appointmentData.appointmentDetails;
    if (!isTimeSlotAvailable(date, timeSlot, specialty)) {
      return {
        success: false,
        error: 'Time slot not available',
        message: 'The selected time slot is already booked. Please choose another time.'
      };
    }
    
    // Generate unique appointment ID and confirmation number
    const appointmentId = `apt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const confirmationNumber = generateConfirmationNumber();
    
    // Create appointment object
    const newAppointment = {
      id: appointmentId,
      patient: {
        name: appointmentData.patient.name,
        age: parseInt(appointmentData.patient.age),
        maritalStatus: appointmentData.patient.maritalStatus,
        phone: appointmentData.patient.phone || '',
        email: appointmentData.patient.email || '',
        image: '/user-3.png' // default image for admin display
      },
      appointmentDetails: {
        specialty: appointmentData.appointmentDetails.specialty,
        reason: appointmentData.appointmentDetails.reason,
        date: appointmentData.appointmentDetails.date,
        timeSlot: appointmentData.appointmentDetails.timeSlot,
        notes: appointmentData.appointmentDetails.notes || ''
      },
      // Admin dashboard fields
      doctor: assignDoctor(appointmentData.appointmentDetails.specialty),
      status: 'Confirmed',
      type: appointmentData.appointmentDetails.reason,
      duration: getDuration(appointmentData.appointmentDetails.specialty),
      department: getDepartment(appointmentData.appointmentDetails.specialty),
      
      // DakshinRehab specific fields
      confirmationNumber: confirmationNumber,
      qrCode: '', // Will be generated
      createdAt: new Date().toISOString(),
      whatsappShared: false,
      emailSent: false
    };
    
    // Generate QR code with appointment details
    const qrData = {
      confirmationNumber: confirmationNumber,
      patient: newAppointment.patient.name,
      date: newAppointment.appointmentDetails.date,
      time: newAppointment.appointmentDetails.timeSlot,
      specialty: newAppointment.appointmentDetails.specialty,
      clinic: clinicInfo.name,
      phone: clinicInfo.phone
    };
    
    const qrCodeBase64 = await generateQRCode(JSON.stringify(qrData));
    newAppointment.qrCode = qrCodeBase64;
    
    // Save appointment to file
    const appointmentsData = getAppointments();
    appointmentsData.appointments.push(newAppointment);
    saveAppointments(appointmentsData);
    
    // Send confirmation email (if email provided)
    if (newAppointment.patient.email) {
      try {
        await sendConfirmationEmail(newAppointment);
        newAppointment.emailSent = true;
        // Update the saved appointment
        saveAppointments(appointmentsData);
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't fail the appointment creation if email fails
      }
    }
    
    return {
      success: true,
      appointment: newAppointment,
      message: 'Appointment booked successfully!'
    };
    
  } catch (error) {
    console.error('Appointment creation error:', error);
    return {
      success: false,
      error: 'Internal server error',
      message: 'Failed to create appointment. Please try again.'
    };
  }
};

// Helper functions
const assignDoctor = (specialty) => {
  const doctorAssignments = {
    'physiotherapy': 'Dr. Swapna Gandhi',
    'prosthetics': 'Mr. Mohana Gandhi',
    'pediatric': 'Dr. Sujith Omkaram',
    'vascular': 'Dr. Consultation Required',
    'wellness': 'Wellness Specialist'
  };
  return doctorAssignments[specialty] || 'Dr. Assignment Pending';
};

const getDuration = (specialty) => {
  const durations = {
    'physiotherapy': '45 min',
    'prosthetics': '45 min',
    'pediatric': '60 min',
    'vascular': '45 min',
    'wellness': '45 min'
  };
  return durations[specialty] || '45 min';
};

const getDepartment = (specialty) => {
  const departments = {
    'physiotherapy': 'Physiotherapy',
    'prosthetics': 'Prosthetics & Orthotics',
    'pediatric': 'Pediatrics',
    'vascular': 'Vascular',
    'wellness': 'Wellness'
  };
  return departments[specialty] || 'General';
};

// Next.js API route handler
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const result = await createAppointment(req.body);
    
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(400).json(result);
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: 'Method not allowed' });
  }
}
