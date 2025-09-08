// QR Code Generation Utility for DakshinRehab Appointments

export const generateQRCode = async (data) => {
  try {
    // For now, we'll use a simple approach
    // In production, you might want to use a QR code library like 'qrcode'
    
    // Using QR Server API as a simple solution
    const qrText = encodeURIComponent(data);
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${qrText}`;
    
    // Convert to base64 for storage
    try {
      const response = await fetch(qrUrl);
      const arrayBuffer = await response.arrayBuffer();
      const base64 = Buffer.from(arrayBuffer).toString('base64');
      return `data:image/png;base64,${base64}`;
    } catch (fetchError) {
      console.error('QR generation via API failed:', fetchError);
      // Fallback: return a simple text-based QR data URL
      return generateFallbackQR(data);
    }
    
  } catch (error) {
    console.error('QR code generation error:', error);
    return generateFallbackQR(data);
  }
};

// Fallback QR generation (simple placeholder)
const generateFallbackQR = (data) => {
  // Create a simple SVG-based QR placeholder
  const svgQR = `
    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="300" fill="white"/>
      <rect x="50" y="50" width="200" height="200" fill="black"/>
      <rect x="75" y="75" width="150" height="150" fill="white"/>
      <text x="150" y="140" text-anchor="middle" font-size="12" fill="black">QR Code</text>
      <text x="150" y="160" text-anchor="middle" font-size="10" fill="black">Appointment Details</text>
    </svg>
  `;
  
  const base64SVG = Buffer.from(svgQR).toString('base64');
  return `data:image/svg+xml;base64,${base64SVG}`;
};

// For production use, install the 'qrcode' package and use this instead:
/*
import QRCode from 'qrcode';

export const generateQRCode = async (data) => {
  try {
    const qrCodeDataURL = await QRCode.toDataURL(data, {
      width: 300,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    });
    return qrCodeDataURL;
  } catch (error) {
    console.error('QR code generation error:', error);
    throw error;
  }
};
*/
