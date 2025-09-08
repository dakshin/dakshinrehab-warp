import React from "react";

/**
 * DakshinRehab Container Component
 * Replaces Bootstrap's .container class with Tailwind equivalent
 * 
 * Bootstrap: <div className="container mx-auto px-4">
 * Tailwind: <DakshinContainer>
 */
export const DakshinContainer = ({ 
  children, 
  className = "",
  fluid = false 
}) => {
  const baseClasses = fluid 
    ? "w-full px-4" // container-fluid equivalent
    : "container mx-auto px-4"; // container equivalent
    
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};

export default DakshinContainer;
