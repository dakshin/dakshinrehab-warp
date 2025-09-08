import React from "react";

/**
 * DakshinRehab Form Components
 * Provides consistent form styling with DakshinRehab branding
 */

// Input component
export const DakshinInput = ({ 
  label, 
  error, 
  className = "",
  required = false,
  ...props 
}) => (
  <div className="dakshin-form-group">
    {label && (
      <label className="dakshin-label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <input 
      className={`dakshin-input ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''} ${className}`}
      {...props}
    />
    {error && (
      <p className="dakshin-form-error">{error}</p>
    )}
  </div>
);

// Textarea component
export const DakshinTextarea = ({ 
  label, 
  error, 
  rows = 4,
  className = "",
  required = false,
  ...props 
}) => (
  <div className="dakshin-form-group">
    {label && (
      <label className="dakshin-label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <textarea 
      className={`dakshin-textarea ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''} ${className}`}
      rows={rows}
      {...props}
    />
    {error && (
      <p className="dakshin-form-error">{error}</p>
    )}
  </div>
);

// Select component
export const DakshinSelect = ({ 
  label, 
  error,
  options = [],
  className = "",
  required = false,
  placeholder = "Select an option",
  ...props 
}) => (
  <div className="dakshin-form-group">
    {label && (
      <label className="dakshin-label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    <select 
      className={`dakshin-select ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''} ${className}`}
      {...props}
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option.value || option}>
          {option.label || option}
        </option>
      ))}
    </select>
    {error && (
      <p className="dakshin-form-error">{error}</p>
    )}
  </div>
);

// Checkbox component
export const DakshinCheckbox = ({ 
  label, 
  error,
  className = "",
  ...props 
}) => (
  <div className="dakshin-form-group">
    <div className="flex items-center">
      <input 
        type="checkbox"
        className={`dakshin-checkbox ${className}`}
        {...props}
      />
      {label && (
        <label className="dakshin-label ml-2 mb-0">
          {label}
        </label>
      )}
    </div>
    {error && (
      <p className="dakshin-form-error">{error}</p>
    )}
  </div>
);

// Radio component
export const DakshinRadio = ({ 
  label, 
  error,
  options = [],
  name,
  className = "",
  ...props 
}) => (
  <div className="dakshin-form-group">
    {label && (
      <label className="dakshin-label">{label}</label>
    )}
    <div className="space-y-2">
      {options.map((option, index) => (
        <div key={index} className="flex items-center">
          <input 
            type="radio"
            name={name}
            value={option.value || option}
            className={`dakshin-radio ${className}`}
            {...props}
          />
          <label className="dakshin-label ml-2 mb-0">
            {option.label || option}
          </label>
        </div>
      ))}
    </div>
    {error && (
      <p className="dakshin-form-error">{error}</p>
    )}
  </div>
);

// Form group wrapper
export const DakshinFormGroup = ({ children, className = "" }) => (
  <div className={`dakshin-form-group ${className}`}>
    {children}
  </div>
);

/**
 * Specialized DakshinRehab form components
 */

// Appointment form fields
export const AppointmentServiceSelect = ({ value, onChange, error }) => (
  <DakshinSelect
    label="Select Service"
    required
    value={value}
    onChange={onChange}
    error={error}
    options={[
      { value: "sports-injury", label: "Sports Injury Rehabilitation" },
      { value: "neuro-physio", label: "Neuro Physiotherapy Rehab" },
      { value: "prosthetics-orthotics", label: "Prosthetics & Orthotics" },
      { value: "general-physio", label: "General Physiotherapy" },
      { value: "wellness", label: "Wellness Programs" },
    ]}
  />
);

// Phone number input with Indian format
export const DakshinPhoneInput = ({ value, onChange, error, ...props }) => (
  <DakshinInput
    label="Phone Number"
    type="tel"
    placeholder="+91 XXXXX XXXXX"
    value={value}
    onChange={onChange}
    error={error}
    required
    {...props}
  />
);

// Message/inquiry textarea
export const DakshinMessageInput = ({ value, onChange, error, ...props }) => (
  <DakshinTextarea
    label="Message"
    placeholder="Please describe your condition or inquiry..."
    value={value}
    onChange={onChange}
    error={error}
    rows={5}
    {...props}
  />
);

export default {
  DakshinInput,
  DakshinTextarea,
  DakshinSelect,
  DakshinCheckbox,
  DakshinRadio,
  DakshinFormGroup,
  AppointmentServiceSelect,
  DakshinPhoneInput,
  DakshinMessageInput,
};
