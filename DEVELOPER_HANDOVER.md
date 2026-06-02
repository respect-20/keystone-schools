# Keystone Schools Website — Developer Handover Notes

## What This Is

A marketing/admissions website for **Keystone Schools**, a secondary school in Mutare, Zimbabwe offering Forms 1–4 (aligned to the ZIMSEC O-Level curriculum). The site is a static-ish Next.js frontend — no database, no auth. Its primary job is to inform prospective parents and collect admissions enquiries.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (Pages Router) |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 10 |
| Icons | react-icons (HeroIcons + FontAwesome) |
| HTTP client | Axios (available, not heavily used yet) |
| Node.js required | **v18.17.0 or higher** (v14/v16 will fail) |

---

## Running Locally

```bash
# Requires Node 18+. If you use nvm:
nvm use 18

npm install
npm run dev        # → http://localhost:3000
npm run build      # production build
npm run start      # serve production build
```

---

## Project Structure

```
/
├── pages/
│   ├── index.js            ← Main single-page site (all sections)
│   ├── faculty.js          ← Faculty page (exists but nav link is hidden — no photos yet)
│   ├── privacy-policy.js
│   ├── terms-of-service.js
│   ├── 404.js
│   ├── _app.js
│   └── api/
│       └── register.js     ← Stub API endpoint for registration form submissions
│
├── components/             ← One file per section (see Section Map below)
├── public/
│   ├── hero-students.jpg   ← Hero background photo
│   └── logo.svg
├── styles/
│   └── globals.css
├── tailwind.config.js
└── next.config.js
```

---

## Section Map (index.js render order)

| Order | Component | Section heading | Status |
|---|---|---|---|
| 1 | `Navigation` | Top nav bar | Active |
| 2 | `Hero` | Full-screen hero with CTA | Active |
| 3 | `About` | About the school + animated stats | Active |
| 4 | `Programs` | Forms 1–4 programme cards | Active |
| 5 | `Features` | Why Choose Us (6 feature cards) | Active |
| 6 | `Testimonials` | Parent testimonials | Active |
| 7 | ~~`Gallery`~~ | Our Campus photo gallery | **Commented out — no photos yet** |
| 8 | ~~`News`~~ | News & Announcements | **Commented out — no content yet** |
| 9 | ~~`EventsCalendar`~~ | School Calendar / Upcoming Events | **Commented out — no content yet** |
| 10 | `FAQ` | Frequently Asked Questions | Active |
| 11 | `Newsletter` | Email newsletter sign-up | Active (front-end only, no backend wired) |
| 12 | `RegistrationCTA` | Enrol Now call-to-action banner | Active |
| 13 | `Footer` | Contact details, quick links, social links | Active |
| — | `FloatingWhatsApp` | Fixed WhatsApp chat button | Active (bottom-right corner) |
| — | `RegistrationModal` | Multi-step admissions registration form | Active (triggered by CTA buttons) |

To re-enable the commented-out sections, uncomment them in `pages/index.js`:
```jsx
<Gallery />
<News />
<EventsCalendar />
```

---

## Key Business Details (hardcoded in components)

| Detail | Value | Location |
|---|---|---|
| School address | Shop #2 Bvirindi Business Center, Mutare | `components/Footer.js:71` |
| Phone | +263 771 824 701 | `components/Footer.js:59`, `components/FloatingWhatsApp.js` |
| Email | info@keystoneschools.co.zw | `components/Footer.js:64`, `components/RegistrationModal.js` |
| WhatsApp link | https://wa.me/263771824701 | `components/FloatingWhatsApp.js` |
| Facebook | https://facebook.com/keystoneschools | `components/Footer.js` |
| Twitter | https://twitter.com/keystoneschools | `components/Footer.js` |
| Instagram | https://instagram.com/keystoneschools | `components/Footer.js` |
| Google Maps embed | Placeholder coordinates for Mutare | `components/Footer.js:13–23` — **needs real embed URL** |

---

## Brand / Design Tokens

Defined in `tailwind.config.js`:

