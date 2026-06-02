# Keystone Schools Website — Full Rebuild Brief
## Everything a developer needs to recreate this site from scratch

---

## 1. WHAT THE SITE IS

A marketing and admissions website for **Keystone Schools**, a secondary school in Mutare, Zimbabwe. It is a single-page scrolling website with a registration popup form. There is no login, no database, and no admin panel. The site collects student registrations and sends them via WhatsApp and email.

---

## 2. TECH STACK

- **Framework:** Next.js 14 (Pages Router — not App Router)
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion 10
- **Icons:** react-icons (HeroIcons set `hi` and FontAwesome set `fa`)
- **Language:** JavaScript (no TypeScript)
- **Node.js version required:** 18.17.0 or higher

**package.json dependencies:**
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "^14.0.0",
    "axios": "^1.6.0",
    "framer-motion": "^10.16.0",
    "react-icons": "^4.12.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.3.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

**Scripts:**
```
npm run dev    → development server
npm run build  → production build
npm run start  → serve production build
```

---

## 3. BRAND & DESIGN

### Colours (Tailwind custom tokens)
| Token | Hex | Usage |
|---|---|---|
| `primary` | `#DC143C` | Crimson red — buttons, accents, highlights, CTA backgrounds |
| `secondary` | `#1a1a1a` | Near-black — footer background, headings, nav text |
| `accent` | `#FFD700` | Gold — occasional decorative use |
| `light` | `#F5F5F5` | Off-white — alternating section backgrounds |

### Fonts
- **Headings:** Playfair Display (700, 800 weight) — loaded from Google Fonts
- **Body/UI:** Inter (400, 500, 600, 700 weight) — loaded from Google Fonts

Font link tag in `<Head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

Tailwind font families:
```js
fontFamily: {
  display: ['Playfair Display', 'serif'],
  body: ['Inter', 'sans-serif'],
}
```

### Logo
SVG file at `/public/logo.svg`. Displayed at `h-10 w-10` in the navigation bar alongside the text "KEYSTONE" / "SCHOOLS" stacked in red.

### Hero background photo
File at `/public/hero-students.jpg` — a photo of students. Displayed full-screen with a dark overlay (`bg-secondary/70`) so text is readable.

---

## 4. PAGE STRUCTURE

The main page (`pages/index.js`) renders all sections in this order:

```
Navigation (fixed top bar)
↓
Hero (full screen)
↓
About
↓
Programs
↓
Features (Why Choose Us)
↓
Testimonials
↓
[Gallery — currently commented out, no photos yet]
[News — currently commented out, no content yet]
[Events Calendar — currently commented out, no content yet]
↓
FAQ
↓
Newsletter
↓
Registration CTA (banner)
↓
Footer
↓
FloatingWhatsApp (fixed bottom-right corner)
↓
RegistrationModal (popup, triggered by CTA buttons)
```

Additional pages:
- `/faculty` — faculty page (exists but nav link is hidden)
- `/privacy-policy`
- `/terms-of-service`
- `/404`

---

## 5. NAVIGATION BAR

**Fixed to top of page.** Background starts as white/semi-transparent, gains a shadow on scroll.

**Logo:** SVG icon + stacked text "KEYSTONE / SCHOOLS" in crimson red (`#DC143C`)

**Nav Links:**
- About → scrolls to `#about`
- Programs → scrolls to `#programs`
- Features → scrolls to `#features`
- Testimonials → scrolls to `#testimonials`
- ~~Faculty → `/faculty`~~ (commented out — page exists but no photos yet)
- Contact → scrolls to `#contact` (footer)

**Language switcher dropdown** (UI only — no actual translation implemented):
- EN 🇬🇧
- SN 🇿🇼
- ND 🇿🇼
Selection is saved to `localStorage`.

**Register button** — crimson red pill button, opens the Registration Modal popup.

**Mobile:** Hamburger menu icon (HiMenu / HiX icons), collapses into vertical list.

---

## 6. HERO SECTION

Full-screen section. Background: `/public/hero-students.jpg` with a `bg-secondary/70` dark overlay.

**Badge (top):**
> 🏆 Award-Winning Institution Since 2025

**Main heading (H1):**
> Excellence in **Education**
> Shapes Tomorrow's Leaders

