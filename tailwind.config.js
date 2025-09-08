/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // DakshinRehab Brand Colors (from PROJECT-UI-UX-FOUNDATION.md)
      colors: {
        dakshin: {
          primary: '#1A3D7D',        // Medical trust blue - main brand
          secondary: '#2E8B57',      // Wellness green - secondary actions  
          accent: '#FF6B35',         // Sports energy orange - highlights
          neuro: '#6A5ACD',          // Neuro purple - specialty sections
          success: '#28a745',        // Success states
          warning: '#ffc107',        // Warning states
          danger: '#dc3545',         // Error states
          light: '#f8f9fa',          // Background light
          dark: '#343a40',           // Text dark
          text: '#4A4A4A',           // Body text
          'text-light': '#6c757d',   // Secondary text
        }
      },
      // DakshinRehab Typography
      fontFamily: {
        'heading': ['Rajdhani', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      // DakshinRehab Font Weights
      fontWeight: {
        'regular': '400',
        'medium': '500', 
        'semibold': '600',
        'bold': '700',
      },
      // DakshinRehab Font Sizes
      fontSize: {
        'xs': '12px',
        'sm': '14px',      // Base body text
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
      },
      // DakshinRehab Spacing (maintain existing design)
      spacing: {
        '18': '4.5rem',    // 72px
        '100': '25rem',    // 400px - for py-100 class
        '70': '17.5rem',   // 280px - for py-100-70
      },
      // DakshinRehab Container Sizes
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '540px',
          md: '720px', 
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px',
        }
      },
      // DakshinRehab Border Radius
      borderRadius: {
        'sm': '3px',   // Match existing button radius
        'md': '6px',
        'lg': '12px',
      },
      // DakshinRehab Shadows
      boxShadow: {
        'dakshin': '0 2px 10px rgba(26, 61, 125, 0.1)',
        'dakshin-lg': '0 8px 30px rgba(26, 61, 125, 0.15)',
      },
      // DakshinRehab Transitions
      transitionDuration: {
        '300': '300ms',   // Standard transition
        '400': '400ms',   // Button hover transition
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
