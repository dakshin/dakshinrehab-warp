# Service-Specific FAQ Implementation Guide

## Overview
This guide explains how to implement service-specific FAQs across DakshinRehab website pages using the enhanced FAQ component with targeted content.

## File Structure
```
/data/
  ├── service-faqs.js          # Service-specific FAQ data exports
/components/
  ├── faqs.js                  # Enhanced FAQ component (styled)
/pages/
  ├── services/
  │   ├── sports-injury.js     # Example service page
  ├── technology/
  │   ├── tecar-therapy.js     # Example technology page
/docs/
  ├── service-faqs-guide.md    # This documentation
```

## Implementation Steps

### 1. Create Service-Specific FAQ Data

In `/data/service-faqs.js`, create targeted FAQ datasets:

```javascript
export const yourServiceFAQs = [
  {
    id: 1,
    question: "Patient-focused question...",
    answer: "<div class='faq-answer'>...rich HTML content...</div>",
    show: true  // First FAQ typically open
  },
  // Add more FAQs...
];
```

### 2. Import and Use in Pages

In your service page:

```javascript
import FAQs from '../../components/faqs'
import { yourServiceFAQs } from '../../data/service-faqs'

export default function YourServicePage() {
  return (
    <Layout>
      {/* Page content */}
      <div id="faqs" className="bg-gray-50">
        <FAQs data={yourServiceFAQs} />
      </div>
    </Layout>
  )
}
```

## FAQ Content Structure

### HTML Template for Rich Answers
```html
<div class='faq-answer'>
  <p><strong>Opening statement</strong> with reassurance and key message.</p>
  
  <h6 class='text-primary font-semibold mt-4 mb-2'>🎯 Section Title:</h6>
  <ul class='list-disc pl-6 space-y-1'>
    <li><strong>Key Point</strong> - Detailed explanation</li>
    <li><strong>Another Point</strong> - More details</li>
  </ul>
  
  <h6 class='text-primary font-semibold mt-4 mb-2'>👥 Expert Team:</h6>
  <ul class='list-disc pl-6 space-y-1'>
    <li><strong>Dr. Name</strong> - Credentials and experience</li>
    <li><strong>Mr. Name</strong> - Specialization details</li>
  </ul>
  
  <p class='mt-4 bg-blue-50 p-3 rounded-lg'>
    <strong>💡 Key Takeaway:</strong> Motivating message with call-to-action!
  </p>
</div>
```

### Styling Classes Available
- `text-primary` - Brand primary color
- `font-semibold` - Semi-bold font weight
- `list-disc pl-6 space-y-1` - Styled bullet lists
- `bg-blue-50 p-3 rounded-lg` - Highlighted boxes
- `bg-green-50`, `bg-orange-50`, `bg-purple-50` - Color variants

## Existing Service FAQ Datasets

### Available Datasets in `/data/service-faqs.js`:

1. **`sportsInjuryFAQs`** - Sports injury rehabilitation
2. **`prostheticsFAQs`** - Prosthetics and orthotics
3. **`spineDecompressionFAQs`** - Spinal decompression therapy
4. **`tecartherapyFAQs`** - Tecar therapy technology
5. **`serviceFAQTemplate`** - Template for new services

### Creating New Service FAQs

1. **Choose relevant emojis** for visual appeal:
   - 🏃‍♂️ Sports/Movement
   - 🏥 Medical/Treatment
   - 🎯 Goals/Results
   - 💪 Strength/Recovery
   - ⚡ Technology/Speed
   - 👥 Team/People
   - 📊 Data/Statistics

2. **Structure content with headings** using `<h6>` tags
3. **Use bullet points** for easy scanning
4. **Include specific details** like timelines, success rates, team credentials
5. **End with action-oriented messages** in highlighted boxes

## Page Integration Examples

### Service Pages
- `/pages/services/sports-injury.js` - Complete implementation
- Import specific FAQ dataset
- Place FAQs after main content, before final CTA

### Technology Pages
- `/pages/technology/tecar-therapy.js` - Technology focus
- Emphasize how the technology works
- Include treatment benefits and conditions

### Standard Page Structure
```jsx
// Hero section
// Service/technology overview
// Benefits/features grid
// FAQ section with service-specific data
// Call-to-action section
```

## Brand Guidelines Integration

All FAQ content follows DakshinRehab brand guidelines:
- **Professional but approachable** tone
- **Expert credentials** prominently featured
- **Contact information** easily accessible
- **Specific timelines and success rates** when available
- **Emotional reassurance** for patient concerns

## SEO Benefits

Service-specific FAQs provide:
- **Targeted keywords** for each service/technology
- **Long-tail question matching** user search queries  
- **Rich content** improving page depth and relevance
- **Local optimization** with Hyderabad-specific references
- **Expert authority** demonstration through detailed answers

## Future Enhancements

### Planned Additions:
1. **Pediatric physiotherapy FAQs**
2. **Senior care and wellness FAQs**
3. **Post-surgical rehabilitation FAQs**
4. **Corporate wellness program FAQs**
5. **Insurance and payment FAQs**

### Technical Improvements:
1. **Dynamic FAQ loading** based on page context
2. **FAQ search functionality** 
3. **FAQ analytics** to track most useful questions
4. **Structured data markup** for rich snippets in search results

## Content Maintenance

### Regular Reviews:
- Update success rates and statistics quarterly
- Add new frequently asked questions from patient feedback
- Review and update doctor credentials and specializations
- Ensure contact information remains current
- Add seasonal content (sports seasons, wellness programs)

### Quality Standards:
- Each FAQ should provide **specific, actionable information**
- Answers should be **patient-focused and empathetic**
- Content should reflect **current medical practices and equipment**
- All claims should be **evidence-based and verifiable**

---

*For questions about implementing service-specific FAQs, refer to the enhanced FAQ component in `/components/faqs.js` and existing examples in the services and technology pages.*