("Education" is in crimson red `text-primary`)

**Subheading paragraph:**
> Keystone Schools provides world-class education for Forms 1-4 with innovative teaching methods, modern facilities, and a commitment to developing well-rounded individuals.

**Two CTA buttons:**
1. **"Register Now"** (crimson red, filled) → opens Registration Modal
2. **"Learn More"** (white border, transparent) → scrolls to `#about`

**Stats row (3 columns):**
| Number | Label |
|---|---|
| 500+ | Students Enrolled |
| 50+ | Expert Teachers |
| 98% | Pass Rate |

**Scroll indicator:** Animated bouncing ↓ arrow at bottom center, clicks scroll to `#about`.

All elements animate in with Framer Motion (stagger fade-up from below).

---

## 7. ABOUT SECTION

**Section ID:** `about`
**Background:** white

**Label (small caps above heading):**
> About Keystone Schools

**Heading (H2):**
> Building Foundations for Success

**Two body paragraphs:**

Paragraph 1:
> Since our establishment, Keystone Schools has been a beacon of educational excellence, committed to nurturing young minds and preparing them for the challenges of tomorrow. Our comprehensive curriculum combines academic rigour with practical skills development, ensuring every student leaves equipped not just with knowledge, but with the character and confidence to excel in whatever path they choose.

Paragraph 2:
> We believe in fostering a learning environment where every student can thrive, discover their potential, and develop the confidence to lead. Our dedicated team of educators is passionate about making a lasting difference in every student's life — building strong academic foundations while nurturing creativity, critical thinking, and a love for lifelong learning.

**Features checklist (6 items with red tick icons):**
- State-of-the-art facilities and technology
- Experienced and qualified faculty members
- Student-centered learning approach
- Holistic development programs
- Strong academic standards
- Safe and supportive environment

**Animated stats (3 cards, numbers count up when scrolled into view):**
| Number | Label |
|---|---|
| 14+ | Years of Excellence |
| 500+ | Successful Graduates |
| 5★ | Parent Satisfaction |

---

## 8. PROGRAMS SECTION

**Section ID:** `programs`
**Background:** gradient `from-light to-white`

**Label:**
> Our Programs

**Heading:**
> Comprehensive Curriculum for Forms 1-4

**Subtext:**
> Each form level is designed to progressively develop students academically, socially, and personally.

**4 Program cards (2×2 grid), each has:**
- Red top bar gradient
- Icon (HiAcademicCap for Form 1, HiLightBulb for Form 2, HiBadgeCheck for Form 3 & 4)
- Form level label (red, uppercase)
- Title
- Description
- Focus box (red-tinted background)
- Subject tags (grey pill chips)

### Form 1 — Foundation Year
**Description:** Establishing core academic skills and social integration
**Focus:** Building strong fundamentals and classroom adaptation
**Subjects:** Mathematics, English, Science, Social Studies, Languages, Arts

### Form 2 — Development Year
**Description:** Deepening knowledge and exploring specialization pathways
**Focus:** Developing critical thinking and subject mastery
**Subjects:** Advanced Math, Literature, Physics, Chemistry, Geography, History

### Form 3 — Specialization Year
**Description:** Focusing on specific streams and preparing for national exams
**Focus:** Examination preparation and career guidance
**Subjects:** Algebra, Calculus, Biology, Economics, Computer Studies

### Form 4 — Excellence Year
**Description:** Final preparation for national examinations and university entry
**Focus:** University readiness and academic excellence
**Subjects:** Advanced Topics, Project Work, Practical Exams, Revision

Cards have hover effect: lift up + deeper shadow.

---

## 9. FEATURES SECTION (WHY CHOOSE KEYSTONE)

**Section ID:** `features`
**Background:** `bg-secondary` (near-black) — dark section with white text

**Label:**
> Why Choose Keystone

**Heading:**
> Excellence in Every Aspect

**Subtext:**
> We provide comprehensive educational services designed to nurture talented minds.

**6 feature cards in a 3-column grid (dark glass-morphism cards):**

