import React from "react";

/**
 * DakshinRehab Button Component
 * Provides consistent button styling with DakshinRehab branding
 * 
 * Usage Examples:
 * <DakshinButton variant="primary">Book Session</DakshinButton>
 * <DakshinButton variant="secondary" size="lg">Learn More</DakshinButton>
 * <DakshinButton variant="outline">Contact Us</DakshinButton>
 */
export const DakshinButton = ({ 
  children, 
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props 
}) => {
  const getVariantClasses = () => {
    switch(variant) {
      case "primary":
        return "bg-dakshin-primary hover:bg-dakshin-primary/90 text-white";
      case "secondary": 
        return "bg-dakshin-secondary hover:bg-dakshin-secondary/90 text-white";
      case "accent":
        return "bg-dakshin-accent hover:bg-dakshin-accent/90 text-white";
      case "outline":
        return "border-2 border-dakshin-primary text-dakshin-primary hover:bg-dakshin-primary hover:text-white bg-transparent";
      case "outline-accent":
        return "border-2 border-dakshin-accent text-dakshin-accent hover:bg-dakshin-accent hover:text-white bg-white";
      case "white":
        return "bg-white text-dakshin-accent hover:bg-dakshin-accent hover:text-white border-2 border-dakshin-accent";
      default:
        return "bg-dakshin-primary hover:bg-dakshin-primary/90 text-white";
    }
  };
  
  const getSizeClasses = () => {
    switch(size) {
      case "sm":
        return "px-4 py-2 text-sm min-w-32 h-10 leading-10";
      case "lg":
        return "px-8 py-4 text-lg min-w-48 h-16 leading-16";
      case "xl":
        return "px-10 py-5 text-xl min-w-56 h-20 leading-20";
      default: // md
        return "px-6 py-3 text-sm min-w-45 h-14 leading-14";
    }
  };
  
  const baseClasses = `
    font-semibold rounded-sm transition-all duration-400 
    inline-block cursor-pointer text-center border-none
    capitalize tracking-wide
    hover:shadow-lg transform hover:-translate-y-0.5
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none
  `.replace(/\s+/g, ' ').trim();
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";
  
  return (
    <button 
      className={`${baseClasses} ${getVariantClasses()} ${getSizeClasses()} ${disabledClasses} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

/**
 * Preset button components for common DakshinRehab use cases
 */

// Primary action button (Book Session, Contact Us, etc.)
export const DakshinPrimaryButton = ({ children, ...props }) => (
  <DakshinButton variant="primary" {...props}>
    {children}
  </DakshinButton>
);

// Secondary action button (Learn More, View Services, etc.)  
export const DakshinSecondaryButton = ({ children, ...props }) => (
  <DakshinButton variant="secondary" {...props}>
    {children}
  </DakshinButton>
);

// Accent button for special actions
export const DakshinAccentButton = ({ children, ...props }) => (
  <DakshinButton variant="accent" {...props}>
    {children}
  </DakshinButton>
);

// Outline button for subtle actions
export const DakshinOutlineButton = ({ children, ...props }) => (
  <DakshinButton variant="outline" {...props}>
    {children}
  </DakshinButton>
);

/**
 * Specialized DakshinRehab buttons with predefined text and actions
 */

// Book session button (most common CTA)
export const BookSessionButton = ({ onClick, className = "", ...props }) => (
  <DakshinButton 
    variant="accent" 
    size="lg"
    onClick={onClick}
    className={`font-bold ${className}`}
    {...props}
  >
    Book Session
  </DakshinButton>
);

// Contact button
export const ContactButton = ({ onClick, className = "", ...props }) => (
  <DakshinButton 
    variant="primary"
    onClick={onClick}
    className={className}
    {...props}
  >
    Contact DakshinRehab
  </DakshinButton>
);

// Learn more button
export const LearnMoreButton = ({ onClick, className = "", ...props }) => (
  <DakshinButton 
    variant="outline"
    onClick={onClick}
    className={className}
    {...props}
  >
    Learn More About Treatment
  </DakshinButton>
);

export default DakshinButton;
