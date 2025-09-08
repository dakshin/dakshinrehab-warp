"use client"
import React, { useState } from "react";
import SecTitle from "./SecTitle";

// Add mobile-optimized styles for FAQ content
const faqStyles = `
  <style>
    .mobile-faq-content {
      /* Mobile-optimized bullet points */
    }
    .mobile-faq-content ul {
      padding-left: 1rem !important;
    }
    @media (min-width: 640px) {
      .mobile-faq-content ul {
        padding-left: 1.5rem !important;
      }
    }
    .mobile-faq-content li {
      margin-bottom: 0.25rem !important;
      line-height: 1.4 !important;
    }
    .mobile-faq-content h6 {
      font-size: 0.875rem !important;
      margin-top: 1rem !important;
      margin-bottom: 0.5rem !important;
    }
    @media (min-width: 640px) {
      .mobile-faq-content h6 {
        font-size: 1rem !important;
      }
    }
    .mobile-faq-content p {
      margin-bottom: 0.75rem !important;
      line-height: 1.5 !important;
    }
    /* Mobile-optimized highlight boxes */
    .mobile-faq-content .bg-blue-50,
    .mobile-faq-content .bg-green-50,
    .mobile-faq-content .bg-orange-50,
    .mobile-faq-content .bg-purple-50,
    .mobile-faq-content .bg-teal-50 {
      padding: 0.75rem !important;
      border-radius: 0.5rem !important;
      font-size: 0.875rem !important;
    }
    @media (min-width: 640px) {
      .mobile-faq-content .bg-blue-50,
      .mobile-faq-content .bg-green-50,
      .mobile-faq-content .bg-orange-50,
      .mobile-faq-content .bg-purple-50,
      .mobile-faq-content .bg-teal-50 {
        padding: 1rem !important;
        font-size: 0.9375rem !important;
      }
    }
  </style>
`;