| Icon | Title | Description | Scroll-to link |
|---|---|---|---|
| HiDesktopComputer | Modern Technology | Equipped with latest learning tools, smart classrooms, and computer laboratories for practical skills. | Programs |
| HiUserGroup | Expert Faculty | Highly qualified teachers with years of experience and continuous professional development. | About |
| HiLibrary | Extensive Resources | Well-stocked library, digital databases, and learning materials supporting all subjects. | About |
| HiSparkles | Co-Curricular Activities | Sports, clubs, debate, drama, and cultural activities promoting all-round development. | Programs |
| HiGlobeAlt | Global Perspective | International curriculum standards and partnerships with educational institutions worldwide. | About |
| HiHeart | Student Support | Counseling services, mentorship programs, and personalized academic guidance for every student. | Contact |

Each card has: icon in a red-tinted box, title, description, "Learn more →" link (red). Cards have hover: lift + border turns red.

---

## 10. TESTIMONIALS SECTION

**Section ID:** `testimonials`
**Background:** `bg-light` (off-white)

**Label:**
> Success Stories

**Heading:**
> What Students & Parents Say

**Subtext:**
> Real voices from our Keystone community sharing their experiences and achievements.

**4 testimonial cards in a 2×2 grid:**

**Card 1:**
- Name: Sarah Mupuruki
- Role: Form 4 Student
- Avatar: 👩‍🎓
- Stars: 5
- Quote: "Keystone Schools transformed my academic journey. The teachers are incredibly supportive and the facilities are world-class. I'm confident about my university prospects!"

**Card 2:**
- Name: David Chikomo
- Role: Parent
- Avatar: 👨‍💼
- Stars: 5
- Quote: "We're impressed with the holistic development approach. Our son has grown not just academically but also in confidence and leadership skills."

**Card 3:**
- Name: Zainab Hassan
- Role: Form 2 Student
- Avatar: 👩‍🎓
- Stars: 5
- Quote: "The school environment is so inclusive and welcoming. I love the mix of academics, sports, and cultural activities. Every day is a learning experience!"

**Card 4:**
- Name: Catherine Mukarati
- Role: Parent
- Avatar: 👩‍💼
- Stars: 5
- Quote: "The communication from school is excellent, and the counselors are always available. Our daughter has made wonderful friendships and is thriving."

**Bottom CTA banner (red-tinted):**
> Join hundreds of satisfied students and parents at Keystone Schools
> Be part of our success story

---

## 11. GALLERY SECTION (currently hidden — no photos yet)

**Section ID:** `gallery`
**Background:** white

**Label:**
> Our Campus

**Heading:**
> Campus Gallery

**Layout:** Masonry grid (3 columns). When photos are ready, replace the coloured placeholder boxes with real photos.

**9 placeholder items with labels:**
1. Science Lab
2. Library
3. Sports Field
4. Classrooms
5. Computer Lab
6. Assembly Hall
7. Art Room
8. Dining Hall
9. School Garden

Each item has a hover overlay that darkens with the label in white. To re-enable: uncomment `<Gallery />` in `pages/index.js`.

---

## 12. NEWS & ANNOUNCEMENTS SECTION (currently hidden — no content yet)

**Section ID:** `news`
**Background:** `bg-gray-50`

**Label:**
> News & Announcements

**Heading:**
> Latest News & Announcements

**Layout:** 2×2 grid of expandable cards (click "Read More" to expand full article).

**4 news articles:**

**Article 1:**
- Date: May 15, 2025
- Title: 2025 Academic Year Term Dates Announced
- Excerpt: The school has confirmed the official term dates for the 2025 academic year in line with the Ministry of Primary and Secondary Education calendar.
- Full: Term 1 runs from 27 January to 4 April. Term 2 begins 6 May and ends 1 August. Term 3 starts 2 September and concludes 5 December. Parents are advised to ensure all fees are settled before the first day of each term. A full academic calendar including public holidays and examination windows is available from the school office or on our newsletter. We look forward to a productive and successful year.

**Article 2:**
- Date: April 28, 2025
- Title: Prize Giving Day 2025 — Save the Date
- Excerpt: Keystone Schools is proud to announce that our annual Prize Giving Ceremony will be held on Friday, 28 November 2025 at the school assembly hall.
- Full: The event will begin at 10:00 AM and all parents, guardians, and invited guests are warmly welcome to attend. The ceremony will celebrate academic excellence, sporting achievements, and outstanding contributions to school life. Students who have been nominated for awards will be notified two weeks before the event. Smart dress code is required for all attendees. Refreshments will be served after the ceremony.

