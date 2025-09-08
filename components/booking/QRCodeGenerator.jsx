"use client";
import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';

const QRCodeGenerator = ({ 
  appointmentData, 
  size = 200, 
  className = '',
  onGenerated = () => {} 
}) => {
  const canvasRef = useRef(null);
  const [qrDataURL, setQrDataURL] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Generate QR code data from appointment information
  const generateQRData = (data) => {
    const qrData = {
      clinic: 'DakshinRehab Super Speciality Clinic',
      appointmentId: data.appointmentId || `APT-${Date.now()}`,
      patientName: data.patientName,
      doctorName: data.doctorName,
      specialty: data.specialty,
      date: data.appointmentDate,
      time: data.appointmentTime,
      phone: '+91 80192 99888',
      address: '3rd Floor, ARD Magnum, Green Hills, Moosapet, Hyderabad – 500018',
      website: 'www.dakshinrehab.com'
    };

    // Create a formatted string for QR code
    return `DAKSHIN REHAB APPOINTMENT
ID: ${qrData.appointmentId}
Patient: ${qrData.patientName}
Doctor: Dr. ${qrData.doctorName}
Specialty: ${qrData.specialty}
Date: ${qrData.date}
Time: ${qrData.time}
Phone: ${qrData.phone}
Address: ${qrData.address}
Website: ${qrData.website}`;
  };

  useEffect(() => {
    if (!appointmentData) return;

    const generateQR = async () => {
      try {
        setIsLoading(true);
        setError('');
        
        const qrString = generateQRData(appointmentData);
        
        // Generate QR code as data URL
        const dataURL = await QRCode.toDataURL(qrString, {
          width: size,
          margin: 2,
          color: {
            dark: '#2563eb', // DakshinRehab blue
            light: '#ffffff'
          },
          errorCorrectionLevel: 'M'
        });
        
        setQrDataURL(dataURL);
        onGenerated(dataURL);
        
        // Also generate on canvas if ref exists
        if (canvasRef.current) {
          await QRCode.toCanvas(canvasRef.current, qrString, {
            width: size,
            margin: 2,
            color: {
              dark: '#2563eb',
              light: '#ffffff'
            },
            errorCorrectionLevel: 'M'
          });
        }
        
      } catch (err) {
        console.error('Error generating QR code:', err);
        setError('Failed to generate QR code');
      } finally {
        setIsLoading(false);
      }
    };

    generateQR();
  }, [appointmentData, size, onGenerated]);

  // Download QR code as image
  const downloadQR = () => {
    if (!qrDataURL) return;
    
    const link = document.createElement('a');
    link.download = `DakshinRehab-Appointment-${appointmentData?.appointmentId || 'QR'}.png`;
    link.href = qrDataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-red-50 border border-red-200 rounded-lg ${className}`} 
           style={{ width: size, height: size }}>
        <p className="text-red-600 text-sm text-center px-4">{error}</p>
      </div>
    );
  }

  return (
    <div className={`qr-code-container ${className}`}>
      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <div className="text-center mb-3">
          <h4 className="text-lg font-semibold text-gray-800 mb-1">Appointment QR Code</h4>
          <p className="text-sm text-gray-600">Scan to view appointment details</p>
        </div>
        
        <div className="flex justify-center mb-3">
          {qrDataURL ? (
            <img 
              src={qrDataURL} 
              alt="Appointment QR Code" 
              className="border border-gray-100 rounded"
              style={{ width: size, height: size }}
            />
          ) : (
            <canvas 
              ref={canvasRef}
              className="border border-gray-100 rounded"
              style={{ width: size, height: size }}
            />
          )}
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={downloadQR}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download QR Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