// Default DakshinRehab FAQ data - Patient Questions with Admin Responses
const defaultFAQData = [
  {
    id: 1,
    question: "I've been experiencing severe back pain for months. Can DakshinRehab help me avoid surgery?",
    answer: "<div class='faq-answer'><p><strong>Absolutely!</strong> At DakshinRehab, we've been helping patients avoid surgery since 2004. Our advanced non-surgical approach has helped thousands find lasting relief.</p><h6 class='text-primary font-semibold mt-4 mb-2'>📊 Our Expert Assessment Team:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Mr. Mohana Gandhi</strong> - Certified Prosthetist & Orthotist (25 years experience)</li><li><strong>Dr. Swapna Gandhi</strong> - Physical Therapist & Human Movement Specialist (20 years)</li></ul><h6 class='text-primary font-semibold mt-4 mb-2'>🎯 Advanced Non-Surgical Treatments:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Spine Decompression Therapy</strong> - Advanced spinal relief</li><li><strong>Tecar Therapy</strong> - Deep tissue healing</li><li><strong>Electro Magnetic Therapy</strong> - Pain reduction</li><li><strong>Dry Needling</strong> - Trigger point release</li><li><strong>Posture Analysis & Movement Assessment</strong> - Root cause identification</li></ul><p class='mt-4'><strong>✅ Results:</strong> Most patients see significant improvement within 4-6 weeks. Visit our Green Hills, Moosapet clinic for your comprehensive consultation!</p></div>",
    show: true
  },
  {
    id: 2,
    question: "My child has special needs and requires physiotherapy. Do you have pediatric specialists?",
    answer: "<div class='faq-answer'><p><strong>Yes, absolutely!</strong> We have dedicated pediatric specialists who understand the unique needs of children with special requirements.</p><h6 class='text-primary font-semibold mt-4 mb-2'>👨‍⚕️ Our Pediatric Specialists:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Dr. Sujith Omkaram</strong> - Orthopedic Pediatric Specialist (15 years experience)</li><li><strong>Dr. Anand Wani</strong> - Pediatrician (12 years experience)</li></ul><h6 class='text-primary font-semibold mt-4 mb-2'>🎯 Comprehensive Pediatric Services:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Kids Physio</strong> - Age-appropriate therapy techniques</li><li><strong>Specialized Assessments</strong> - Individual movement evaluations</li><li><strong>Movement Training</strong> - Fun, engaging exercises</li><li><strong>Family-Centered Care</strong> - Parent training and support</li><li><strong>Personalized Treatment Plans</strong> - Tailored to each child's needs</li></ul><h6 class='text-primary font-semibold mt-4 mb-2'>📅 Available Consultation Slots:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Dr. Sujith:</strong> 4:30 PM – 5:30 PM</li><li><strong>Dr. Anand:</strong> 4:00 PM – 5:00 PM</li></ul><p class='mt-4'><strong>📞 Contact:</strong> Call +91 80192 99888 to schedule your child's comprehensive assessment.</p></div>",
    show: false
  },
  {
    id: 3,
    question: "I'm a diabetic and have foot problems. I heard you provide specialized diabetic footwear?",
    answer: "<div class='faq-answer'><p><strong>You're absolutely right!</strong> We provide comprehensive diabetic foot care with custom solutions made right here at our facility.</p><h6 class='text-primary font-semibold mt-4 mb-2'>🎯 Diabetic Foot Care Specialist:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Dr. Bhavin Ram</strong> - Vascular Surgeon & Diabetic Wound Management (18 years experience)</li></ul><h6 class='text-primary font-semibold mt-4 mb-2'>👟 Our Specialized Diabetic Solutions:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Custom Diabetic Footwear</strong> - Designed to prevent ulcers & provide comfort</li><li><strong>Orthotic Insoles</strong> - Custom pressure redistribution</li><li><strong>Advanced Wound Care</strong> - Professional healing strategies</li><li><strong>Therapeutic Footwear Assessment</strong> - Proper fit guarantee</li></ul><h6 class='text-primary font-semibold mt-4 mb-2'>🩺 Advanced Therapy Options:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Ultrasound Therapy</strong> - Enhanced healing</li><li><strong>IFT Therapy</strong> - Pain relief</li><li><strong>TENS Therapy</strong> - Improved circulation</li></ul><h6 class='text-primary font-semibold mt-4 mb-2'>🕰️ Evening Consultations:</h6><p class='bg-blue-50 p-3 rounded-lg mt-2'><strong>Dr. Bhavin Ram:</strong> 6:00 PM – 7:45 PM<br/><span class='text-red-600 font-medium'>⚠️ Early intervention is key - don't wait!</span></p></div>",
    show: false
  },
  {
    id: 4,
    question: "I had a stroke last year and still struggle with walking. Can you help with my rehabilitation?",
    answer: "<div class='faq-answer'><p><strong>We absolutely can help you!</strong> Stroke rehabilitation is one of our core specialties, and we've helped numerous survivors regain their independence.</p><h6 class='text-primary font-semibold mt-4 mb-2'>🧠 Stroke Rehabilitation Specialist:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Dr. Swapna Gandhi</strong> - Physical Therapist & Human Movement Specialist (20 years experience)</li><li>Expert in Stroke Rehab & Balance Disorders</li></ul><h6 class='text-primary font-semibold mt-4 mb-2'>🎯 Comprehensive Stroke Recovery Program:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Advanced Gait Training</strong> - Improve walking patterns</li><li><strong>Virtual Balance Therapy</strong> - Cutting-edge balance technology</li><li><strong>Functional Movement Assessment</strong> - Identify improvement areas</li><li><strong>MAT Range of Movement</strong> - Restore mobility</li><li><strong>Strength & Coordination Training</strong> - Rebuild motor skills</li><li><strong>Home Physiotherapy Services</strong> - Continued care at home</li></ul><h6 class='text-primary font-semibold mt-4 mb-2'>📅 Flexible Appointment Slots:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Early Morning:</strong> 9:00 AM - 9:45 AM</li><li><strong>Morning Options:</strong> 10:00 AM, 11:00 AM, 12:00 PM</li><li><strong>Afternoon:</strong> 3:30 PM, 4:30 PM</li><li><strong>Evening:</strong> 6:00 PM, 7:00 PM</li></ul><p class='mt-4 bg-green-50 p-3 rounded-lg'><strong>💚 Recovery Message:</strong> Recovery takes time, but with our specialized approach and your determination, we'll help you achieve your maximum potential. Every step forward counts!</p></div>",
    show: false
  },
  {
    id: 5,
    question: "I'm an athlete who injured my knee during a cricket match. Do you handle sports injuries?",
    answer: "<div class='faq-answer'><p><strong>Absolutely!</strong> Sports Injury Rehabilitation is one of our key specialties. We understand athletes' unique demands and help you return to peak performance safely.</p><h6 class='text-primary font-semibold mt-4 mb-2'>🏏 Sports Injury Specialists:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Dr. Swapna Gandhi</strong> - Sports Specific Injury Rehab Expert</li><li><strong>Mr. Mohana Gandhi</strong> - Orthotic Bracing Specialist (25 years)</li><li>Running Gait Analysis & Cricket-specific rehabilitation</li></ul><h6 class='text-primary font-semibold mt-4 mb-2'>🎯 Complete Sports Injury Program:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Comprehensive Movement Assessment</strong> - Root cause identification</li><li><strong>Myo-Plus 4 Muscle Strength Testing</strong> - Precise strength analysis</li><li><strong>Sport-Specific Rehabilitation</strong> - Cricket movement patterns</li><li><strong>Customized Strengthening Programs</strong> - Targeted recovery</li><li><strong>Return-to-Sport Protocols</strong> - Safe performance return</li><li><strong>Injury Prevention Strategies</strong> - Avoid future injuries</li></ul><h6 class='text-primary font-semibold mt-4 mb-2'>🦵 Specialized Equipment Support:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>OA Knee Braces</strong> - Custom orthotic support</li><li><strong>Sports Taping & Strapping</strong> - Competition-ready support</li><li><strong>Performance Monitoring</strong> - Track recovery progress</li></ul><p class='mt-4 bg-orange-50 p-3 rounded-lg'><strong>⚡ Athlete's Promise:</strong> Don't rush back too early and risk re-injury. Our 20+ years of experience ensures your complete, safe recovery!</p></div>",
    show: false
  },
  {
    id: 6,
    question: "My grandmother needs a prosthetic leg after amputation. Can you help, and do you train family members too?",
    answer: "<div class='faq-answer'><p><strong>We're so sorry to hear about your grandmother's situation, but yes - we can absolutely help!</strong> This is exactly what we've specialized in for 25 years.</p><h6 class='text-primary font-semibold mt-4 mb-2'>🦵 Prosthetic Specialists:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Mr. Mohana Gandhi</strong> - Certified Prosthetist & Orthotist (25 years experience)</li><li><strong>Dr. Sujith Omkaram</strong> - Specialized Amputee Gait Training (15 years)</li><li>Expert in custom prosthetic fitting & family support</li></ul><h6 class='text-primary font-semibold mt-4 mb-2'>🦾 Comprehensive Prosthetic Services:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Custom Prosthetic Leg Design</strong> - Perfect fit guarantee</li><li><strong>Professional Fitting Process</strong> - Comfort & function priority</li><li><strong>Amputee Gait Training</strong> - Safe, confident walking</li><li><strong>Follow-up Adjustments</strong> - Ongoing optimization</li><li><strong>Maintenance & Care</strong> - Long-term support</li><li><strong>Silicone Cosmetic Prostheses</strong> - Natural appearance</li></ul><h6 class='text-primary font-semibold mt-4 mb-2'>👪 Family-Centered Approach:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Family Training Programs</strong> - Support her recovery journey</li><li><strong>Caregiver Education</strong> - Proper assistance techniques</li><li><strong>Home Adaptation Guidance</strong> - Safety modifications</li><li><strong>In-Patient Rehab Option</strong> - Intensive therapy when needed</li></ul><p class='mt-4 bg-purple-50 p-3 rounded-lg'><strong>💜 Compassionate Care:</strong> We understand this is difficult for your family. Our team provides expert, compassionate care every step of the way. The entire family becomes part of the rehabilitation team.</p><p class='mt-3'><strong>📞 Multiple consultation slots daily:</strong> Call +91 70755 75400 to discuss your grandmother's specific needs.</p></div>",
    show: false
  },
  {
    id: 7,
    question: "I suffer from frequent migraines and vertigo. Can physiotherapy really help with these issues?",
    answer: "<div class='faq-answer'><p><strong>Yes, it absolutely can!</strong> Many people don't realize that migraines and vertigo often have musculoskeletal components that physiotherapy can effectively address.</p><h6 class='text-primary font-semibold mt-4 mb-2'>🤕 Migraine & Vertigo Specialist:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Dr. Tanisha Mohanty</strong> - Physical Therapist specializing in Vertigo/Migraine Physio</li><li>Passionate about helping patients find lasting relief</li><li>Combines modern techniques with personalized care</li></ul><h6 class='text-primary font-semibold mt-4 mb-2'>📊 Understanding the Connection:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Neck Position & Muscle Tension</strong> - Major migraine triggers</li><li><strong>Vestibular Function</strong> - Balance & vertigo relationship</li><li><strong>Posture-Related Issues</strong> - Contributing factors</li></ul><h6 class='text-primary font-semibold mt-4 mb-2'>🎯 Specialized Treatment Approach:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Vertigo Rehabilitation Exercises</strong> - Restore balance function</li><li><strong>Cervical Spine Assessment</strong> - Address neck-related triggers</li><li><strong>Posture Correction Programs</strong> - Reduce trigger points</li><li><strong>Manual Therapy Techniques</strong> - Hands-on relief</li><li><strong>Vestibular Rehabilitation</strong> - Balance retraining</li><li><strong>Trigger Point Release</strong> - Tension reduction</li></ul><h6 class='text-primary font-semibold mt-4 mb-2'>🏠 Convenient Care Options:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Home Physiotherapy Services</strong> - Care during severe episodes</li><li><strong>Personalized Exercise Programs</strong> - Long-term management</li><li><strong>Flexible Scheduling</strong> - When you need it most</li></ul><p class='mt-4 bg-teal-50 p-3 rounded-lg'><strong>🌟 Freedom from Pain:</strong> Don't let migraines and vertigo control your life. Let us help you find lasting relief and regain your quality of life!</p></div>",
    show: false
  },
  {
    id: 8,
    question: "What makes DakshinRehab different from other physiotherapy clinics in Hyderabad?",
    answer: "<div class='faq-answer'><p><strong>Great question!</strong> Here's what sets DakshinRehab apart after 20+ years of excellence in Hyderabad:</p><h6 class='text-primary font-semibold mt-4 mb-2'>🏆 Unique Expertise Combination:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Only clinic in Hyderabad</strong> with both advanced physiotherapy AND in-house prosthetics/orthotics</li><li><strong>Mr. Mohana Gandhi</strong> - Certified Prosthetist & Orthotist (rare specialization)</li><li><strong>25+ years combined experience</strong> of our expert core team</li><li><strong>Established 2004</strong> - Two decades of proven results</li></ul><h6 class='text-primary font-semibold mt-4 mb-2'>🔬 Advanced Technology Arsenal:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Spine Decompression Therapy</strong> - Advanced spinal care</li><li><strong>Tecar Therapy & Shockwave Therapy</strong> - Cutting-edge healing</li><li><strong>Virtual Balance Therapy</strong> - State-of-the-art balance training</li><li><strong>Electro Magnetic Therapy</strong> - Non-invasive pain relief</li><li><strong>Myo-Plus 4 Muscle Strength Testing</strong> - Precise assessment</li><li><strong>Custom Prosthetic Manufacturing</strong> - On-site fabrication</li></ul><h6 class='text-primary font-semibold mt-4 mb-2'>🎯 Comprehensive Care Under One Roof:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Pediatric to Geriatric Care</strong> - All age groups</li><li><strong>Complex Prosthetic Fittings</strong> - Advanced solutions</li><li><strong>Stroke Rehabilitation</strong> - Complete recovery programs</li><li><strong>Sports Injury Recovery</strong> - Athlete-focused care</li><li><strong>Neurological Rehabilitation</strong> - Specialized expertise</li></ul><h6 class='text-primary font-semibold mt-4 mb-2'>🏠 Personalized Service Excellence:</h6><ul class='list-disc pl-6 space-y-1'><li><strong>Home Physiotherapy</strong> - Care at your doorstep</li><li><strong>Family Training Programs</strong> - Support system integration</li><li><strong>Custom Equipment Manufacturing</strong> - Made to measure</li><li><strong>Flexible Slots:</strong> 9:00 AM - 8:00 PM daily</li><li><strong>Green Hills, Moosapet Location</strong> - Easily accessible</li></ul><div class='mt-4 bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border-l-4 border-blue-500'><h6 class='text-blue-700 font-bold mb-2'>📍 The DakshinRehab Promise:</h6><p class='text-sm'><strong>Since 2004</strong> • <strong>Thousands of satisfied patients</strong> • <strong>Reputation built on results, not promises</strong></p><p class='mt-2 font-medium text-blue-800'>Visit us and experience the DakshinRehab difference yourself!</p></div></div>",
    show: false
  }
];

