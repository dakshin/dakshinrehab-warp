# PROJECT UI/UX FOUNDATION RULES
## DakshinRehab Super Speciality Physiotherapy, Prosthetics, Orthotics & Wellness Clinic

> **⚠️ MANDATORY DEVELOPMENT RULES**  
> **ALL new components, refactoring, and modifications MUST follow this guide**  
> **NO exceptions without explicit approval**

---

## 🏥 **BRAND IDENTITY RULES (MANDATORY)**

### **✅ APPROVED BRAND INFORMATION - USE EXACTLY AS WRITTEN**
```javascript
const BRAND_INFO = {
  name: "DakshinRehab Super Speciality Physiotherapy, Prosthetics, Orthotics & Wellness Clinic",
  founded: "2004",
  founder: "Mr. Mohana Gandhi (Certified Prosthetist & Orthotist)",
  address: "3rd Floor, ARD Magnum, Green Hills, Moosapet, Hyderabad – 500018",
  phones: ["+91 80192 99888", "+91 70755 75400"],
  email: "info@dakshinrehab.com",
  website: "www.dakshinrehab.com",
  hours: "Mon–Sat 09:00–20:30 (Closed Sunday)",
  googleMap: "https://maps.app.goo.gl/SfmZ7W4mE1iXUuL79",
  socialMedia: {
    youtube: "www.youtube.com/dakshinrehab",
    facebook: "www.facebook.com/dakshinrehab",
    twitter: "www.twitter.com/dakshinrehab",
    linkedin: "www.linkedin.com/dakshinrehab",
    instagram: "www.instagram.com/dakshinrehab"
  }
}
```

### **🚫 FORBIDDEN CONTENT**
- **NEVER use:** "MedDoctors" branding
- **NEVER use:** Generic medical terms without physiotherapy context
- **NEVER use:** Placeholder Lorem Ipsum text in production
- **NEVER use:** Generic doctor images - only DakshinRehab team photos
- **NEVER use:** Non-physiotherapy medical specialties

---

## 🎨 **DESIGN SYSTEM RULES (STRICT COMPLIANCE)**

### **COLOR PALETTE - MANDATORY VALUES**
```css
/* PRIMARY COLORS - USE THESE EXACT VALUES */
:root {
  --dakshin-primary: #1A3D7D;      /* Medical trust blue - main brand */
  --dakshin-secondary: #2E8B57;    /* Wellness green - secondary actions */
  --dakshin-accent: #FF6B35;       /* Sports energy orange - highlights */
  --dakshin-neuro: #6A5ACD;        /* Neuro purple - specialty sections */
  --dakshin-success: #28a745;      /* Success states */
  --dakshin-warning: #ffc107;      /* Warning states */
  --dakshin-danger: #dc3545;       /* Error states */
  --dakshin-light: #f8f9fa;        /* Background light */
  --dakshin-dark: #343a40;         /* Text dark */
  --dakshin-text: #4A4A4A;         /* Body text */
  --dakshin-text-light: #6c757d;   /* Secondary text */
  --dakshin-white: #ffffff;        /* Pure white */
}

/* BUTTON COLOR RULES */
.btn-primary { background-color: var(--dakshin-primary); }
.btn-secondary { background-color: var(--dakshin-secondary); }
.btn-accent { background-color: var(--dakshin-accent); }
```

### **TYPOGRAPHY RULES - MANDATORY IMPLEMENTATION**
```css
/* FONT FAMILIES - DO NOT CHANGE */
--font-heading: 'Rajdhani', sans-serif;
--font-body: 'Public Sans', sans-serif;

/* FONT WEIGHTS - APPROVED VALUES ONLY */
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;

/* FONT SIZES - CONSISTENT SCALE */
--text-xs: 12px;
--text-sm: 14px;    /* Base body text */
--text-base: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 30px;
--text-4xl: 36px;

/* MANDATORY TYPOGRAPHY CLASSES */
.heading { font-family: var(--font-heading); font-weight: var(--weight-semibold); }
.body-text { font-family: var(--font-body); font-size: var(--text-sm); line-height: 1.6; }
```

