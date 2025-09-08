# DakshinRehab Font Alternatives

## Current Implementation (Just Applied)
**Headings:** Rajdhani
**Body:** Inter
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Rajdhani:wght@400;500;600;700&display=swap');
```

## Alternative 1: Camera Plain Variable + Inter
**Headings:** Camera Plain Variable  
**Body:** Inter
```css
/* Note: Camera Plain Variable requires purchasing/licensing from Phantom Foundry */
@import url('path-to-camera-plain-variable');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

## Alternative 2: System Font Stack (Performance Optimized)
**Headings:** Rajdhani (keep current)
**Body:** System Fonts
```css
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap');

/* In tailwind.config.js */
fontFamily: {
  'heading': ['Rajdhani', 'sans-serif'],
  'body': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
}
```

## Alternative 3: Helvetica + Modern Stack
**Headings:** Rajdhani (keep current)
**Body:** Helvetica Now / SF Pro / System
```css
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap');

/* In tailwind.config.js */
fontFamily: {
  'heading': ['Rajdhani', 'sans-serif'],
  'body': ['-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Helvetica', 'sans-serif'],
}
```

## Why Inter is Perfect for Healthcare
✅ **Excellent legibility** - Medical content needs clarity
✅ **Professional appearance** - Trusted by healthcare sites
✅ **Great for small text** - Perfect for detailed FAQ content
✅ **Variable font support** - Optimized loading
✅ **Wide language support** - Telugu/Hindi support for local patients
✅ **Screen optimized** - Better than Helvetica on screens
✅ **Free and reliable** - Google Fonts hosting

## Implementation Notes
- Inter has better readability than Public Sans
- Rajdhani remains perfect for headings/display text
- Line height adjusted from 1.78 to 1.6 for Inter's optimal spacing
- FAQ content will be much more readable now
- Maintains DakshinRehab brand consistency
