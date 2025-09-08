"use client";
import React, { useState, useEffect } from "react";
import { 
  DakshinInput, 
  DakshinSelect, 
  DakshinTextarea,
  DakshinPhoneInput,
  DakshinFormGroup
} from "@/components/dakshin-ui/DakshinForm";
import { 
  dakshinSpecialties, 
  maritalStatusOptions, 
  generateAvailableDates,
  generateConfirmationNumber 
} from "@/api-shared/data/dakshin-specialties";

const DakshinBookingForm = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    maritalStatus: "",
    phone: "",
    email: "",
    specialty: "",
    reason: "",
    date: "",
    timeSlot: "",
    notes: ""
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [availableReasons, setAvailableReasons] = useState([]);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [availableDates] = useState(() => generateAvailableDates());

  // Update reasons when specialty changes
  useEffect(() => {
    if (formData.specialty && dakshinSpecialties[formData.specialty]) {
      setAvailableReasons(dakshinSpecialties[formData.specialty].reasons);
      setFormData(prev => ({ ...prev, reason: "" })); // Reset reason
    } else {
      setAvailableReasons([]);
    }
  }, [formData.specialty]);

  // Update time slots when specialty changes
  useEffect(() => {
    if (formData.specialty && dakshinSpecialties[formData.specialty]) {
      setAvailableTimeSlots(dakshinSpecialties[formData.specialty].timeSlots);
      setFormData(prev => ({ ...prev, timeSlot: "" })); // Reset time slot
    } else {
      setAvailableTimeSlots([]);
    }
  }, [formData.specialty]);

  const handleInputChange = (field) => (event) => {
    const value = event.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required field validation
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.age.trim()) newErrors.age = "Age is required";
    if (!formData.maritalStatus) newErrors.maritalStatus = "Marital status is required";
    if (!formData.specialty) newErrors.specialty = "Please select a service";
    if (!formData.reason) newErrors.reason = "Please select a reason";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.timeSlot) newErrors.timeSlot = "Please select a time slot";
    
    // Age validation
    const age = parseInt(formData.age);
    if (formData.age && (isNaN(age) || age < 1 || age > 120)) {
      newErrors.age = "Please enter a valid age";
    }
    
    // Phone validation (optional but if provided, should be valid)
    if (formData.phone && !/^\+?[0-9\s\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    // Email validation (optional but if provided, should be valid)
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    
    try {
      // Prepare data for API
      const appointmentData = {
        patient: {
          name: formData.name,
          age: parseInt(formData.age),
          maritalStatus: formData.maritalStatus,
          phone: formData.phone,
          email: formData.email
        },
        appointmentDetails: {
          specialty: formData.specialty,
          reason: formData.reason,
          date: formData.date,
          timeSlot: formData.timeSlot,
          notes: formData.notes
        }
      };

      // Call API to create appointment
      const response = await fetch('/api-shared/appointments/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData)
      });

      const result = await response.json();
      
      if (result.success) {
        // Success callback with appointment data
        onSubmitSuccess(result.appointment);
        
        // Reset form
        setFormData({
          name: "",
          age: "",
          maritalStatus: "",
          phone: "",
          email: "",
          specialty: "",
          reason: "",
          date: "",
          timeSlot: "",
          notes: ""
        });
      } else {
        // Handle API errors
        if (result.details) {
          // Validation errors from API
          const apiErrors = {};
          result.details.forEach(error => {
            if (error.includes('name')) apiErrors.name = error;
            if (error.includes('age')) apiErrors.age = error;
            // Add more field mapping as needed
          });
          setErrors(apiErrors);
        } else {
          alert(result.message || 'Failed to book appointment');
        }
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('Failed to book appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dakshin-booking-form max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#1a3d7d] mb-2">Book Your Appointment</h2>
        <p className="text-gray-600">Please fill in your details to schedule an appointment with our experts</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DakshinInput
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange('name')}
            error={errors.name}
            required
          />
          
          <DakshinInput
            label="Age"
            type="number"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleInputChange('age')}
            error={errors.age}
            required
            min="1"
            max="120"
          />
        </div>

        <DakshinSelect
          label="Marital Status"
          value={formData.maritalStatus}
          onChange={handleInputChange('maritalStatus')}
          error={errors.maritalStatus}
          required
          options={maritalStatusOptions}
          placeholder="Select marital status"
        />

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DakshinPhoneInput
            value={formData.phone}
            onChange={handleInputChange('phone')}
            error={errors.phone}
            placeholder="+91 XXXXX XXXXX"
          />
          
          <DakshinInput
            label="Email Address"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleInputChange('email')}
            error={errors.email}
          />
        </div>

        {/* Appointment Details */}
        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold text-[#1a3d7d] mb-4">Appointment Details</h3>
          
          <DakshinSelect
            label="Select Service"
            value={formData.specialty}
            onChange={handleInputChange('specialty')}
            error={errors.specialty}
            required
            options={Object.keys(dakshinSpecialties).map(key => ({
              value: key,
              label: dakshinSpecialties[key].name
            }))}
            placeholder="Choose a service"
          />

          {availableReasons.length > 0 && (
            <DakshinSelect
              label="Reason for Visit"
              value={formData.reason}
              onChange={handleInputChange('reason')}
              error={errors.reason}
              required
              options={availableReasons}
              placeholder="Select reason for visit"
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DakshinSelect
              label="Preferred Date"
              value={formData.date}
              onChange={handleInputChange('date')}
              error={errors.date}
              required
              options={availableDates.map(date => ({
                value: date.value,
                label: date.label
              }))}
              placeholder="Select appointment date"
            />

            {availableTimeSlots.length > 0 && (
              <DakshinSelect
                label="Preferred Time"
                value={formData.timeSlot}
                onChange={handleInputChange('timeSlot')}
                error={errors.timeSlot}
                required
                options={availableTimeSlots}
                placeholder="Select time slot"
              />
            )}
          </div>
        </div>

        {/* Additional Notes */}
        <DakshinTextarea
          label="Additional Notes"
          placeholder="Please describe your condition or any specific requirements..."
          value={formData.notes}
          onChange={handleInputChange('notes')}
          error={errors.notes}
          rows={4}
        />

        {/* Submit Button */}
        <div className="pt-6 border-t">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1a3d7d] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#2563eb] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Booking Appointment...
              </span>
            ) : (
              "Book Appointment"
            )}
          </button>
        </div>

        {/* Clinic Information */}
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-[#1a3d7d] mb-2">📞 Need Help?</h4>
          <p className="text-sm text-gray-600">
            Call us at <strong>+91 80192 99888</strong> or email <strong>info@dakshinrehab.com</strong>
          </p>
          <p className="text-sm text-gray-600 mt-1">
            📍 Green Hills, Moosapet, Hyderabad | Mon–Sat 09:00–20:30
          </p>
        </div>
      </form>
    </div>
  );
};

export default DakshinBookingForm;
