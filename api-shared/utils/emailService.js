// Email Service Utility for DakshinRehab Appointment Confirmations

export const generateEmailHTML = (appointment) => {
  const { patient, appointmentDetails, confirmationNumber, qrCode } = appointment;
  
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Appointment Confirmation - DakshinRehab</title>
  <style>
    body { 
      font-family: 'Arial', sans-serif; 
      line-height: 1.6; 
      color: #333; 
      max-width: 600px; 
      margin: 0 auto; 
      padding: 20px; 
    }
    .header { 
      background: linear-gradient(135deg, #1a3d7d, #2563eb); 
      color: white; 
      padding: 30px; 
      text-align: center; 
      border-radius: 10px 10px 0 0; 
    }
    .content { 
      background: #f8fafc; 
      padding: 30px; 
      border-radius: 0 0 10px 10px; 
    }
    .appointment-card { 
      background: white; 
      padding: 25px; 
      border-radius: 8px; 
      box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
      margin: 20px 0; 
    }
    .detail-row { 
      display: flex; 
      justify-content: space-between; 
      margin: 15px 0; 
      padding: 10px; 
      background: #f1f5f9; 
      border-radius: 5px; 
    }
    .detail-label { 
      font-weight: bold; 
      color: #1a3d7d; 
    }
    .qr-section { 
      text-align: center; 
      margin: 30px 0; 
      padding: 25px; 
      background: white; 
      border-radius: 8px; 
      box-shadow: 0 2px 10px rgba(0,0,0,0.1); 
    }
    .clinic-info { 
      background: #1a3d7d; 
      color: white; 
      padding: 25px; 
      border-radius: 8px; 
      margin: 20px 0; 
    }
    .footer { 
      text-align: center; 
      margin: 30px 0; 
      color: #64748b; 
      font-size: 14px; 
    }
    .confirmation-number { 
      font-size: 24px; 
      font-weight: bold; 
      color: #22c55e; 
      text-align: center; 
      margin: 20px 0; 
    }
    .important-note { 
      background: #fef3c7; 
      border-left: 4px solid #f59e0b; 
      padding: 15px; 
      margin: 20px 0; 
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🏥 Appointment Confirmed!</h1>
    <p>DakshinRehab Super Speciality Clinic</p>
  </div>
  
  <div class="content">
    <div class="confirmation-number">
      Confirmation #: ${confirmationNumber}
    </div>
    
    <div class="appointment-card">
      <h2>📅 Appointment Details</h2>
      <div class="detail-row">
        <span class="detail-label">Patient Name:</span>
        <span>${patient.name}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Service:</span>
        <span>${appointmentDetails.specialty}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Reason:</span>
        <span>${appointmentDetails.reason}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Date:</span>
        <span>${new Date(appointmentDetails.date).toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</span>
      </div>
      <div class="detail-row">
        <span class="detail-label">Time:</span>
        <span>${appointmentDetails.timeSlot}</span>
      </div>
      ${appointmentDetails.notes ? `
      <div class="detail-row">
        <span class="detail-label">Notes:</span>
        <span>${appointmentDetails.notes}</span>
      </div>
      ` : ''}
    </div>
    
    <div class="qr-section">
      <h3>📱 QR Code for Quick Access</h3>
      <p>Show this QR code at the clinic for faster check-in:</p>
      <img src="${qrCode}" alt="Appointment QR Code" style="max-width: 200px; height: auto;">
    </div>
    
    <div class="important-note">
      <strong>⚠️ Important:</strong> Please arrive 15 minutes early for your appointment. 
      Bring a valid ID and any relevant medical reports.
    </div>
    
    <div class="clinic-info">
      <h3>📍 Clinic Information</h3>
      <p><strong>DakshinRehab Super Speciality Physiotherapy, Prosthetics, Orthotics & Wellness Clinic</strong></p>
      <p>📍 3rd Floor, ARD Magnum, Green Hills<br>
      Moosapet, Hyderabad – 500018</p>
      <p>📞 <strong>+91 80192 99888</strong> | +91 70755 75400</p>
      <p>✉️ info@dakshinrehab.com</p>
      <p>🌐 www.dakshinrehab.com</p>
      <p>🕐 <strong>Hours:</strong> Mon–Sat 09:00–20:30 (Closed Sunday)</p>
      <p><a href="https://maps.app.goo.gl/SfmZ7W4mE1iXUuL79" style="color: #60a5fa;">🗺️ Get Directions</a></p>
    </div>
  </div>
  
  <div class="footer">
    <p>Thank you for choosing DakshinRehab. We look forward to serving you!</p>
    <p>Founded in 2004 by Mr. Mohana Gandhi, Certified Prosthetist & Orthotist</p>
    <p>If you need to reschedule, please call us at least 24 hours in advance.</p>
  </div>
</body>
</html>
  `.trim();
};

export const sendConfirmationEmail = async (appointment) => {
  try {
    // This is a placeholder for actual email sending
    // In production, you would integrate with services like:
    // - SendGrid
    // - Mailgun  
    // - AWS SES
    // - Nodemailer with SMTP
    
    const emailData = {
      to: appointment.patient.email,
      subject: `Appointment Confirmed - ${appointment.confirmationNumber} | DakshinRehab`,
      html: generateEmailHTML(appointment),
      from: 'info@dakshinrehab.com',
      replyTo: 'info@dakshinrehab.com'
    };
    
    console.log('📧 Email would be sent with data:', {
      to: emailData.to,
      subject: emailData.subject,
      confirmationNumber: appointment.confirmationNumber
    });
    
    // Simulate successful email sending
    return {
      success: true,
      messageId: `msg_${Date.now()}`,
      recipient: appointment.patient.email
    };
    
    // For actual email sending, uncomment and configure one of these:
    
    /*
    // Using Nodemailer (install: pnpm install nodemailer)
    const nodemailer = require('nodemailer');
    
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    
    const result = await transporter.sendMail(emailData);
    return result;
    */
    
    /*
    // Using SendGrid (install: pnpm install @sendgrid/mail)
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const result = await sgMail.send(emailData);
    return result;
    */
    
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
};

// Generate plain text version of email for better deliverability
export const generateEmailText = (appointment) => {
  const { patient, appointmentDetails, confirmationNumber } = appointment;
  
  return `
APPOINTMENT CONFIRMED - DakshinRehab

Confirmation #: ${confirmationNumber}

APPOINTMENT DETAILS:
- Patient Name: ${patient.name}
- Service: ${appointmentDetails.specialty}
- Reason: ${appointmentDetails.reason}
- Date: ${new Date(appointmentDetails.date).toLocaleDateString()}
- Time: ${appointmentDetails.timeSlot}
${appointmentDetails.notes ? `- Notes: ${appointmentDetails.notes}` : ''}

CLINIC INFORMATION:
DakshinRehab Super Speciality Physiotherapy, Prosthetics, Orthotics & Wellness Clinic
Address: 3rd Floor, ARD Magnum, Green Hills, Moosapet, Hyderabad – 500018
Phone: +91 80192 99888 | +91 70755 75400
Email: info@dakshinrehab.com
Website: www.dakshinrehab.com
Hours: Mon–Sat 09:00–20:30 (Closed Sunday)
Directions: https://maps.app.goo.gl/SfmZ7W4mE1iXUuL79

IMPORTANT:
- Please arrive 15 minutes early for your appointment
- Bring a valid ID and any relevant medical reports
- Call us at least 24 hours in advance if you need to reschedule

Thank you for choosing DakshinRehab!
Founded in 2004 by Mr. Mohana Gandhi, Certified Prosthetist & Orthotist
  `.trim();
};