**Article 3:**
- Date: April 10, 2025
- Title: New Sports Development Programme Launched
- Excerpt: We are excited to introduce our expanded sports programme for 2025, featuring new coaching partnerships and improved facilities for football, netball, and athletics.
- Full: The programme is a result of a new partnership with Zimbabwe Schools Sports Association and brings qualified coaches to work alongside our dedicated PE department. Football, netball, volleyball, and athletics have all received dedicated training schedules. The school has also resurfaced the athletics track and erected new goal posts on the main field. Inter-school competitions will begin in Term 2. All Form 1–4 students are encouraged to attend trials.

**Article 4:**
- Date: March 20, 2025
- Title: Outstanding ZIMSEC O-Level Results Achievement
- Excerpt: Keystone Schools celebrates yet another year of exceptional ZIMSEC Ordinary Level results, with 94% of candidates achieving five or more subjects.
- Full: The 2024 November ZIMSEC examinations delivered our best-ever results. 94% of Form 4 candidates passed five or more subjects at grade C or better. Mathematics and English Language continued to be areas of strength, with pass rates of 91% and 97% respectively. Top student Tatenda Moyo achieved 10As and has been offered a scholarship to a leading A-Level college. The school thanks all teachers, students, and parents for their dedication throughout the year.

To re-enable: uncomment `<News />` in `pages/index.js`.

---

## 13. SCHOOL CALENDAR / EVENTS SECTION (currently hidden)

**Section ID:** `events`
**Background:** white

**Label:**
> School Calendar

**Heading:**
> Upcoming Events

**Layout:** Vertical timeline list. Each event has a red left-side block showing the month abbreviation and day number, then a content area on the right with name, description, and location.

**6 events:**

**Event 1:**
- Date: June 7, 2025 (JUN 07)
- Name: Open Day
- Description: Prospective students and their parents are invited to tour the campus, meet our teachers, and learn about our programmes and admission process.
- Location: Main Campus, Harare

**Event 2:**
- Date: May 6, 2025 (MAY 06)
- Name: Term 2 Begins
- Description: All students report for the start of Term 2. Boarding students should arrive by 5:00 PM on Sunday 5 May. Full uniform is required on day one.
- Location: Keystone Schools Campus

**Event 3:**
- Date: July 19, 2025 (JUL 19)
- Name: Sports Day 2025
- Description: Our annual inter-house sports day featuring athletics, football, netball, and swimming competitions. Parents and family are welcome to attend and cheer.
- Location: School Sports Grounds

**Event 4:**
- Date: July 26, 2025 (JUL 26)
- Name: Parent-Teacher Meeting
- Description: Mandatory meetings between parents/guardians and class teachers to discuss student progress, academic reports, and support strategies for Term 3.
- Location: School Classrooms

**Event 5:**
- Date: November 28, 2025 (NOV 28)
- Name: Prize Giving Ceremony
- Description: Annual ceremony celebrating academic excellence, sporting achievement, and outstanding contributions to school life. All parents and guardians are invited.
- Location: Assembly Hall, Main Campus

**Event 6:**
- Date: October 6, 2025 (OCT 06)
- Name: ZIMSEC Exams Begin
- Description: Form 4 students begin their ZIMSEC Ordinary Level examinations. A full timetable will be distributed to candidates. Good luck to all our Form 4 students!
- Location: Examination Halls

To re-enable: uncomment `<EventsCalendar />` in `pages/index.js`.

---

## 14. FAQ SECTION

**Section ID:** `faq`
**Background:** `bg-gray-50`

**Label:**
> Got Questions?

**Heading:**
> Frequently Asked Questions

**Layout:** Accordion — click a question to expand/collapse the answer. One open at a time.

**8 Q&A pairs:**

**Q1:** What are the admission requirements for Keystone Schools?
**A1:** To be admitted to Keystone Schools, prospective students must submit a completed application form, certified copies of their Grade 7 results (for Form 1 entry) or previous form results, a birth certificate, and two passport-sized photographs. An entrance assessment may be required to place students in the appropriate academic stream. Applications are accepted on a rolling basis, subject to available spaces.