### **SPACING SYSTEM - CONSISTENT MEASUREMENTS**
```css
/* SPACING SCALE - USE ONLY THESE VALUES */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

---

## 🏗️ **COMPONENT RULES (MANDATORY COMPLIANCE)**

### **✅ APPROVED SPECIALTIES - ONLY USE THESE**
```javascript
const APPROVED_SPECIALTIES = [
  {
    id: "sports-injury",
    name: "Sports Injury Rehabilitation",
    icon: "flaticon-sports-injury", // Custom icon needed
    color: "var(--dakshin-accent)"
  },
  {
    id: "neuro-physio",
    name: "Neuro Physiotherapy Rehab",
    icon: "flaticon-brain-rehab", // Custom icon needed
    color: "var(--dakshin-neuro)"
  },
  {
    id: "prosthetics-orthotics",
    name: "Prosthetics & Orthotics",
    icon: "flaticon-prosthetics", // Custom icon needed
    color: "var(--dakshin-primary)"
  },
  {
    id: "general-physio",
    name: "General Physiotherapy",
    icon: "flaticon-physiotherapy", // Custom icon needed
    color: "var(--dakshin-secondary)"
  },
  {
    id: "wellness",
    name: "Wellness Programs",
    icon: "flaticon-wellness", // Custom icon needed
    color: "var(--dakshin-success)"
  }
];
```

### **COMPONENT NAMING RULES**
```javascript
// ✅ CORRECT NAMING PATTERNS
- DakshinSpecialties.jsx (not Departments.jsx)
- TherapistCard.jsx (not DoctorCard.jsx)
- TreatmentSection.jsx (not MedicalSection.jsx)
- PhysioServices.jsx (not MedicalServices.jsx)
- RehabTestimonials.jsx (not Testimonials.jsx)

// 🚫 FORBIDDEN NAMING PATTERNS
- Doctor*.jsx (use Therapist*.jsx)
- Medical*.jsx (use Physio*.jsx or Rehab*.jsx)
- Hospital*.jsx (use Clinic*.jsx)
- Surgery*.jsx (use Treatment*.jsx)
```

### **BUTTON COMPONENT RULES**
```jsx
// ✅ APPROVED BUTTON IMPLEMENTATIONS
const DakshinButton = ({ variant = "primary", children, ...props }) => {
  const getButtonClass = () => {
    switch(variant) {
      case "primary": return "btn btn-primary";
      case "secondary": return "btn btn-secondary";  
      case "accent": return "btn btn-accent";
      case "outline": return "btn btn-outline-primary";
      default: return "btn btn-primary";
    }
  };
  
  return (
    <button className={getButtonClass()} {...props}>
      {children}
    </button>
  );
};

// MANDATORY BUTTON TEXTS
const BUTTON_TEXTS = {
  bookAppointment: "Book Session",
  learnMore: "Learn More About Treatment",
  viewServices: "View All Services",
  contactUs: "Contact DakshinRehab",
  readMore: "Read Success Story"
};
```

---

## 📱 **RESPONSIVE DESIGN RULES**

### **BREAKPOINT COMPLIANCE**
```scss
// MANDATORY RESPONSIVE BEHAVIOR
.specialty-card {
  // Mobile First: Stack vertically
  display: block;
  margin-bottom: var(--space-4);
  
  @media (min-width: 768px) {
    // Tablet: 2 columns
    display: inline-block;
    width: calc(50% - var(--space-4));
    margin-right: var(--space-4);
  }
  
  @media (min-width: 992px) {
    // Desktop: 3 columns  
    width: calc(33.333% - var(--space-4));
  }
}
```

### **MOBILE-FIRST MANDATORY RULES**
- **Always design for mobile first**
- **Touch targets minimum 44px**
- **Text must be readable at 14px minimum**
- **Forms must be single column on mobile**
- **Navigation must collapse on mobile**

---

## 🔄 **CONTENT REPLACEMENT RULES**

### **✅ APPROVED CONTENT MAPPING**
```javascript
const CONTENT_MAPPING = {
  // OLD TEMPLATE → NEW DAKSHINREHAB
  "Hematology": "Sports Injury Rehabilitation",
  "Neurology": "Neuro Physiotherapy Rehab",
  "Gastroenterology": "Prosthetics & Orthotics", 
  "Pulmonology": "General Physiotherapy",
  "Cardiology": "Wellness Programs",
  "Ophthalmology": "Pediatric Physiotherapy",
  "Orthopedics": "Orthopedic Rehabilitation",
  "Radiology": "Diagnostic Services",
  
  // ROLE MAPPINGS
  "Doctor": "Physiotherapist",
  "Physician": "Therapist", 
  "Surgeon": "Specialist",
  "Medical": "Physiotherapy",
  "Hospital": "Clinic",
  "Patient": "Client"
};
```

### **MANDATORY CONTENT RULES**
- **Every page MUST mention "DakshinRehab"**
- **Include founder credit: "Founded by Mr. Mohana Gandhi"**
- **Always show established date: "Since 2004"**
- **Location MUST be: "Green Hills, Moosapet, Hyderabad"**
- **Contact info MUST match brand guidelines exactly**

---

## 🎯 **FUNCTIONALITY RULES**

### **FORM VALIDATION RULES**
```javascript
// MANDATORY FORM FIELDS FOR APPOINTMENTS
const REQUIRED_APPOINTMENT_FIELDS = {
  name: { required: true, minLength: 2 },
  phone: { required: true, pattern: /^[+]?[0-9]{10,12}$/ },
  email: { required: true, type: "email" },
  service: { required: true, options: APPROVED_SPECIALTIES },
  preferredDate: { required: true, type: "date" },
  message: { required: false, maxLength: 500 }
};

