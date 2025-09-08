import React from "react";

/**
 * DakshinRehab Column Component
 * Replaces Bootstrap's col-* classes with Tailwind responsive widths
 * 
 * Usage Examples:
 * Bootstrap: <div className="w-full lg:w-1/2 px-3">
 * Tailwind: <DakshinCol lg={6} md={12}>
 * 
 * Bootstrap: <div className="w-full md:w-1/3 px-3">
 * Tailwind: <DakshinCol md={4}>
 */
export const DakshinCol = ({ 
  children, 
  xs = null,
  sm = null,
  md = null, 
  lg = null,
  xl = null,
  className = "" 
}) => {
  const getResponsiveClasses = () => {
    const classes = ["w-full"]; // Default to full width on mobile
    
    // Helper function to convert Bootstrap column number to Tailwind width
    const getWidthClass = (cols, prefix = "") => {
      if (!cols || cols === 12) return prefix ? `${prefix}w-full` : "w-full";
      
      switch(cols) {
        case 1: return prefix ? `${prefix}w-1/12` : "w-1/12";
        case 2: return prefix ? `${prefix}w-1/6` : "w-1/6";
        case 3: return prefix ? `${prefix}w-1/4` : "w-1/4";
        case 4: return prefix ? `${prefix}w-1/3` : "w-1/3";
        case 5: return prefix ? `${prefix}w-5/12` : "w-5/12";
        case 6: return prefix ? `${prefix}w-1/2` : "w-1/2";
        case 7: return prefix ? `${prefix}w-7/12` : "w-7/12";
        case 8: return prefix ? `${prefix}w-2/3` : "w-2/3";
        case 9: return prefix ? `${prefix}w-3/4` : "w-3/4";
        case 10: return prefix ? `${prefix}w-5/6` : "w-5/6";
        case 11: return prefix ? `${prefix}w-11/12` : "w-11/12";
        default: return prefix ? `${prefix}w-full` : "w-full";
      }
    };
    
    // Add responsive classes based on props
    if (xs) classes[0] = getWidthClass(xs); // Override default mobile
    if (sm) classes.push(getWidthClass(sm, "sm:"));
    if (md) classes.push(getWidthClass(md, "md:"));
    if (lg) classes.push(getWidthClass(lg, "lg:"));
    if (xl) classes.push(getWidthClass(xl, "xl:"));
    
    return classes.join(" ");
  };
  
  const responsiveClasses = getResponsiveClasses();
  const paddingClasses = "px-3"; // Bootstrap gutter equivalent
  
  return (
    <div className={`${responsiveClasses} ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
};

/**
 * Preset column components for common use cases
 */

// Half width on large screens, full on smaller
export const DakshinColHalf = ({ children, className = "" }) => (
  <DakshinCol lg={6} className={className}>
    {children}
  </DakshinCol>
);

// Third width on large screens, half on medium, full on small
export const DakshinColThird = ({ children, className = "" }) => (
  <DakshinCol lg={4} md={6} className={className}>
    {children}
  </DakshinCol>
);

// Quarter width on large, third on medium, half on small
export const DakshinColQuarter = ({ children, className = "" }) => (
  <DakshinCol lg={3} md={4} sm={6} className={className}>
    {children}
  </DakshinCol>
);

export default DakshinCol;
