/**
 * Bootstrap to Tailwind CSS Utility Class Mapping
 * DakshinRehab Project Conversion Reference
 * 
 * This mapping helps convert Bootstrap classes to Tailwind equivalents
 * while maintaining the same visual appearance and functionality.
 */

export const BOOTSTRAP_TO_TAILWIND = {
  // ==========================================
  // SPACING UTILITIES
  // ==========================================
  
  // Margin Bottom
  'mb-0': 'mb-0',
  'mb-1': 'mb-1',
  'mb-2': 'mb-2', 
  'mb-3': 'mb-3',
  'mb-4': 'mb-4',
  'mb-5': 'mb-5',
  
  // Margin Top  
  'mt-0': 'mt-0',
  'mt-1': 'mt-1',
  'mt-2': 'mt-2',
  'mt-3': 'mt-3', 
  'mt-4': 'mt-4',
  'mt-5': 'mt-5',
  
  // Margin Left
  'ml-0': 'ml-0',
  'ml-1': 'ml-1',
  'ml-2': 'ml-2',
  'ml-3': 'ml-3',
  'ml-4': 'ml-4', 
  'ml-5': 'ml-5',
  
  // Margin Right
  'mr-0': 'mr-0',
  'mr-1': 'mr-1',
  'mr-2': 'mr-2',
  'mr-3': 'mr-3',
  'mr-4': 'mr-4',
  'mr-5': 'mr-5',
  
  // Margin All Sides
  'm-0': 'm-0',
  'm-1': 'm-1', 
  'm-2': 'm-2',
  'm-3': 'm-3',
  'm-4': 'm-4',
  'm-5': 'm-5',
  
  // Padding
  'p-0': 'p-0',
  'p-1': 'p-1',
  'p-2': 'p-2',
  'p-3': 'p-3',
  'p-4': 'p-4',
  'p-5': 'p-5',
  
  // Padding Vertical/Horizontal
  'px-0': 'px-0', 'px-1': 'px-1', 'px-2': 'px-2', 'px-3': 'px-3', 'px-4': 'px-4', 'px-5': 'px-5',
  'py-0': 'py-0', 'py-1': 'py-1', 'py-2': 'py-2', 'py-3': 'py-3', 'py-4': 'py-4', 'py-5': 'py-5',
  
  // Custom DakshinRehab Spacing (keep legacy)
  'py-100': 'py-100',        // Custom 100px padding
  'py-100-70': 'py-100 pb-70', // Custom asymmetric padding
  
  // ==========================================
  // FLEXBOX UTILITIES
  // ==========================================
  
  // Display Flex
  'd-flex': 'flex',
  'd-inline-flex': 'inline-flex',
  
  // Justify Content  
  'justify-content-start': 'justify-start',
  'justify-content-end': 'justify-end',
  'justify-content-center': 'justify-center',
  'justify-content-between': 'justify-between',
  'justify-content-around': 'justify-around',
  'justify-content-evenly': 'justify-evenly',
  
  // Align Items
  'align-items-start': 'items-start',
  'align-items-end': 'items-end', 
  'align-items-center': 'items-center',
  'align-items-baseline': 'items-baseline',
  'align-items-stretch': 'items-stretch',
  
  // Align Self
  'align-self-start': 'self-start',
  'align-self-end': 'self-end',
  'align-self-center': 'self-center',
  'align-self-baseline': 'self-baseline',
  'align-self-stretch': 'self-stretch',
  
  // Flex Direction
  'flex-row': 'flex-row',
  'flex-row-reverse': 'flex-row-reverse',
  'flex-column': 'flex-col',
  'flex-column-reverse': 'flex-col-reverse',
  
  // Flex Wrap
  'flex-wrap': 'flex-wrap',
  'flex-nowrap': 'flex-nowrap',
  'flex-wrap-reverse': 'flex-wrap-reverse',
  
  // ==========================================
  // TEXT UTILITIES
  // ==========================================
  
  // Text Alignment
  'text-left': 'text-left',
  'text-center': 'text-center', 
  'text-right': 'text-right',
  'text-justify': 'text-justify',
  
  // Text Transform
  'text-lowercase': 'lowercase',
  'text-uppercase': 'uppercase',
  'text-capitalize': 'capitalize',
  
  // Font Weight
  'font-weight-light': 'font-light',
  'font-weight-normal': 'font-normal',
  'font-weight-bold': 'font-bold',
  'font-weight-bolder': 'font-extrabold',
  
  // Text Decoration
  'text-decoration-none': 'no-underline',
  'text-decoration-underline': 'underline',
  'text-decoration-line-through': 'line-through',
  
  // ==========================================
  // DISPLAY UTILITIES
  // ==========================================
  
  // Display Types
  'd-none': 'hidden',
  'd-inline': 'inline',
  'd-inline-block': 'inline-block', 
  'd-block': 'block',
  'd-table': 'table',
  'd-table-cell': 'table-cell',
  'd-table-row': 'table-row',
  
  // ==========================================
  // POSITION UTILITIES
  // ==========================================
  
  // Position
  'position-static': 'static',
  'position-relative': 'relative',
  'position-absolute': 'absolute',
  'position-fixed': 'fixed',
  'position-sticky': 'sticky',
  
  // ==========================================
  // RESPONSIVE UTILITIES (examples)
  // ==========================================
  
  // Responsive Display (Bootstrap -> Tailwind)
  'd-sm-none': 'sm:hidden',
  'd-md-block': 'md:block',
  'd-lg-flex': 'lg:flex',
  'd-xl-inline': 'xl:inline',
  
  // Responsive Text
  'text-sm-center': 'sm:text-center',
  'text-md-left': 'md:text-left',
  'text-lg-right': 'lg:text-right',
  
  // ==========================================
  // BACKGROUND & BORDER UTILITIES
  // ==========================================
  
  // Background Colors (basic)
  'bg-primary': 'bg-dakshin-primary',
  'bg-secondary': 'bg-dakshin-secondary', 
  'bg-success': 'bg-dakshin-success',
  'bg-warning': 'bg-dakshin-warning',
  'bg-danger': 'bg-dakshin-danger',
  'bg-light': 'bg-dakshin-light',
  'bg-dark': 'bg-dakshin-dark',
  'bg-white': 'bg-white',
  
  // Text Colors
  'text-primary': 'text-dakshin-primary',
  'text-secondary': 'text-dakshin-secondary',
  'text-success': 'text-dakshin-success', 
  'text-warning': 'text-dakshin-warning',
  'text-danger': 'text-dakshin-danger',
  'text-light': 'text-dakshin-light',
  'text-dark': 'text-dakshin-dark',
  'text-white': 'text-white',
  
  // Border
  'border': 'border',
  'border-0': 'border-0',
  'border-top': 'border-t',
  'border-bottom': 'border-b',
  'border-left': 'border-l',
  'border-right': 'border-r',
  
  // ==========================================
  // SIZE UTILITIES  
  // ==========================================
  
  // Width
  'w-25': 'w-1/4',
  'w-50': 'w-1/2', 
  'w-75': 'w-3/4',
  'w-100': 'w-full',
  'w-auto': 'w-auto',
  
  // Height
  'h-25': 'h-1/4',
  'h-50': 'h-1/2',
  'h-75': 'h-3/4', 
  'h-100': 'h-full',
  'h-auto': 'h-auto',
};