// PHONE NUMBER FORMAT ENFORCEMENT
const formatPhoneNumber = (phone) => {
  // Must support Indian format: +91 XXXXX XXXXX
  return phone.replace(/^(\+91|0)?/, '+91 ');
};
```

### **NAVIGATION RULES**
```javascript
// APPROVED NAVIGATION STRUCTURE
const NAVIGATION_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About DakshinRehab", href: "/about" },
  { 
    label: "Services", 
    href: "/services",
    dropdown: APPROVED_SPECIALTIES.map(s => ({ 
      label: s.name, 
      href: `/services/${s.id}` 
    }))
  },
  { label: "Our Team", href: "/team" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Contact", href: "/contact" },
  { label: "Book Session", href: "/appointment", className: "btn-accent" }
];
```

---

## 🌐 **LOCALIZATION RULES**

### **LANGUAGE IMPLEMENTATION RULES**
```javascript
// MANDATORY LANGUAGE SUPPORT
const SUPPORTED_LANGUAGES = {
  en: "English", // Primary
  te: "Telugu",  // Secondary for local market
  hi: "Hindi"    // Optional
};

// CURRENCY AND FORMATTING
const INDIAN_FORMATTING = {
  currency: "₹", // Indian Rupee symbol
  dateFormat: "DD/MM/YYYY", // Indian date format
  timeFormat: "HH:MM", // 24-hour format
  phoneFormat: "+91 XXXXX XXXXX"
};
```

### **SEO MANDATORY REQUIREMENTS**
```javascript
// REQUIRED META TAGS FOR EVERY PAGE
const SEO_REQUIREMENTS = {
  title: "Must include 'DakshinRehab' and relevant keywords",
  description: "Must mention location: Hyderabad, Telangana",
  keywords: "Must include: physiotherapy, Hyderabad, sports injury, prosthetics",
  ogTitle: "Same as title with DakshinRehab branding",
  ogDescription: "Focus on speciality services",
  ogImage: "DakshinRehab facility or team photo only",
  schema: "LocalBusiness schema with exact address"
};
```

---

## 📊 **PERFORMANCE RULES**

### **MANDATORY PERFORMANCE STANDARDS**
- **First Contentful Paint: < 2 seconds**
- **Largest Contentful Paint: < 3 seconds**
- **Cumulative Layout Shift: < 0.1**
- **Image optimization: All images MUST be WebP format**
- **Code splitting: Components MUST be lazy-loaded**

### **ACCESSIBILITY COMPLIANCE (WCAG 2.1 AA)**
```css
/* MANDATORY ACCESSIBILITY RULES */
.interactive-element {
  min-height: 44px; /* Touch target size */
  min-width: 44px;
}

.text-content {
  color-contrast: 4.5:1; /* Minimum contrast ratio */
}

