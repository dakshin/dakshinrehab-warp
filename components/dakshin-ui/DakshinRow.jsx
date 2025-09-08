import React from "react";

/**
 * DakshinRehab Row Component  
 * Replaces Bootstrap's .row class with Tailwind equivalent
 * 
 * Bootstrap: <div className="flex flex-wrap -mx-3">
 * Tailwind: <DakshinRow>
 */
export const DakshinRow = ({ 
  children, 
  className = "",
  noGutters = false 
}) => {
  const baseClasses = noGutters 
    ? "flex flex-wrap" // no gutters
    : "flex flex-wrap -mx-3"; // with gutters
    
  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};

export default DakshinRow;
