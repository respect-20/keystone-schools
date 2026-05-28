# 🚀 Keystone Schools Website - Quick Start Guide

Welcome! This guide will help you get the Keystone Schools website up and running in minutes.

## What You're Getting

A complete, modern website for Keystone Schools including:
- ✅ Responsive homepage with all sections
- ✅ Online registration system (4-step form)
- ✅ Beautiful animations and transitions
- ✅ Mobile-optimized design
- ✅ Contact information and links
- ✅ Testimonials section
- ✅ Program showcase (Form 1-4)
- ✅ Features and benefits section

## Prerequisites

Before starting, make sure you have:
1. **Node.js** (version 14 or higher) - Download from https://nodejs.org
2. **npm** (comes with Node.js)
3. **A text editor** - VS Code recommended: https://code.visualstudio.com
4. **Git** (optional but recommended) - https://git-scm.com

### Verify Installation

Open terminal/command prompt and run:
```bash
node --version
npm --version
```

You should see version numbers for both.

---

## Installation Steps

### Step 1: Extract the Website Files

1. Unzip the `keystone-schools-website.zip` file
2. Open the folder in your text editor (VS Code recommended)

### Step 2: Install Dependencies

1. Open terminal/command prompt in the project folder
2. Run:
   ```bash
   npm install
   ```
   This will install all required packages (this may take 2-3 minutes)

### Step 3: Start Development Server

Run:
```bash
npm run dev
```

You should see:
```
ready - started server on 0.0.0.0:3000
```

### Step 4: View the Website

Open your browser and go to:
```
http://localhost:3000
```

**Congratulations!** Your website is now running! 🎉

---

## Customizing Your Website

### 1. Update School Information

**File: `components/Footer.js`**

Find and update:
```javascript
- Phone: Change "+263 773 000 000"
- Email: Change "info@keystoneschools.co.zw"
- Address: Change "123 Education Boulevard, Harare, Zimbabwe"
```

### 2. Update About Section

**File: `components/About.js`**

- Change school description text
- Update statistics (students, teachers, pass rate)

### 3. Update Programs

**File: `components/Programs.js`**

- Update Form 1-4 descriptions
- Change subjects for each form
- Modify focus areas

### 4. Update Testimonials

**File: `components/Testimonials.js`**

Replace testimonials with real student/parent feedback:
```javascript
{
  name: 'Student Name',
  role: 'Form X Student',
  image: '👩‍🎓', // Keep as emoji or add real photo
  content: 'Their feedback here...',
  rating: 5,
},
```

### 5. Add Your Logo

When ready, save your Keystone Schools logo as:
```
public/logo.png
```

Then update `Navigation.js` to use it:
```javascript
<Image src="/logo.png" width={40} height={40} alt="Keystone Schools" />
```

### 6. Change Brand Colors

**File: `tailwind.config.js`**

```javascript
colors: {
  primary: '#DC143C',      // Red - Change this
  secondary: '#1a1a1a',    // Black - Change this
  accent: '#FFD700',       // Gold - Change this
}
```

---

## Key Features Explained

### 📋 Online Registration System

- Located in `components/RegistrationModal.js`
- 4-step form process for student enrollment
- Form validation built-in
- Submits to `/api/register` endpoint
- Can be connected to your backend

**To connect to your backend:**
1. Edit `pages/api/register.js`
2. Change the endpoint URL to your server
3. Add authentication if needed

### 🎨 Beautiful Components

All components are in the `components/` folder:
- **Navigation.js** - Header with navigation
- **Hero.js** - Main banner section
- **About.js** - School information
- **Programs.js** - Form 1-4 courses
- **Features.js** - Why choose us section
- **Testimonials.js** - Student/parent feedback
- **RegistrationCTA.js** - Call to action
- **Footer.js** - Bottom section with links

### 📱 Responsive Design

The site automatically adapts to:
- Mobile phones (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

---

## Building for Production

When you're ready to launch:

### Step 1: Build the Project

```bash
npm run build
```

This creates an optimized version for production.

### Step 2: Test Production Build

```bash
npm start
```

Visit `http://localhost:3000` to test.

### Step 3: Deploy to the Web

**Option A: Vercel (Recommended)**
1. Go to https://vercel.com
2. Sign up for free
3. Click "Import Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Your site is live!

**Option B: Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Option C: Standard Hosting**
Contact your hosting provider and upload the `.next` folder via FTP.

---

## Common Tasks

### Add a New Section

1. Create new file in `components/` folder
2. Import in `pages/index.js`
3. Add between other sections

Example:
```javascript
import MyNewSection from '../components/MyNewSection';

export default function Home() {
  return (
    <div>
      {/* Other sections... */}
      <MyNewSection />
    </div>
  );
}
```

### Change Fonts

**File: `pages/index.js`**

The fonts are loaded from Google Fonts. To change:
```javascript
// Find this line:
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

// Replace with your preferred fonts from: https://fonts.google.com
```

### Add Images

1. Create `public/` folder if it doesn't exist
2. Add your images there
3. Use them like:
```javascript
<img src="/image-name.jpg" alt="Description" />
```

### Troubleshooting

**Issue: Port 3000 already in use**
```bash
# Kill process on port 3000, or use different port:
npm run dev -- --p 3001
```

**Issue: Module not found**
```bash
# Reinstall dependencies:
rm -rf node_modules package-lock.json
npm install
```

**Issue: Styles not loading**
```bash
# Clear Next.js cache:
rm -rf .next
npm run dev
```

---

## File Structure Explained

```
keystone-schools-website/
├── pages/                    # Page components
│   ├── index.js             # Main homepage
│   ├── _app.js              # App wrapper
│   └── api/register.js      # Registration API
├── components/              # Reusable components
│   ├── Navigation.js
│   ├── Hero.js
│   ├── About.js
│   ├── Programs.js
│   ├── Features.js
│   ├── Testimonials.js
│   ├── RegistrationCTA.js
│   ├── RegistrationModal.js
│   └── Footer.js
├── styles/                  # CSS files
│   └── globals.css
├── public/                  # Static files (images, etc)
├── package.json            # Project dependencies
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS config
└── README.md               # Full documentation
```

---

## Next Steps

1. ✅ Install and run the website locally
2. ✅ Customize with your school information
3. ✅ Test all features (especially registration form)
4. ✅ Add your logo and school photos
5. ✅ Update testimonials with real feedback
6. ✅ Deploy to the web (Vercel, Netlify, or your host)
7. ✅ Set up domain name
8. ✅ Test on mobile devices
9. ✅ Share with parents and students!

---

## Getting Help

**Next.js Documentation:** https://nextjs.org/docs
**Tailwind CSS:** https://tailwindcss.com/docs
**React:** https://react.dev

**Local Support:**
- Contact info@keystoneschools.co.zw
- Phone: +263 773 000 000

---

## Maintenance Checklist

- [ ] Update news/announcements regularly
- [ ] Add new student testimonials quarterly
- [ ] Keep school information current
- [ ] Monitor registration submissions
- [ ] Update academic calendar
- [ ] Check all links work
- [ ] Test on different devices monthly
- [ ] Keep dependencies updated

---

## Congratulations! 🎓

Your Keystone Schools website is ready! 

For questions, refer to the full README.md file or contact your technical support.

**Happy launching!**

---

**Version:** 1.0.0
**Last Updated:** May 2026
**Built for:** Keystone Schools