/* FOCUS STATES - MANDATORY */
.btn:focus, .form-control:focus {
  outline: 2px solid var(--dakshin-accent);
  outline-offset: 2px;
}
```

---

## 🔧 **DEVELOPMENT WORKFLOW RULES**

### **COMPONENT CREATION CHECKLIST**
Before creating any new component, verify:
- [ ] ✅ Does it follow DakshinRehab branding?
- [ ] ✅ Uses approved color variables?
- [ ] ✅ Implements responsive design rules?
- [ ] ✅ Includes proper accessibility attributes?
- [ ] ✅ Uses approved typography classes?
- [ ] ✅ Follows naming conventions?
- [ ] ✅ No template-specific content remains?

### **CODE REVIEW REQUIREMENTS**
```javascript
// MANDATORY CHECKS BEFORE MERGE
const codeReviewChecklist = {
  branding: "All DakshinRehab info correct?",
  colors: "Only approved color variables used?",
  content: "No MedDoctors references remain?",
  responsive: "Mobile-first design implemented?",
  accessibility: "WCAG 2.1 AA compliant?",
  performance: "Images optimized and lazy-loaded?",
  seo: "Proper meta tags and schema?",
  testing: "Component tested on mobile/desktop?"
};
```

### **FILE STRUCTURE RULES**
```
components/
├── dakshin-ui/          # Brand-specific UI components
│   ├── DakshinButton.jsx
│   ├── DakshinCard.jsx
│   └── DakshinForm.jsx
├── specialties/         # Service-related components  
│   ├── SpecialtyCard.jsx
│   └── SpecialtyList.jsx
├── team/               # Team/therapist components
│   ├── TherapistCard.jsx
│   └── TherapistProfile.jsx
└── common/             # Reusable components
    ├── Layout.jsx
    └── Navigation.jsx
```

---

## 📋 **ASSET RULES**

### **IMAGE REQUIREMENTS**
```javascript
// MANDATORY IMAGE STANDARDS
const IMAGE_RULES = {
  format: "WebP (with JPEG fallback)",
  maxWidth: "1920px for desktop, 768px for mobile",
  compression: "80% quality minimum",
  alt: "Must be descriptive and include 'DakshinRehab' when relevant",
  srcset: "Must provide multiple sizes",
  loading: "lazy (except above-fold images)"
};

// APPROVED IMAGE TYPES
const APPROVED_IMAGES = [
  "DakshinRehab facility photos",
  "Team photos with proper consent",
  "Equipment and treatment photos", 
  "Patient success photos (with written consent)",
  "Exercise demonstration photos"
];

// FORBIDDEN IMAGES
const FORBIDDEN_IMAGES = [
  "Generic stock medical photos",
  "MedDoctors template images",
  "Photos without proper consent",
  "Low-resolution images",
  "Images without DakshinRehab context"
];
```

---

## 🚨 **QUALITY ASSURANCE RULES**

### **TESTING REQUIREMENTS**
- **Browser Testing:** Chrome, Firefox, Safari, Edge
- **Device Testing:** iPhone, Android, iPad, Desktop
- **Network Testing:** 3G, 4G, WiFi conditions
- **Accessibility Testing:** Screen readers, keyboard navigation

### **DEPLOYMENT CHECKLIST**
- [ ] ✅ All brand information matches approved guidelines
- [ ] ✅ No placeholder content remains
- [ ] ✅ Contact information is accurate
- [ ] ✅ Forms submit to correct endpoints
- [ ] ✅ SEO meta tags are complete
- [ ] ✅ Performance metrics meet standards
- [ ] ✅ Accessibility audit passed
- [ ] ✅ Mobile responsiveness verified

---

## 🎪 **CONTENT TONE RULES**

### **APPROVED MESSAGING TONE**
- **Professional but approachable**
- **Confident in expertise**
- **Empathetic to patient needs**
- **Focus on results and recovery**
- **Highlight 20+ years experience**
- **Emphasize specialized care**

### **MANDATORY MESSAGING ELEMENTS**
Every page should include:
- **"Since 2004" or "20+ years experience"**
- **"Mr. Mohana Gandhi, Certified Prosthetist & Orthotist"**
- **"Super Speciality" designation**
- **Location: "Green Hills, Moosapet"**
- **Specific service focus (not general medical)**

---

## ⚠️ **VIOLATION CONSEQUENCES**

### **IMMEDIATE REJECTION CRITERIA**
Any component/code will be immediately rejected if:
- Uses "MedDoctors" branding
- Contains generic medical content
- Doesn't follow color variable system
- Missing responsive design
- Fails accessibility standards
- Uses unapproved imagery

### **APPROVAL PROCESS**
1. **Self-check against this document**
2. **Peer review using checklist**
3. **Component testing on multiple devices**
4. **Final approval by project lead**

---

**🔒 DOCUMENT STATUS**  
**Version:** 1.0  
**Last Updated:** January 2025  
**Authority:** Mr. Mohana Gandhi, DakshinRehab  
**Enforcement:** MANDATORY for all development work  
**Next Review:** After project completion  

---

> **⚠️ FINAL REMINDER**  
> **This document is LAW for this project. Every line of code, every component, every design decision must align with these rules. NO EXCEPTIONS.**