**Q2:** How and when are school fees paid?
**A2:** School fees are payable at the beginning of each term before or on the first day of school. We accept payment via bank transfer, ZIPIT, EcoCash, and cash at the school bursar's office. Fee statements are sent to parents at least two weeks before each term begins. Payment plans can be arranged in advance by contacting the bursar directly. Fees cover tuition, textbook hire, and basic stationery.

**Q3:** What are the term dates for the current academic year?
**A3:** The Keystone Schools academic year follows the Zimbabwe Ministry of Primary and Secondary Education calendar. Term 1 typically runs from late January to April, Term 2 from May to August, and Term 3 from September to December. Exact dates are confirmed each year and are communicated to parents via our newsletter and school notice board. Please check our Events Calendar or contact the school office for the most current dates.

**Q4:** Is there a school uniform and where can it be purchased?
**A4:** Yes, Keystone Schools has a compulsory uniform for all students. The uniform consists of a white shirt or blouse, grey trousers or skirt, a school blazer with the school crest, black shoes, and the school tie. Sports attire is also required for PE lessons and extra-curricular activities. Uniforms can be purchased from our approved supplier: Uniforms Plus on Samora Machel Avenue, Harare. A full uniform list is included in the welcome pack sent upon acceptance.

**Q5:** Does Keystone Schools offer boarding facilities?
**A5:** Yes, we offer modern boarding facilities for both boys and girls. Our boarding house provides a safe, structured, and nurturing environment with supervised study time every evening, nutritious meals, and 24-hour supervision by qualified house parents. Boarders have access to the school library, computer lab, and recreational facilities outside class hours. Applications for boarding are separate from the academic application and places are limited, so early application is recommended.

**Q6:** What subject choices are available at Keystone Schools?
**A6:** At Form 3 and 4 level, students choose from a wide range of subjects in addition to the compulsory core. Core subjects include English Language, Mathematics, and Combined Science. Optional subjects include History, Geography, Commerce, Accounts, Art & Design, Computer Studies, Physical Education, Shona, and Ndebele. Subject selection is guided by academic performance, career aspirations, and teacher recommendations. Subject change requests must be submitted within the first two weeks of the new academic year.

**Q7:** How does Keystone Schools prepare students for ZIMSEC examinations?
**A7:** Our academic programme is fully aligned with the ZIMSEC curriculum and syllabus. Form 4 students write the Zimbabwe General Certificate of Education (ZGCE) Ordinary Level examinations. We run intensive revision programmes in Term 3, provide past examination papers, and offer additional tutoring sessions for students who need extra support. We have consistently achieved strong results and our students are well prepared for both ZIMSEC and HEXCO pathways. Our examination results are published annually.

**Q8:** What extra-curricular activities are available?
**A8:** Keystone Schools believes in holistic student development. We offer a wide range of extra-curricular activities including football, netball, volleyball, swimming, athletics, chess, debate and public speaking, drama and theatre, choir, visual arts, and environmental club. We also have an active student council and peer mentorship programme. Students are encouraged to participate in at least one activity per term. Inter-school competitions and cultural events are held throughout the year.

---

## 15. NEWSLETTER SECTION

**Background:** `bg-primary` (crimson red full-width band)

**Icon:** HiMail in a white circle

**Heading:**
> Stay Updated

**Subtext:**
> Subscribe to our newsletter for the latest school news, event announcements, and important updates delivered straight to your inbox.

**Form:** Email input field + "Subscribe" button (dark background).

**On submit:** Opens `mailto:info@keystoneschools.co.zw?subject=Newsletter Subscription&body=Please add [email] to your newsletter.`

**Success message:** "Thank you! Your subscription request has been sent." (with a green tick icon)

**Note:** No actual email list backend — currently uses mailto. Wire up to Mailchimp, Brevo, or similar for real use.

---

## 16. REGISTRATION CTA BANNER

**Background:** red gradient (`from-primary to-red-700`), decorative semi-transparent circles top-right and bottom-left.

**Heading:**
> Ready to Join Keystone Schools?

**Paragraph:**
> Take the first step towards academic excellence and personal growth. Our admissions team is ready to guide you through the enrollment process.

**Two buttons:**
1. **"Open Registration"** (white with red text) → opens Registration Modal
2. **"Contact Admissions"** (white border) → scrolls to `#contact` (footer)

