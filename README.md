# Keystone Schools Website

A modern, fully responsive website for Keystone Schools with online registration system, built with Next.js, React, and Tailwind CSS.

## Features

✨ **Modern Design**
- Beautiful, responsive layout that works on all devices
- Smooth animations and transitions using Framer Motion
- Professional color scheme matching school branding

📋 **Comprehensive Sections**
- Hero banner with compelling CTA
- About the school
- Programs (Form 1-4 curriculum)
- Features and benefits
- Student testimonials
- Online registration system

🎯 **Online Registration System**
- 4-step registration process
- Form validation
- Success confirmation
- Mobile-optimized

📱 **Responsive Design**
- Mobile-first approach
- Optimized for tablets and desktops
- Smooth mobile navigation

🚀 **Performance**
- Fast page load times
- Optimized images
- Minimal bundle size

## Tech Stack

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Backend**: Node.js API routes (can be connected to Laravel backend)

## Installation

### Prerequisites
- Node.js 14+ and npm installed
- Git installed

### Steps

1. **Clone the repository**
   ```bash
   cd keystone-schools-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## Project Structure

```
keystone-schools-website/
├── pages/
│   ├── index.js              # Homepage
│   ├── _app.js               # App wrapper
│   └── api/
│       └── register.js        # Registration API endpoint
├── components/
│   ├── Navigation.js          # Navigation bar
│   ├── Hero.js               # Hero section
│   ├── About.js              # About section
│   ├── Programs.js           # Programs section
│   ├── Features.js           # Features section
│   ├── Testimonials.js       # Testimonials section
│   ├── RegistrationCTA.js    # Registration CTA
│   ├── RegistrationModal.js  # Registration form modal
│   └── Footer.js             # Footer section
├── styles/
│   └── globals.css           # Global styles
├── package.json
├── next.config.js
└── tailwind.config.js
```

## Key Components

### Navigation
- Sticky header with responsive menu
- Mobile hamburger menu
- Quick register button

### Hero Section
- Eye-catching design
- Key statistics
- Strong call-to-action
- Animated entrance effects

### Programs Section
- Form 1-4 curriculum overview
- Key subjects for each form
- Focus areas and learning outcomes

### Registration Modal
- 4-step form process:
  1. Student Information
  2. Parent/Guardian Information
  3. Contact Information
  4. Review & Submit
- Full form validation
- Success confirmation

### Footer
- Contact information
- Quick links
- Social media links
- Legal links

## Configuration

### Update School Information

Edit the contact details in `components/Footer.js`:
```javascript
- Phone: +263 773 000 000
- Email: info@keystoneschools.co.zw
- Address: 123 Education Boulevard, Harare, Zimbabwe
```

### Customize Colors

Edit `tailwind.config.js` to change brand colors:
```javascript
colors: {
  primary: '#DC143C',      // Red
  secondary: '#1a1a1a',    // Black
  accent: '#FFD700',       // Gold
}
```

### Update Content

Replace placeholder text in each component with actual school information:
- About section description
- Program details
- Testimonials
- Features list

## API Integration

### Backend Setup (Laravel)

The registration form submits to `/api/register.js`. To connect to your Laravel backend:

1. **Update the API endpoint in `pages/api/register.js`:**
   ```javascript
   const response = await fetch('https://your-laravel-api.com/api/registrations', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer YOUR_TOKEN',
     },
     body: JSON.stringify(formData),
   });
   ```

2. **Create Laravel endpoint**
   ```php
   Route::post('/api/registrations', [RegistrationController::class, 'store']);
   ```

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Import your GitHub repository
   - Configure environment variables if needed
   - Deploy

### Deploy to Other Platforms

**Netlify:**
```bash
npm run build
npm install -g netlify-cli
netlify deploy --prod
```

**Standard Node.js Hosting:**
```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file for sensitive data:
```
NEXT_PUBLIC_API_URL=https://your-api.com
NEXT_PUBLIC_SCHOOL_EMAIL=info@keystoneschools.co.zw
NEXT_PUBLIC_SCHOOL_PHONE=+263773000000
```

## Customization

### Add New Pages

1. Create file in `pages/` directory
2. Import components as needed
3. Add navigation link in `Navigation.js`

### Modify Styles

- Global styles in `styles/globals.css`
- Tailwind utilities in components
- Component-specific styles using Tailwind classes

### Add More Features

Suggested additions:
- Blog section
- Photo gallery
- News/announcements
- Academic calendar
- Teacher profiles
- Parent portal
- Student testimonial video
- Virtual campus tour

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Optimization

- Images optimized with Next.js Image component
- Code splitting for faster load times
- CSS purging with Tailwind
- Lazy loading of components
- Minimal external dependencies

## SEO

- Meta tags configured in pages
- Semantic HTML structure
- Mobile-friendly design
- Fast page performance
- Structured data ready for implementation

## Maintenance

### Regular Updates
- Keep dependencies updated: `npm update`
- Monitor for security vulnerabilities
- Update school information regularly
- Add testimonials and updates periodically

### Analytics
- Add Google Analytics
- Monitor user engagement
- Track registration conversions
- Analyze traffic sources

## Support & Help

For technical issues:
1. Check Next.js documentation: https://nextjs.org/docs
2. Check Tailwind CSS docs: https://tailwindcss.com/docs
3. Check React documentation: https://react.dev

## License

This website template is provided as-is for Keystone Schools.

## Contact

For questions about this website:
- Email: info@keystoneschools.co.zw
- Phone: +263 773 000 000

---

**Version:** 1.0.0  
**Last Updated:** 2026  
**Built with ❤️ for Keystone Schools**