const FAQs = ({ data = defaultFAQData, navbarStyle = 1 }) => {
  // State to track which FAQ is open (only one at a time)
  const [openFAQ, setOpenFAQ] = useState(null);

  // Initialize with first item open if it has show: true
  React.useEffect(() => {
    if (data && data.length > 0) {
      const defaultOpen = data.find(item => item.show);
      if (defaultOpen) {
        setOpenFAQ(defaultOpen.id);
      }
    }
  }, [data]);

  const toggleFAQ = (id) => {
    // If clicking the same FAQ that's already open, close it
    // Otherwise, open the clicked FAQ (this closes others automatically)
    setOpenFAQ(openFAQ === id ? null : id);
  };

  // FAQ section data
  const faqSectionData = {
    title: "Frequently Asked Questions",
    subtitle: "Your Questions Answered",
    description: "Get expert answers to common questions about DakshinRehab's specialized physiotherapy, prosthetics, and rehabilitation services from our experienced team."
  };

  return (
    <>
      {/* Inject mobile-optimized styles */}
      <div dangerouslySetInnerHTML={{ __html: faqStyles }} />
      
      <section className="faq py-100">
        <div className="container mx-auto px-4">
        {/* Single Row Section Header */}
        <SecTitle
          navbarStyle={navbarStyle}
          title={faqSectionData.title}
          subTitle={faqSectionData.subtitle}
          description={faqSectionData.description}
        />
        
        {/* Mobile-First FAQ Layout - Single column on mobile, two columns on desktop */}
        {data && (
          <div className="flex flex-wrap -mx-2 sm:-mx-3">
            <div className="w-full lg:w-1/2 px-2 sm:px-3 mb-4 lg:mb-0">
              {/* Left Column - First half of FAQs */}
              {data.slice(0, Math.ceil(data.length / 2)).map(({ id, question, answer }) => {
                const isOpen = openFAQ === id;
                return (
                  <div className="faq-box mb-3 sm:mb-4" key={id}>
                    <h5 className="question-header">
                      <button
                        className="btn btn-primary click w-full text-left flex items-start sm:items-center justify-between p-3 sm:p-4 rounded-lg text-sm sm:text-base leading-tight sm:leading-normal"
                        type="button"
                        onClick={() => toggleFAQ(id)}
                        aria-expanded={isOpen}
                        aria-controls={`faqs-${id}`}
                      >
                        <span className="font-medium pr-2 flex-1">{question}</span>
                        <i 
                          className={`fas fa-angle-right transform transition-transform duration-300 ml-2 sm:ml-4 flex-shrink-0 mt-1 sm:mt-0 ${
                            isOpen ? 'rotate-90' : ''
                          }`}
                        ></i>
                      </button>
                    </h5>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-[600px] sm:max-h-[500px] lg:max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                      id={`faqs-${id}`}
                    >
                      <div
                        className="card card-body about-text p-3 sm:p-4 bg-gray-50 rounded-b-lg text-sm sm:text-base mobile-faq-content"
                        dangerouslySetInnerHTML={{ __html: answer }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="w-full lg:w-1/2 px-2 sm:px-3">
              {/* Right Column - Second half of FAQs */}
              {data.slice(Math.ceil(data.length / 2)).map(({ id, question, answer }) => {
                const isOpen = openFAQ === id;
                return (
                  <div className="faq-box mb-3 sm:mb-4" key={id}>
                    <h5 className="question-header">
                      <button
                        className="btn btn-primary click w-full text-left flex items-start sm:items-center justify-between p-3 sm:p-4 rounded-lg text-sm sm:text-base leading-tight sm:leading-normal"
                        type="button"
                        onClick={() => toggleFAQ(id)}
                        aria-expanded={isOpen}
                        aria-controls={`faqs-${id}`}
                      >
                        <span className="font-medium pr-2 flex-1">{question}</span>
                        <i 
                          className={`fas fa-angle-right transform transition-transform duration-300 ml-2 sm:ml-4 flex-shrink-0 mt-1 sm:mt-0 ${
                            isOpen ? 'rotate-90' : ''
                          }`}
                        ></i>
                      </button>
                    </h5>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-[600px] sm:max-h-[500px] lg:max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                      id={`faqs-${id}`}
                    >
                      <div
                        className="card card-body about-text p-3 sm:p-4 bg-gray-50 rounded-b-lg text-sm sm:text-base mobile-faq-content"
                        dangerouslySetInnerHTML={{ __html: answer }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        </div>
      </section>
    </>
  );
};

export default FAQs;