```js
colors: {
  primary:   '#DC143C',   // crimson red — buttons, accents, CTA backgrounds
  secondary: '#1a1a1a',   // near-black — footer, headings
  accent:    '#FFD700',   // gold — occasional highlight
  light:     '#F5F5F5',   // off-white — alternating section backgrounds
}

fontFamily: {
  display: ['Playfair Display', 'serif'],   // headings
  body:    ['Inter', 'sans-serif'],         // body text
}
```

Fonts are loaded from Google Fonts in `pages/index.js` `<Head>`.

---

## Registration / Admissions Flow

1. User clicks any "Register" or "Enrol Now" button → opens `RegistrationModal`.
2. Modal is a multi-step form collecting:
   - Student details (name, DOB, current form, gender)
   - Parent/guardian details (name, relationship, email, phone)
   - Contact address (street, city, postal code)
   - Additional info (previous school, how they heard about us, special needs notes)
3. On submit, two things happen simultaneously:
   - **WhatsApp**: Opens `wa.me/263771824701` with a pre-filled message containing the registration data.
   - **Email**: Opens the user's mail client via a `mailto:info@keystoneschools.co.zw` link with the data in the body.
4. Neither submission goes to a real backend yet. The `pages/api/register.js` file is a stub with a `TODO` comment showing where to POST to a Laravel backend.

**To wire up a real backend:** replace the `mailto` + `wa.me` approach in `components/RegistrationModal.js` around line 95–170 with a `fetch`/`axios` POST to `pages/api/register.js`, which should then forward to the Laravel API at whatever URL is configured.

---

## Sections That Need Real Content Before Going Live

| Section | What's needed |
|---|---|
| `Gallery` (`components/Gallery.js`) | Real campus photos. Currently shows placeholder coloured boxes with labels (Science Lab, Library, Sports Field, etc.) |
| `News` (`components/News.js`) | Real news articles. Currently has 4 hardcoded dummy articles |
| `EventsCalendar` (`components/EventsCalendar.js`) | Real event dates. Currently has 3 hardcoded dummy events with past/placeholder dates |
| `faculty.js` page | Faculty profiles and photos. The page file exists but the nav link is commented out |
| Footer Google Maps embed | Replace the placeholder `iframe src` in `components/Footer.js` line 14 with a real Google Maps embed URL for the Mutare address |
| Social media links | Update Facebook/Twitter/Instagram URLs in `components/Footer.js` to the real school accounts |

---

## Newsletter Sign-up

`components/Newsletter.js` — front-end only. Submitting the email currently just sets a local success state and shows a confirmation message. No email is actually stored or sent anywhere. Wire this up to a mailing list provider (Mailchimp, Sendinblue, etc.) or a backend endpoint.

---

## Language Switcher

The `Navigation` component has a language selector (EN / SN / ND — English, Shona, Ndebele). It stores the choice in `localStorage` but **no actual translation logic exists**. All content is English only. This is a UI placeholder for future i18n work.

---

## Deployment

The project has a `.vercel` folder, meaning it has been linked to a Vercel project. To deploy:

```bash
npm install -g vercel
vercel          # follow prompts, or
vercel --prod   # deploy directly to production
```

For a plain static export (if you want to host on any server without Node):
```bash
npm run build
# Then serve the .next folder with a Node server (next start), or
# add "output: 'export'" to next.config.js for a fully static export
```

---

## Known Issues / Things To Fix

1. **Google Maps embed** — The coordinates in `Footer.js` are placeholders. Replace with a real embed from Google Maps for "Shop #2 Bvirindi Business Center, Mutare".
2. **No form backend** — Registration form submits via WhatsApp + mailto only. Real backend integration is needed for reliable data capture.
3. **No real images** — Gallery, Faculty page, and potentially the hero need real school photos. The hero currently uses `public/hero-students.jpg`.
4. **Social links** — Footer social icons link to generic `/keystoneschools` handles. Confirm real account URLs.
5. **Newsletter** — Email capture is not wired to any service.
6. **Language switcher** — Shows EN/SN/ND but does nothing. Either implement i18n or remove it.
