"use client";
import React, { useState } from 'react';
import QRCodeGenerator from './QRCodeGenerator';
import { 
  shareWithSelf, 
  shareWithContact, 
  contactClinicViaWhatsApp,
  generateWhatsAppMessage
} from '@/utils/whatsappUtils';

const AppointmentConfirmation = ({ 
  appointmentData, 
  onNewAppointment, 
  onClose 
}) => {
  const [sharePhoneNumber, setSharePhoneNumber] = useState('');
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [qrGenerated, setQrGenerated] = useState(false);

  // Format appointment data for display and sharing
  const formatAppointmentForDisplay = (data) => {
    return {
      appointmentId: data.confirmationNumber || data.appointmentId || `APT-${Date.now()}`,
      patientName: data.patient?.name || data.name,
      doctorName: data.doctor?.name || data.assignedDoctor || 'DakshinRehab Team',
      specialty: data.appointmentDetails?.specialty || data.specialty,
      appointmentDate: data.appointmentDetails?.date || data.date,
      appointmentTime: data.appointmentDetails?.timeSlot || data.time,
      reason: data.appointmentDetails?.reason || data.reason,
      status: data.status || 'Confirmed',
      phone: data.patient?.phone || data.phone,
      email: data.patient?.email || data.email
    };
  };

  const formattedData = formatAppointmentForDisplay(appointmentData);

  const handleWhatsAppSelf = () => {
    shareWithSelf(formattedData);
  };

  const handleWhatsAppContact = () => {
    if (!sharePhoneNumber.trim()) {
      alert('Please enter a phone number to share with.');
      return;
    }
    shareWithContact(formattedData, sharePhoneNumber);
    setSharePhoneNumber('');
    setShowShareOptions(false);
  };

  const handleContactClinic = () => {
    contactClinicViaWhatsApp();
  };

  const handleQRGenerated = () => {
    setQrGenerated(true);
  };

  const copyToClipboard = async () => {
    const message = generateWhatsAppMessage(formattedData);
    try {
      await navigator.clipboard.writeText(message);
      alert('Appointment details copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy:', error);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = message;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Appointment details copied to clipboard!');
    }
  };

  return (
    <div className="appointment-confirmation max-w-4xl mx-auto p-6">
      {/* Success Header */}
      <div className="text-center mb-8">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
          <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-green-600 mb-2">Appointment Confirmed!</h1>
        <p className="text-gray-600 text-lg">
          Your appointment has been successfully booked with DakshinRehab
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Appointment Details */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-[#1a3d7d] mb-6 flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Appointment Details
          </h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <span className="font-medium text-gray-700">Appointment ID:</span>
              <span className="font-bold text-[#1a3d7d] text-lg">{formattedData.appointmentId}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-500">Patient Name</label>
                <p className="text-lg font-semibold text-gray-800">{formattedData.patientName}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Doctor</label>
                <p className="text-lg font-semibold text-gray-800">Dr. {formattedData.doctorName}</p>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500">Specialty</label>
              <p className="text-lg font-semibold text-blue-600">{formattedData.specialty}</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-500">Reason for Visit</label>
              <p className="text-lg text-gray-800">{formattedData.reason}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-500">Date</label>
                <p className="text-lg font-semibold text-gray-800">{formattedData.appointmentDate}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Time</label>
                <p className="text-lg font-semibold text-gray-800">{formattedData.appointmentTime}</p>
              </div>
            </div>
            
            <div className="pt-4 border-t">
              <div className="flex items-center text-sm text-green-600">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                Status: {formattedData.status}
              </div>
            </div>
          </div>

          {/* Clinic Information */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-[#1a3d7d] mb-2">📍 Clinic Information</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>DakshinRehab Super Speciality Clinic</strong></p>
              <p>3rd Floor, ARD Magnum, Green Hills, Moosapet</p>
              <p>Hyderabad – 500018</p>
              <p><strong>Phone:</strong> +91 80192 99888, +91 70755 75400</p>
              <p><strong>Email:</strong> info@dakshinrehab.com</p>
              <p><strong>Hours:</strong> Mon–Sat 09:00–20:30 (Closed Sunday)</p>
            </div>
          </div>
        </div>

        {/* QR Code and Actions */}
        <div className="space-y-6">
          {/* QR Code Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-[#1a3d7d] mb-4 text-center">
              Quick Access QR Code
            </h2>
            <div className="flex justify-center">
              <QRCodeGenerator 
                appointmentData={formattedData}
                size={220}
                onGenerated={handleQRGenerated}
                className="mx-auto"
              />
            </div>
          </div>

          {/* WhatsApp Share Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-[#1a3d7d] mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
              </svg>
              Share via WhatsApp
            </h2>
            
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppSelf}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
                Share to My WhatsApp
              </button>
              
              <div className="relative">
                <button
                  onClick={() => setShowShareOptions(!showShareOptions)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                  </svg>
                  Share with Family/Friend
                </button>
                
                {showShareOptions && (
                  <div className="mt-3 p-4 border border-gray-200 rounded-lg bg-gray-50">
                    <div className="flex space-x-2">
                      <input
                        type="tel"
                        placeholder="Enter phone number (+91 XXXXX XXXXX)"
                        value={sharePhoneNumber}
                        onChange={(e) => setSharePhoneNumber(e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button
                        onClick={handleWhatsAppContact}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        Share
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Additional Actions */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-[#1a3d7d] mb-4">More Actions</h2>
            
            <div className="space-y-3">
              <button
                onClick={copyToClipboard}
                className="w-full bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path>
                </svg>
                Copy Details to Clipboard
              </button>
              
              <button
                onClick={handleContactClinic}
                className="w-full bg-[#1a3d7d] hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Contact Clinic via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Important Notes */}
      <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
          </svg>
          Important Reminders
        </h3>
        <ul className="text-sm text-yellow-700 space-y-2">
          <li>• Please arrive 15 minutes before your appointment time</li>
          <li>• Bring any relevant medical records or reports</li>
          <li>• Bring a valid ID proof</li>
          <li>• If you need to reschedule, please contact us at least 24 hours in advance</li>
          <li>• Follow any specific pre-appointment instructions provided by your doctor</li>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        {onNewAppointment && (
          <button
            onClick={onNewAppointment}
            className="px-6 py-3 bg-white border-2 border-[#1a3d7d] text-[#1a3d7d] rounded-lg font-semibold hover:bg-[#1a3d7d] hover:text-white transition-colors duration-200"
          >
            Book Another Appointment
          </button>
        )}
        {onClose && (
          <button
            onClick={onClose}
            className="px-6 py-3 bg-[#1a3d7d] text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default AppointmentConfirmation;