**Small text below buttons:**
> 🎓 Early registration opens special admission discounts • 📞 Call us: +263 773 000 000

---

## 17. FOOTER

**Section ID:** `contact`
**Background:** `bg-secondary` (near-black)

**Top:** Google Maps embed (full width, 200px height). Currently uses placeholder coordinates for Mutare — replace with real Google Maps embed URL.

**3-column grid:**

**Column 1 — Quick Links:**
- About Us → `#about`
- Programs → `#programs`
- Why Choose Us → `#features`
- Testimonials → `#testimonials`

**Column 2 — Resources:**
- Academic Calendar → `mailto:info@keystoneschools.co.zw?subject=Academic Calendar Request`
- Student Portal → `mailto:info@keystoneschools.co.zw?subject=Student Portal Access`
- Policies → `/privacy-policy`
- Downloads → `mailto:info@keystoneschools.co.zw?subject=Downloads Request`

**Column 3 — Contact Us:**
- Phone: +263 771 824 701 (tel link)
- Email: info@keystoneschools.co.zw (mailto link)
- Address: Shop #2 Bvirindi Business Center, Mutare

**Bottom bar:**
- Copyright: © [year] Keystone Schools. All rights reserved.
- Social icons: Facebook, Twitter, Instagram (all link to `/keystoneschools` — update with real URLs)
- Legal links: Privacy Policy → `/privacy-policy` | Terms of Service → `/terms-of-service`

---

## 18. FLOATING WHATSAPP BUTTON

Fixed to bottom-right corner of every page. Animates in on load (spring bounce). Bobs up and down continuously. On hover shows a tooltip: **"Chat with us"**

**WhatsApp number:** +263 771 824 701
**Link:** `https://wa.me/263771824701`

Icon: FaWhatsapp (green circle, white icon).

---

## 19. REGISTRATION MODAL (POPUP)

Triggered by any "Register Now" / "Open Registration" button. Animated slide-in popup with dark backdrop.

**Header:** Red gradient bar — "Register for Keystone Schools" + X close button.

**4-step form with progress bar:**

### Step 1 — Student Information
Fields:
- First Name (required)
- Last Name (required)
- Date of Birth (required, date picker)
- Gender (required, dropdown: Male / Female)
- Applying for Form (required, dropdown: Form 1 / Form 2 / Form 3 / Form 4)
- Current School (optional, text)

### Step 2 — Parent/Guardian Information
Fields:
- Full Name (required)
- Email Address (required)
- Phone Number (required, placeholder: +263 773 000 000)
- Relation to Student (required, dropdown: Father / Mother / Guardian / Other)

### Step 3 — Contact Information
Fields:
- Street Address (required)
- City (required)
- Postal Code (optional)
- Reason for Applying (optional, textarea, placeholder: "Tell us why you're interested in Keystone Schools")
- Special Needs/Accommodations (optional, textarea, placeholder: "If any (optional)")
- Checkbox: "Subscribe to Keystone Schools newsletter for updates and news"

### Step 4 — Review
Shows a summary of all entered data. Disclaimer: "By clicking Submit Application, you agree that the information provided is accurate and complete."

### On Submit
Two things happen simultaneously:
1. **WhatsApp** — Opens `https://wa.me/263771824701` with a pre-formatted message containing all registration data (student info, parent info, address, additional details).
2. **Email** — Opens `mailto:info@keystoneschools.co.zw` with a formatted plain-text email body containing all the same data.

**Success screen (shown 3 seconds then modal closes):**
- Green tick icon
- Heading: "Registration Submitted!"
- Text: "Your application has been sent successfully."
- Green badge: "WhatsApp message sent to +263 771 824 701"
- Blue badge: "Email sent to info@keystoneschools.co.zw"
- Small text: "Our admissions team will contact you within 24 hours."

Navigation buttons: "Previous" (back), "Next" (advance), "Submit Application" (final step).

---

## 20. PRIVACY POLICY PAGE (`/privacy-policy`)

Standalone page with a simple dark nav bar (logo + "← Back to Home" link) and a plain footer.

**Title:** Privacy Policy
**Last updated:** May 2025