/**
 * Convert Bootstrap class to Tailwind equivalent
 * @param {string} bootstrapClass - Bootstrap class name
 * @returns {string} - Tailwind equivalent class
 */
export function convertBootstrapToTailwind(bootstrapClass) {
  return BOOTSTRAP_TO_TAILWIND[bootstrapClass] || bootstrapClass;
}

/**
 * Convert multiple Bootstrap classes to Tailwind equivalents
 * @param {string} classString - Space-separated Bootstrap classes
 * @returns {string} - Space-separated Tailwind classes
 */
export function convertClassString(classString) {
  return classString
    .split(' ')
    .map(cls => convertBootstrapToTailwind(cls.trim()))
    .join(' ');
}

/**
 * Priority conversion map (convert these first for high impact, low risk)
 */
export const PRIORITY_CONVERSIONS = {
  // Phase 2.1: Text utilities (Low Risk)
  TEXT: [
    'text-center', 'text-left', 'text-right',
    'text-uppercase', 'text-lowercase', 'text-capitalize'
  ],
  
  // Phase 2.2: Spacing utilities (Medium Risk)  
  SPACING: [
    'mb-1', 'mb-2', 'mb-3', 'mb-4', 'mb-5',
    'mt-1', 'mt-2', 'mt-3', 'mt-4', 'mt-5',
    'p-1', 'p-2', 'p-3', 'p-4', 'p-5'
  ],
  
  // Phase 2.3: Flex utilities (Medium Risk)
  FLEX: [
    'd-flex', 'justify-content-center', 'justify-content-between', 
    'align-items-center', 'align-items-start', 'align-items-end'
  ],
  
  // Phase 2.4: Display utilities (Low Risk)
  DISPLAY: [
    'd-none', 'd-block', 'd-inline', 'd-inline-block'
  ]
};

export default BOOTSTRAP_TO_TAILWIND;