**11 sections:**
1. Introduction — commitment to privacy
2. Information We Collect — student ID info, parent details, contact info, academic info, technical data (IP, browser)
3. How We Use Your Information — process applications, communicate, maintain records, send newsletters, improve site, legal compliance
4. Sharing of Information — not sold to third parties; shared only with trusted service providers or when legally required
5. Data Security — appropriate measures; no guarantee of 100% security
6. Retention of Data — retained as long as necessary; student records kept for duration of enrolment + reasonable period after
7. Your Rights — access, correction, deletion, withdraw consent; contact info@keystoneschools.co.zw
8. Cookies — used to enhance browsing; can be disabled in browser
9. Children's Privacy — data of under-18s only collected with parental consent
10. Changes to This Policy — users notified of significant changes
11. Contact Us — Keystone Schools, 123 Education Boulevard, Harare, Zimbabwe / info@keystoneschools.co.zw / +263 773 000 000

*(Note: the address in this page still shows the old placeholder — update to Shop #2 Bvirindi Business Center, Mutare)*

---

## 21. TERMS OF SERVICE PAGE (`/terms-of-service`)

Same layout as Privacy Policy page.

**Title:** Terms of Service
**Last updated:** May 2025

**12 sections:**
1. Acceptance of Terms — using the site = agreement to terms
2. Use of the Website — no false info, no unauthorised access, no copying content, no spam/malware
3. Registration Applications — submission does not guarantee admission; school reserves right to accept or decline
4. Fees and Payments — communicated on admission; non-refundable unless stated in writing
5. Student Code of Conduct — respect students/staff/property; violations may result in suspension/expulsion
6. Intellectual Property — all site content owned by Keystone Schools; no reproduction without written consent
7. Third-Party Links — not responsible for external sites
8. Limitation of Liability — not liable for damages from use of site; provided "as is"
9. Privacy — governed by Privacy Policy (linked)
10. Modifications to Terms — terms may change; continued use = acceptance
11. Governing Law — laws of Zimbabwe; disputes in Zimbabwe courts
12. Contact Us — same contact details as above

---

## 22. CONTACT DETAILS (USE EVERYWHERE)

| Detail | Value |
|---|---|
| School name | Keystone Schools |
| Address | Shop #2 Bvirindi Business Center, Mutare |
| Phone | +263 771 824 701 |
| Email | info@keystoneschools.co.zw |
| WhatsApp | +263 771 824 701 (same number) |
| Facebook | https://facebook.com/keystoneschools |
| Twitter | https://twitter.com/keystoneschools |
| Instagram | https://instagram.com/keystoneschools |

---

## 23. ANIMATION STYLE

All animations use **Framer Motion**. Consistent pattern throughout:

- **Fade + slide up on scroll:** `initial={{ opacity: 0, y: 20 }}` → `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}`
- **Stagger children:** Parent has `staggerChildren: 0.1–0.2`, each child animates in sequence
- **Hover on cards:** `hover:-translate-y-2` (lift) + deeper shadow
- **Stats count-up:** Numbers animate from 0 to final value when the element scrolls into view (IntersectionObserver)
- **Modal:** Spring animation in, fade out. `type: 'spring', damping: 25, stiffness: 300`
- **WhatsApp button:** Bobs up and down `animate={{ y: [0, -6, 0] }}` on a 2-second infinite loop

---

## 24. THINGS STILL NEEDED (not built yet)

| Item | Detail |
|---|---|
| Real campus photos | For Gallery section (9 areas: Science Lab, Library, Sports Field, Classrooms, Computer Lab, Assembly Hall, Art Room, Dining Hall, School Garden) |
| Faculty page | Page file exists at `/pages/faculty.js` but needs real teacher profiles and photos |
| Google Maps embed | Replace placeholder iframe `src` in Footer with real Google Maps embed for Shop #2 Bvirindi Business Center, Mutare |
| Real social media links | Update Facebook/Twitter/Instagram URLs from placeholder `/keystoneschools` to real verified account URLs |
| Newsletter backend | Wire email input to Mailchimp, Brevo, or similar — currently just opens mailto |
| Registration backend | Optionally build a real backend API to store registrations instead of relying only on WhatsApp/email |
| Language switcher | EN/SN/ND switcher exists in nav but no translations — either implement i18n or remove the UI element |
| Update old address | The Privacy Policy and Terms of Service pages still say "123 Education Boulevard, Harare" — update to Mutare address |
