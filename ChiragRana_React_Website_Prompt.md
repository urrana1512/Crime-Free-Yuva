# MASTER PROMPT — CHIRAG RANA "CRIME FREE YUVA" WEBSITE
## Built in React (JSX) — Single File App
---

> **How to use:** Paste this entire prompt into Claude, ChatGPT-4o, or any AI code generator. It will produce a complete, production-ready React single-file JSX application with all sections, features, animations, and real content from Chirag Rana's documents.

---

## ═══════════════════════════════════════════════
## SYSTEM INSTRUCTION
## ═══════════════════════════════════════════════

You are an expert React developer and senior UI/UX designer. Build a complete, single-file React JSX application for my client "Chirag Rana" — a Crime Awareness Speaker and Motivator whose initiative is called "Crime Free Yuva" (Crime Free Youth). 

The entire application must be written in one JSX file using React with hooks (useState, useEffect, useRef, useCallback). Use Tailwind CSS utility classes for all styling PLUS inline styles and CSS-in-JS for complex animations. Import only from these allowed libraries: react, lucide-react, recharts. Use a default export for the root App component.

All content is REAL — sourced from the client's actual documents. Do not use lorem ipsum or placeholder content anywhere.

---

## ═══════════════════════════════════════════════
## SECTION 1 — CLIENT IDENTITY & MISSION
## ═══════════════════════════════════════════════

**Client Name:** Mr. Chirag Kishorbhai Rana  
**Initiative Name:** Crime Free Yuva (Crime Free Youth)  
**Tagline:** "Awareness is Freedom"  
**Sub-tagline:** "One mistake can destroy a life. But one session can save it."  
**Role:** Crime Awareness Speaker, Motivator, Mentor, Social Reformer  
**Location:** 39-465, Parasnagar-3, Sola Road, Naranpura, Ahmedabad – 380063, Gujarat  
**Phone / WhatsApp:** +91-84694-00794  
**Email 1:** chiragrana3399@gmail.com  
**Email 2:** ckrana3986@gmail.com  
**Seminar Duration:** 3 Hours per session  
**Seminar Name:** "Crime & Prison Seminar"  

**His Unique Story (CRITICAL — use this throughout the website):**
Chirag Rana completed a 17-year sentence and was released from Ahmedabad Central Prison in July 2025. During his time in prison, instead of giving up, he earned FIVE postgraduate degrees, recorded 900+ audiobooks for blind people, mentored 10,000+ inmates, and was awarded by the Governor of Gujarat. He is now on a mission to prevent youth from making the mistakes that cost him 17 years. He speaks from real, lived experience — not theory. This is what makes him uniquely credible and powerful as a speaker.

**Academic Qualifications:**
- M.A. (Gujarati)
- M.B.A. (Human Resources)
- M.A. (Political Science)
- M.Com. (Accounts & State)
- M.Sc. (Value Education & Spirituality)
- P.G. Diploma in Journalism
- B.A. (English)
- P.G. Diploma in Value Education & Spirituality

---

## ═══════════════════════════════════════════════
## SECTION 2 — DESIGN SYSTEM
## ═══════════════════════════════════════════════

### 2.1 THEME SYSTEM
Implement a fully working Dark/Light theme toggle. Store preference in localStorage under key "cfy_theme". Default is DARK. Toggle is in the navbar — a smooth pill switch with 🌙/☀️ icons.

ALL text, cards, inputs, backgrounds, borders must be perfectly readable and visually distinct in BOTH themes.

### 2.2 COLOR TOKENS (use CSS custom properties via inline style on <div id="root"> or :root)

```
DARK THEME:
  --bg-base:        #08090d
  --bg-surface:     #0e1018
  --bg-card:        #131720
  --bg-card-h:      #191f2e
  --text-head:      #eef0f8
  --text-body:      #8e97b2
  --text-muted:     #4a5070
  --red:            #e02020    ← Primary accent — CRIME RED
  --red-light:      #f03030
  --red-glow:       rgba(224,32,32,0.22)
  --gold:           #f0a500    ← Secondary accent — ACHIEVEMENT GOLD
  --gold-light:     #f5bc30
  --green:          #22c55e    ← WhatsApp / success
  --border:         rgba(255,255,255,0.06)
  --border-red:     rgba(224,32,32,0.35)
  --shadow:         0 12px 48px rgba(0,0,0,0.6)
  --nav-bg:         rgba(8,9,13,0.85)

LIGHT THEME:
  --bg-base:        #f2f0eb
  --bg-surface:     #e8e5de
  --bg-card:        #ffffff
  --bg-card-h:      #fdfaf5
  --text-head:      #0d0f14
  --text-body:      #3c4260
  --text-muted:     #8890a8
  --red:            #c01818
  --red-light:      #dc2626
  --red-glow:       rgba(192,24,24,0.1)
  --gold:           #c78800
  --gold-light:     #e09a00
  --green:          #16a34a
  --border:         rgba(0,0,0,0.07)
  --border-red:     rgba(192,24,24,0.25)
  --shadow:         0 8px 32px rgba(0,0,0,0.1)
  --nav-bg:         rgba(242,240,235,0.9)
```

### 2.3 TYPOGRAPHY

Import via @import in a <style> tag inside the JSX:
```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
```

- **Display (H1, H2, stat numbers, hero):** "Bebas Neue" — all-caps, wide tracking
- **UI (nav, buttons, labels, card titles, badges):** "Syne" — weight 600–800, slight tracking
- **Body (paragraphs, descriptions, input text):** "DM Sans" — weight 300–400, relaxed line-height

### 2.4 VISUAL SIGNATURE ELEMENTS

1. **Crimson Red + Prison Gold** — the palette screams authority, justice, and transformation
2. **Animated Grid Background** — subtle fixed CSS grid of faint lines covering the full viewport
3. **Custom Cursor** — small filled red dot (8px) + larger red ring (38px); ring expands on hover
4. **Floating Particles** — 25 tiny red particles rise slowly from bottom in the hero section
5. **Section Dividers** — diagonal SVG clip-path cuts between alternating sections
6. **Number Ticker** — stats count up from 0 with easing when scrolled into view
7. **Scroll-Reveal** — all cards and sections fade up from translateY(28px) via IntersectionObserver
8. **Red 4px scrollbar** — styled via CSS
9. **Glassmorphism cards** for achievements/awards — frosted glass effect with red border glow
10. **Timeline component** — vertical line with nodes for Chirag's journey

---

## ═══════════════════════════════════════════════
## SECTION 3 — NAVIGATION
## ═══════════════════════════════════════════════

Fixed top navbar. Backdrop blur + semi-transparent bg. Becomes fully opaque on scroll.

**Logo:** 
- Left: "CFY" in bold Bebas Neue with a red background pill badge
- Then "Crime Free Yuva" in Syne
- Subtext: "by Chirag Rana" in tiny muted text

**Nav Links (desktop, Syne font, uppercase, 0.75rem):**
About | Journey | Seminar | Impact | Achievements | Contact

**Right side:**
- Theme toggle (dark/light pill switch with animated thumb)
- "Book Session" CTA button (red, Syne font, rounded)
- Mobile: hamburger → slides down a full-width mobile menu

**Active link** highlights in red as user scrolls past each section (use IntersectionObserver on sections).

---

## ═══════════════════════════════════════════════
## SECTION 4 — ALL PAGE SECTIONS (in exact order)
## ═══════════════════════════════════════════════

---

### 4.1 — HERO SECTION

**Layout:** Full viewport. Two-column grid (left: text, right: visual). 

**Background:** Dark near-black with grid overlay + animated rising particles. Large faded watermark text "CRIME FREE YUVA" rotated -90° on the far left edge.

**Left Column:**

Eyebrow pill (red border, pulsing red dot):
```
🎤  Crime Free Yuva Motivator  |  Ahmedabad, Gujarat
```

Main headline (Bebas Neue, clamp 3.8rem to 7rem, line-height 0.9):
```
AWARENESS
IS YOUR
FREEDOM
```
— "FREEDOM" gets a red underline that animates drawing in from left (scaleX 0→1, 1.2s delay)

Subheadline (Syne, 1rem, gold color):
```
India's Most Unique Crime Awareness Speaker
```

Body paragraph (DM Sans, 1rem, muted):
```
"Over 40% of crimes in India are committed by youth aged 18–30 — not because they are criminals, but because no one told them where the line is. Chirag Rana speaks from 17 years of lived experience inside prison walls — to make sure you never have to."
```

Two CTA buttons:
- Primary (red filled): "📅 Book a Session" → scrolls to #contact
- Secondary (outlined): "Watch His Story →" → opens a modal (see Section 4.10)

Stats row (4 stats, Bebas Neue numbers animated counting up):
```
3,000+   Students Educated
900+     Audiobooks for Blind
10,000+  Inmates Mentored
40+      Certificates Received
```

**Right Column — Hero Visual Stack:**
Three overlapping cards slightly rotated at -3°, 0°, +3°:
- Card 1 (back, red gradient): Shows "17 Years" + "Inside Prison" + "5 PG Degrees"
- Card 2 (middle, gold border): Shows emoji icon 🎤 + "Crime & Prison Seminar" + "3 Hours"
- Card 3 (front): Shows profile name "Mr. Chirag Rana" + title + "Released: July 2025"
- Floating badge bottom-right: "🔒 Real Experience. Real Impact." (gold, bouncing animation)

---

### 4.2 — ABOUT SECTION (bg-surface)

**Headline:** "The Man Behind The Mission"

**Two-column layout:**

**Left — Portrait Card:**
- Tall card (aspect-ratio: 3/4) as photo placeholder
- Inside: Large 🎤 emoji + gradient overlay
- Bottom strip: Avatar circle "CR" in red + "Mr. Chirag Rana" + "Crime Free Yuva Motivator"
- Spinning badge top-right: "7 Degrees" (spins 360° in 12s loop)
- Released from prison: July 2025 badge (gold pill) at top-left

**Right — Text Content:**
Section tag: "About Chirag Rana"
Title: "From Prison Walls To Lecture Halls"

Four paragraphs using his REAL story:
```
Para 1: "Chirag Kishorbhai Rana is not your typical motivational speaker. He completed 17 years at Ahmedabad Central Prison — and emerged with five postgraduate degrees, 900+ audiobooks, and an unshakeable mission: to make India's youth crime-free."

Para 2: "During his sentence, Chirag didn't waste a single day. He guided more than 10,000 fellow inmates through 10th, 12th, and bachelor's degree programs. He recorded 900+ books in Gujarati, Hindi, Sanskrit, and English for the Ahmedabad Blind People's Association. He served as a 7-year mentor for Dr. Reena Sharma's 'The Mind Practice' program at Ahmedabad Central Prison."

Para 3: "In 2023, the Hon'ble Governor of Gujarat Shri Acharya Devvrat, alongside DGP Dr. KLN Rao IPS, honoured Chirag with 40+ certificates for his extraordinary contributions from behind bars. His M.Sc. degree was presented by Union Minister Shri Nitin Gadkari himself."

Para 4: "Today, Chirag channels that lived experience into a movement — Crime Free Yuva. His seminars are not lectures. They are wake-up calls. He walks into schools, colleges, and corporate halls with one goal: to show the youth exactly what one wrong decision looks like from the inside."
```

**Qualifications Grid (2x4 pill badges):**
```
M.A. Gujarati | MBA (HR) | M.A. Pol. Science | M.Com.
M.Sc. Value Education | PG Journalism | B.A. English | PG Value Edu.
```

**4-item highlight grid (border-left: 3px solid red):**
```
🏛️ Awarded by Governor of Gujarat — Shri Acharya Devvrat (2023)
📚 900+ Audiobooks — Ahmedabad Blind People's Association
🧠 Mentor — Samarth Psychology Center, Ahmedabad Central Prison
🎤 Seminar for Law Students — Crime Free Yuva, Ahmedabad
```

---

### 4.3 — THE PROBLEM SECTION (bg-base, full-width)

**Headline:** "The Silent Epidemic Nobody Talks About"
**Sub:** "We teach algebra. We don't teach the law."

**3-column stat impact cards (large number + description):**
```
Card 1 — Red bg:
  "40%"
  "of crimes in India are committed by youth aged 18–30"
  Source: Crime Free Yuva Research

Card 2 — Dark card:
  "18–25"
  "The most crime-vulnerable age group in India today"
  
Card 3 — Gold border:
  "₹0"
  "Amount spent on legal literacy in most Indian schools & colleges"
```

**The Root Cause — 5 icon cards in a row:**
```
📚  No legal education in schools or colleges
😤  No training in self-control or emotional awareness
📺  Media glamorizes violence, revenge, and crime
❓  Youth don't understand their rights as citizens
⚠️  Many crimes happen from emotion, not intent
```

**Action → Consequence Table (styled card):**
| Youth Action | Legal Consequence |
|---|---|
| Violent assault / fight | BNS — Murder, grievous harm |
| Social media prank | Cybercrime IPC Section |
| Helping a friend in trouble | Aiding & abetting a criminal |
| Substance use | NDPS Act |

**Bold quote (centered, large, red):**
```
"Law doesn't forgive ignorance. But awareness can prevent it."
```

---

### 4.4 — THE SEMINAR SECTION (bg-surface)

**Headline:** "Crime & Prison Seminar"
**Sub-headline in gold:** "Not just a seminar — a shield for your future"
**Duration badge:** "⏱ 3 Hours · Interactive · Real Stories · Q&A"

**Seminar intro paragraph:**
```
"In today's social life, knowingly or unknowingly, with planning or by mistake, we make mistakes. According to law, it is a crime — and for that, we and our loved ones suffer enormously. Most mistakes (crimes) happen between the age of 20 to 25 years. If anyone has proper knowledge about crime and prison, it can stop crime. I have a vision and mission for Crime Free Yuva."
— Chirag Rana
```

**8 Core Modules — styled grid cards with icon + title + short description:**
```
1. 🔍 What Is Crime?
   Legal vs moral boundaries. Where does a mistake end and a crime begin?

2. 👤 Who Is A Criminal?
   The psychology behind criminal behaviour — and how anyone can become one.

3. 🚔 Role of Police & Lawyer
   What really happens when law enforcement gets involved. Demystified.

4. ⚖️ How Court & Law Works?
   Case-to-case flowchart. From FIR to verdict — the complete journey explained.

5. 🔒 Life In Prison
   The truth about jail. Not the drama — the reality. What it really costs you.

6. 🧠 Criminal Psychology & Habits
   How criminal mindsets form. Peer pressure, impulsiveness, and the gateway behaviors.

7. 👨‍👩‍👧 How Families Are Affected
   Emotional, social, and economic destruction of families when a member enters crime.

8. ❓ Curiosity Q&A
   No filters. No judgment. Only truth. Every question answered openly.
```

**Delivery Style strip (horizontal, gold accent):**
```
📖 Storytelling  |  📊 Case Studies  |  🎭 Real-Life Examples  |  📈 Interactive Charts  |  💡 Emotion-Led Narratives
```

**CTA Banner at bottom of section:**
```
"Ready to bring Crime Free Yuva to your institution?"
[Book a Session →] [Download Brochure →]
```

---

### 4.5 — JOURNEY / TIMELINE SECTION (bg-base)

**Headline:** "17 Years That Changed Everything"
**Sub:** "A timeline of transformation inside Ahmedabad Central Prison"

**Vertical timeline component** with alternating left/right cards. Nodes on the center line are red circles. Line is a dashed red vertical stroke.

```
NODE 1 — "The Beginning" — 2008
"Chirag Rana enters Ahmedabad Central Prison. A moment that would define — and ultimately redefine — his entire life."
Icon: 🔒

NODE 2 — "The Decision" — 2009
"Rather than giving in to despair, Chirag begins studying. Enrolls in his first postgraduate program while serving his sentence."
Icon: 📚

NODE 3 — "Project Dhvani" — 2016 (2 Oct)
"Begins recording audiobooks for the Ahmedabad Blind People's Association. Eventually records 900+ books across Gujarati, Hindi, Sanskrit, and English."
Icon: 🎙️

NODE 4 — "Five Degrees Earned" — 2016–2022
"Completes MBA, M.A. (Gujarati), M.A. (Political Science), M.Com., and M.Sc. (Value Education & Spirituality) — 5 postgraduate degrees while incarcerated."
Icon: 🎓

NODE 5 — "Samarth Mentor" — 2015–2022 (7 Years)
"Serves as a 7-year mentor for Dr. Reena Sharma's 'The Mind Practice' — a psychology support program for inmates at Ahmedabad Central Prison."
Icon: 🧠

NODE 6 — "Tinka Tinka Award 2022" — 2022
"Receives the prestigious Tinka Tinka Award from a Delhi NGO for extraordinary contribution to inmate welfare and social reform."
Icon: 🏆

NODE 7 — "Honoured by Governor" — 2023
"Awarded 40+ certificates by the Hon'ble Governor of Gujarat, Shri Acharya Devvrat, and DGP Dr. KLN Rao IPS, in recognition of his academic and social achievements from inside prison."
Icon: 🎖️

NODE 8 — "M.Sc. Degree by Nitin Gadkari" — 2023
"Receives M.Sc. degree certificate from Union Minister Shri Nitin Gadkari and Vice Chancellor, Annamalai University, along with DGP Shri P.C. Thakur."
Icon: 🎓

NODE 9 — "Freedom & New Mission" — July 2025
"Released from prison after completing 17 years. Immediately launches Crime Free Yuva — a nationwide movement to stop India's youth from making the mistakes he made."
Icon: 🚀
```

---

### 4.6 — IMPACT / STATS SECTION (bg-surface, full-width red accent strip)

**Headline:** "The Reach & Results So Far"
**Sub:** "Proven impact across institutions and lives"

**4 large animated stat cards (count up when scrolled into view):**
```
3,000+     Youth Educated in Crime Awareness Seminars
900+       Audiobooks for Blind People (Project Dhvani)
10,000+    Inmates Mentored in 10th/12th/Degree Programs
40+        Awards & Certificates from Governor & DGP
```

**Below stats — Impact quote (Bebas Neue, large, centered):**
```
"Before Crime Becomes Your Story"
```

**3 column cards — Who Benefits:**
```
🎓 Youth (18–25)
College students, hostelers, and fresh job seekers. Most susceptible to peer pressure, misinformation, and risky behavior.

👨‍👩‍👧 Families & Parents
Who feel helpless once their child is in trouble. Seeking real preventive programs, not just punishment or rehab.

🏛️ Institutions & NGOs
Schools, colleges, corporates, government bodies seeking structured, credible, emotionally powerful crime awareness programs.
```

**TAM (Market) Block — visual infographic card (gold border):**
```
🇮🇳 371 Million Youth (age 15–29) in India
Target: 30% = 111.3 Million Learners
Average Cost: ₹200/youth
Total Addressable Market: ₹2,226 Crores
Target Revenue by FY30: ₹10 Crores
```

---

### 4.7 — AUDIENCE SECTION (bg-base)

**Headline:** "Crime Free Yuva Speaks To"

**6-card auto-grid (minmax 220px):**
```
🏫  Schools (Class 6–12)
Age-appropriate sessions on online safety, peer crime, and legal awareness. Builds responsible digital citizens from an early age.

🎓  Colleges & Universities
Deep-dive seminars on digital crime, campus safety, criminal psychology, and legal rights. Designed for India's most vulnerable age group (18–25).

🏢  Corporates & Workplaces
Workplace fraud, financial scams, cybercrime, HR legal compliance, and employee safety culture. Available as half-day workshops.

🏘️  Communities & Resident Associations
Neighborhood watch awareness, senior citizen fraud protection, anti-drug campaigns, and community safety drives.

👩  Women's Organizations & Groups
Safety, self-defense awareness, cyber harassment, legal rights, and empowerment through education.

🌱  NGOs, Correction Homes & Prisons
At-risk youth, rehabilitation programs, grass-roots crime prevention, and reform-based motivational sessions.
```

---

### 4.8 — ACHIEVEMENTS / AWARDS SECTION (bg-surface)

**Headline:** "Recognition That Speaks For Itself"
**Sub:** "Honoured by India's highest authorities for extraordinary achievement"

**Use a masonry-style or staggered grid layout** with glassmorphism cards (frosted glass effect, red glow border on hover).

**Achievement Cards (8 total):**

```
Card 1 — GOVERNOR'S AWARD (GOLD card, most prominent)
🎖️ "40+ Certificates by the 20th Governor of Gujarat"
Honoured by Shri Acharya Devvrat, Governor of Gujarat, along with
Dr. KLN Rao IPS (DGP Gujarat) for extraordinary academic and social
achievements from inside Ahmedabad Central Prison (2023).

Card 2 — M.SC. DEGREE (RED card)
🎓 "M.Sc. Degree by Union Minister Nitin Gadkari"
Received M.Sc. (Value Education & Spirituality) degree certificate from
Shri Nitin Gadkari and the Vice Chancellor of Annamalai University,
alongside DGP Shri P.C. Thakur.

Card 3 — TINKA TINKA AWARD (GOLD border)
🏆 "Tinka Tinka Award 2022"
National award from Delhi NGO — Tinka Tinka — for exemplary service
to inmate welfare, rehabilitation, and social reform from inside Gujarat's
Ahmedabad Central Prison.

Card 4 — 900+ AUDIOBOOKS
🎙️ "Project Dhvani — 900+ Audiobooks"
Recorded 900+ books across Gujarati, Hindi, Sanskrit, and English for
the Ahmedabad Blind People's Association (Project Dhvani), started 2 Oct 2016.

Card 5 — SAMARTH MENTOR
🧠 "Mentor — Samarth Psychology Center"
7-year mentorship for Dr. Reena Sharma's 'The Mind Practice' program,
supporting prisoners with psychological challenges at Ahmedabad Central Prison.

Card 6 — NAVAJIVAN TV
📺 "Featured on Navajivan News Channel"
Chirag's story was featured on Navajivan News Channel and ETV Gujarati
under the headline "Jelamaa Rahine Pan Kamal Karata Kaidi" (Remarkable
Achievement from Inside Prison).

Card 7 — SABARMATI NAVAJIVAN
📜 "3rd Rank — Gandhivichar Speech Competition"
Participated in the Gandhivichar Vaktrutva Spardha organized by
Navajivan Trust and Sabarmati Central Jail — received 3rd rank from 80 marks.

Card 8 — 5 PG DEGREES
📚 "5 Postgraduate Degrees from Prison"
Among the very few inmates in India to complete 5 Master's degrees
while incarcerated: MBA, M.A. (Gujarati), M.A. (Pol. Science), M.Com.,
and M.Sc. (Value Education & Spirituality).
```

**Bottom of section — Quote strip (red background, full width):**
```
"I am among the very few inmates in India to have achieved this level of academic accomplishment while incarcerated."
— Chirag Rana, in his letter to NGOs & organizations (2025)
```

---

### 4.9 — COMPETITIVE ADVANTAGE SECTION (bg-base)

**Headline:** "Why Only Crime Free Yuva Can Do This"

**Comparison Table (styled, responsive):**

| Feature | Chirag Rana | Legal Aid NGOs | Law Colleges | Govt Campaigns | YouTube Channels |
|---|---|---|---|---|---|
| Target Audience | Youth 18–25 ✅ | Legal victims | Law students | General public | Mass viewership |
| Format | Seminar + Emotional Storytelling ✅ | Legal support | Academic lectures | Posters, events | Videos |
| Emotional Engagement | High ✅ | Low ❌ | Low ❌ | Minimal ❌ | Entertainment ⚠️ |
| Criminal Psychology | Core module ✅ | None ❌ | Theory only ⚠️ | None ❌ | Basic ⚠️ |
| Delivery Style | Interactive, immersive ✅ | Legal paperwork | Classroom | Bureaucratic | Passive |
| Post-Session Resources | Podcasts, Q&A ✅ | None ❌ | None ❌ | None ❌ | Unverified ⚠️ |
| Real Experience | 17 Years ✅ | None ❌ | None ❌ | None ❌ | None ❌ |

**Below table — 3 moat cards (why only Chirag):**
```
🔒 Lived Experience
Former inmate with 17 years inside — uniquely qualified to speak about crime, prison, and consequence with raw authenticity.

🎓 7 Degrees + Research
5 postgraduate degrees, PG diplomas, and deeply researched, multi-disciplinary curriculum combining legal awareness, human psychology, and social reform.

❤️ Ground-Up Mission
Not a company. Not a campaign. A personal mission — backed by real scars, real reform, and the desire to ensure no youth makes the same mistake.
```

---

### 4.10 — BUSINESS MODEL SECTION (bg-surface)

**Headline:** "The Crime Free Yuva Model"
**Sub:** "Education meets emotion. Revenue meets reform."

**4 service type cards:**
```
🎓  College & School Seminars
Paid per event. 3-hour immersive Crime & Prison Seminar. Customized per audience.

🤝  NGO & Government Programs  
Sponsored / CSR-funded awareness programs in collaboration with state and district bodies.

🏢  Corporate Workshops
HR & Legal training. Cybercrime, fraud prevention, and workplace safety sessions.

📱  eLearning + Podcast
Subscription-based digital content — weekly podcast series, curiosity-based Q&A shows, and digital e-courses.
```

**Financial Projection — Recharts Bar Chart (simple, clean):**
Use recharts BarChart component. Data:
```javascript
const projections = [
  { year: 'FY27', revenue: 0.17, ebitda: 0.01 },
  { year: 'FY28', revenue: 0.65, ebitda: 0.11 },
  { year: 'FY29', revenue: 1.66, ebitda: 0.49 },
  { year: 'FY30', revenue: 3.26, ebitda: 1.14 },
  { year: 'FY31', revenue: 5.76, ebitda: 2.19 },
];
```
Show Revenue (red bar) and EBITDA (gold bar). Label Y-axis as "₹ Crores". Title: "Revenue Projection (₹ Crores)"

**Vision 2030 strip (horizontal, large, impactful):**
```
Educate 10 Lakh Youth  |  Partner with 1,000 Institutions  |  Launch India's #1 Crime Awareness Podcast  |  Train 1,000+ Crime Free Yuva Speakers  |  National Crime Literacy Curriculum
```

---

### 4.11 — MISSION BANNER (full-width, red background)

Large faded watermark: "AWARE · SAFE · STRONG"

Center quote (Bebas Neue, clamp 2.2rem 5vw 4.2rem, white):
```
"The best crime prevention is an
informed and empowered community."
```
Attribution: "— Chirag Rana, Crime Free Yuva Motivator"

Two side-by-side pills below:
```
[🇮🇳 India-Wide Seminars]    [📞 +91-84694-00794]
```

---

### 4.12 — CONTACT & BOOKING SECTION (bg-surface)

**Headline:** "Book a Crime Free Yuva Session"
**Sub:** "Fill the form below. You'll receive a confirmation email with the full booking form link."

**Two-column layout:**

**LEFT — Info Column:**
Heading: "Join The Movement"
Para: "Whether it's a single session for 50 students or a full campus awareness program for thousands, Chirag Rana brings his 17 years of real experience directly to your audience. Reach out now."

Contact channels (card-style buttons):
```
💬 WhatsApp  →  wa.me/918469400794  (pre-filled: "Hi Chirag, I want to book a Crime Free Yuva session.")
✉️ Email 1   →  chiragrana3399@gmail.com
✉️ Email 2   →  ckrana3986@gmail.com
📍 Address   →  39-465, Parasnagar-3, Sola Road, Naranpura, Ahmedabad – 380063, Gujarat
```

Seminar types available (small badge pills):
```
[🏫 Schools] [🎓 Colleges] [🏢 Corporates] [🏘️ Communities] [👩 Women's Groups] [🌱 NGOs]
```

**RIGHT — Booking Form Card:**
Form title: "Session Booking Request"
Subtitle: "Takes 2 minutes · Confirmation email sent instantly"

Fields:
```
Row 1: Full Name*  |  WhatsApp Number* (with +91 prefix)
Row 2: Email Address* (full width)
Row 3: Organisation / Institution  |  Audience Type (dropdown)
       Dropdown options: School Students | College Students | Corporate Employees | 
       Community / RWA | Women's Group | NGO / Correction Home | Government Body | Other
Row 4: Expected Audience Size  |  Preferred Date (date input)
Row 5: Message / Requirements (textarea, min-height 100px)
```

Submit button (full width, red, Syne font, bold):
```
📨 Send Booking Request
```

Below button note:
```
✅ After submitting, you'll receive an email with a detailed Google Form link.
Chirag will personally confirm within 24–48 hours via email and WhatsApp.
```

**Form Behavior (JavaScript):**
1. Validate: name, mobile, email required; valid email format
2. Save record to localStorage key "cfy_bookings" as JSON array
3. Call EmailJS with CONFIG values (see Section 5)
4. Show green success card OR red error card
5. Re-render records table in Section 4.13
6. Reset form fields

---

### 4.13 — BOOKINGS RECORDS SECTION (bg-base)

**Section tag:** "Admin Records"
**Headline:** "Booking Submissions"

Header row: Title + "📥 Export to Excel" button (right-aligned, gold border)

**Table columns:** # | Name | WhatsApp | Email | Organisation | Audience Type | Date | Submitted At

Empty state: 📋 icon + "No submissions yet. Booking requests will appear here after the first form submission."

**Export to Excel:** Use SheetJS (XLSX from CDN via script tag in the style block). Filename: `CrimeFreeYuva_Bookings_YYYY-MM-DD.xlsx`

Note: Import XLSX via window.XLSX since it's loaded as a CDN script tag.

---

### 4.14 — FOOTER (bg-surface, border-top)

Three-column grid:

**Col 1 — Brand:**
Logo: "Crime Free Yuva" (Bebas Neue, large)
Sub: "by Chirag Rana"
Para: "A movement to make India's youth crime-free through awareness, education, and the lived wisdom of real experience. India-wide Crime Awareness Seminars."

Social/Contact row:
```
📞 +91-84694-00794   ✉️ chiragrana3399@gmail.com
```

**Col 2 — Quick Links:**
```
About Chirag | His Journey | The Seminar | Impact & Stats | Achievements | Book a Session
```

**Col 3 — Contact:**
```
📍 39-465, Parasnagar-3, Sola Road
    Naranpura, Ahmedabad – 380063
    Gujarat, India

💬 WhatsApp Now
✉️ chiragrana3399@gmail.com
✉️ ckrana3986@gmail.com
```

**Bottom bar:**
```
Left: © 2025 Crime Free Yuva — Chirag Rana. All Rights Reserved.
Right: Built for a safer, crime-free tomorrow. 🇮🇳
```

---

## ═══════════════════════════════════════════════
## SECTION 5 — FLOATING ELEMENTS
## ═══════════════════════════════════════════════

**1. WhatsApp Float Button (fixed, bottom-right):**
- Green circle (#25d366), 60px, emoji 💬
- Pulsing green box-shadow animation
- Opens: `https://wa.me/918469400794?text=Hi%20Chirag%2C%20I%20want%20to%20book%20a%20Crime%20Free%20Yuva%20session.`
- z-index: 9000

**2. Scroll-to-Top Button (fixed, bottom-left):**
- Small circle, ↑ arrow, bg-card color
- Visible only after scroll > 400px
- Smooth scroll to top

**3. Story Modal (triggered by "Watch His Story" hero CTA):**
- Full-screen overlay, dark, blur backdrop
- Title: "The Story of 17 Years"
- Content: A styled card with the full story of Chirag's transformation
- Close button top-right (X)
- Animate in from scale(0.9) opacity(0) → scale(1) opacity(1)

---

## ═══════════════════════════════════════════════
## SECTION 6 — CONFIG BLOCK
## ═══════════════════════════════════════════════

At the top of the App component, define:

```javascript
const CONFIG = {
  // ⚠️ EmailJS — Sign up free at https://emailjs.com
  emailjs_public_key:  "YOUR_EMAILJS_PUBLIC_KEY",
  emailjs_service_id:  "YOUR_EMAILJS_SERVICE_ID",
  emailjs_template_id: "YOUR_EMAILJS_TEMPLATE_ID",
  
  // ⚠️ Your Google Form URL for detailed session booking
  google_form_url:     "https://forms.gle/YOUR_GOOGLE_FORM_LINK",
  
  // ⚠️ WhatsApp number (no + sign, with country code)
  whatsapp_number:     "918469400794",
  
  // Real contact info (pre-filled, no need to change)
  email_primary:       "chiragrana3399@gmail.com",
  email_secondary:     "ckrana3986@gmail.com",
  phone:               "+91-84694-00794",
  address:             "39-465, Parasnagar-3, Sola Road, Naranpura, Ahmedabad – 380063, Gujarat",
};
```

**EmailJS Template Variables to use in your EmailJS dashboard template:**
```
{{to_email}}         — user's email
{{user_name}}        — user's name
{{mobile}}           — user's WhatsApp
{{organisation}}     — their institution
{{audience_type}}    — type of audience
{{audience_size}}    — expected audience count
{{preferred_date}}   — preferred session date
{{user_message}}     — their message
{{google_form_url}}  — the booking form link
{{whatsapp_number}}  — Chirag's WhatsApp
{{submitted_at}}     — IST timestamp
```

**Suggested EmailJS Template Body:**
```
Subject: ✅ Session Request Received — Crime Free Yuva by Chirag Rana

Dear {{user_name}},

Thank you for reaching out to Crime Free Yuva!

We've received your session booking request. To complete your booking,
please fill out the detailed form below:

👉 BOOKING FORM: {{google_form_url}}

Once you submit the form, Chirag Rana will personally review it and
confirm via email and WhatsApp within 24–48 hours.

For urgent queries, WhatsApp directly:
📱 wa.me/{{whatsapp_number}}

Your Submission Summary:
• Organisation: {{organisation}}
• Audience Type: {{audience_type}}
• Expected Size: {{audience_size}}
• Preferred Date: {{preferred_date}}
• Message: {{user_message}}
• Submitted: {{submitted_at}}

Awareness is Freedom. 🔒

— Chirag Rana
Crime Free Yuva Motivator
+91-84694-00794 | chiragrana3399@gmail.com
```

---

## ═══════════════════════════════════════════════
## SECTION 7 — ANIMATIONS & INTERACTIONS
## ═══════════════════════════════════════════════

Implement ALL of these via CSS keyframes (injected via a <style> tag in the JSX) and inline styles:

```
1.  fade-up:          opacity 0 + translateY(28px) → opacity 1 + translateY(0). 0.7s ease.
2.  fade-left:        opacity 0 + translateX(40px) → visible. 0.9s ease.
3.  fade-in:          opacity 0 → opacity 1. 0.6s ease.
4.  line-draw:        scaleX(0) → scaleX(1) for hero underline. 1.2s 0.8s ease forwards.
5.  pulse-dot:        scale 1 → 1.6 → 1. 2s ease infinite. For eyebrow pulsing dot.
6.  bounce-badge:     translateY(0) → translateY(-8px) → translateY(0). 2.5s ease infinite.
7.  spin-slow:        rotate(0deg) → rotate(360deg). 12s linear infinite. For about badge.
8.  pulse-wa:         box-shadow pulse green. 2.5s ease infinite.
9.  float-particle:   translateY(100vh) → translateY(-10vh). opacity 0 → 0.6 → 0. Random durations 10–20s.
10. count-ticker:     Number counts from 0 to target using setInterval when IntersectionObserver fires.
11. scroll-reveal:    IntersectionObserver on all elements with class "reveal". Adds "visible" class. threshold: 0.12.
12. nav-scroll:       Nav background becomes fully opaque + adds box-shadow after scroll > 60px.
13. cursor-custom:    Dot follows mouse with 0.08s delay. Ring follows with 0.18s delay. Ring expands on hoverable elements.
14. modal-open:       scale(0.9) opacity(0) → scale(1) opacity(1). 0.3s cubic-bezier.
15. timeline-draw:    The vertical line grows downward progressively as user scrolls.
16. tab-switch:       Seminar modules tab system animates between content panels.
17. card-tilt:        Achievement cards subtly tilt toward mouse cursor on hover (mouse tracking).
18. watermark-scroll: Hero watermark text moves slowly in parallax as user scrolls.
```

---

## ═══════════════════════════════════════════════
## SECTION 8 — REACT COMPONENT ARCHITECTURE
## ═══════════════════════════════════════════════

Structure the single JSX file with these components:

```jsx
// State & Config
const CONFIG = { ... }
const THEME_STYLES = { dark: {...}, light: {...} }

// Sub-components (defined above App)
const CustomCursor = () => { ... }
const Navbar = ({ theme, toggleTheme, activeSection }) => { ... }
const MobileMenu = ({ isOpen, onClose }) => { ... }
const HeroSection = () => { ... }
const AboutSection = () => { ... }
const ProblemSection = () => { ... }
const SeminarSection = () => { ... }
const JourneySection = () => { ... }
const ImpactSection = () => { ... }
const AudienceSection = () => { ... }
const AchievementsSection = () => { ... }
const CompetitiveSection = () => { ... }
const BusinessModelSection = () => { ... }
const MissionBanner = () => { ... }
const ContactSection = ({ onSubmit }) => { ... }
const RecordsSection = ({ records }) => { ... }
const StoryModal = ({ isOpen, onClose }) => { ... }
const Footer = () => { ... }
const WhatsAppFloat = () => { ... }
const ScrollTopButton = () => { ... }

// Root
export default function App() {
  const [theme, setTheme] = useState('dark')
  const [activeSection, setActiveSection] = useState('hero')
  const [records, setRecords] = useState([])
  const [storyModalOpen, setStoryModalOpen] = useState(false)
  
  // Load records from localStorage on mount
  // IntersectionObserver for active nav section
  // Theme persistence via localStorage
  // Inject CSS animations via useEffect (one-time style tag injection)
  
  return (
    <div style={themeVars} className="app-root">
      <style>{cssAnimations}</style>
      <CustomCursor />
      <Navbar ... />
      <MobileMenu ... />
      <main>
        <HeroSection />
        <AboutSection />
        <ProblemSection />
        <SeminarSection />
        <JourneySection />
        <ImpactSection />
        <AudienceSection />
        <AchievementsSection />
        <CompetitiveSection />
        <BusinessModelSection />
        <MissionBanner />
        <ContactSection onSubmit={handleSubmit} />
        <RecordsSection records={records} />
      </main>
      <Footer />
      <StoryModal isOpen={storyModalOpen} onClose={() => setStoryModalOpen(false)} />
      <WhatsAppFloat />
      <ScrollTopButton />
    </div>
  )
}
```

---

## ═══════════════════════════════════════════════
## SECTION 9 — RESPONSIVE BREAKPOINTS
## ═══════════════════════════════════════════════

Use Tailwind responsive prefixes (sm:, md:, lg:, xl:) plus inline media queries where needed:

```
Mobile first. Base styles = mobile (< 640px).

sm: 640px+  — 2-column simple grids
md: 768px+  — Nav links appear, hamburger hides. 2-col layouts.
lg: 1024px+ — Full 2-col hero, about, contact layouts
xl: 1280px+ — Max content width 1280px centered

Mobile specifics:
- Hero: single column, visual stack hides, text only
- Nav: hamburger only, mobile slide-down menu
- Timeline: single column, all nodes left-aligned
- Form rows: single column
- Table: horizontally scrollable wrapper
- Stats: 2×2 grid
- Footer: single column stack
- Achievements: single column masonry
```

---

## ═══════════════════════════════════════════════
## SECTION 10 — CRITICAL RULES
## ═══════════════════════════════════════════════

1. **SINGLE JSX FILE** — Everything in one file. Default export App. No imports from local files.
2. **ALLOWED IMPORTS ONLY:**
   ```
   import { useState, useEffect, useRef, useCallback } from 'react'
   import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
   import { Menu, X, Sun, Moon, Phone, Mail, MapPin, ChevronUp, MessageCircle, Shield, Award, BookOpen, Users, TrendingUp, Heart } from 'lucide-react'
   ```
3. **NO form HTML tag** — Use div with onSubmit simulation via button onClick handlers
4. **Tailwind CSS** — Core utility classes only (pre-defined stylesheet classes). No custom config.
5. **Inline styles** for CSS variables, complex animations, and theme-switching. CSS keyframes injected via a <style> tag in the JSX rendered output.
6. **cursor: none** on the root div. Custom cursor replaces browser default.
7. **All colors** from CSS variable system only — never hardcode hex inside component styles.
8. **Real content** everywhere — use the actual data from Chirag Rana's documents above.
9. **localStorage keys:** theme → "cfy_theme", bookings → "cfy_bookings"
10. **EmailJS** loaded via: `<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">` — accessed as `window.emailjs`
11. **SheetJS** loaded via: `<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js">` — accessed as `window.XLSX`
12. **Both script CDNs** must be referenced in a comment at top of file telling the user to add them to their index.html
13. **IntersectionObserver** for: (a) scroll-reveal on all .reveal elements, (b) counter trigger on stat elements, (c) active nav section highlighting, (d) timeline line growth animation
14. **Error handling** — wrap all localStorage, EmailJS, and XLSX calls in try/catch
15. **All ⚠️ placeholder comments** clearly marked for the 3 CONFIG items the user must replace
16. **No lorem ipsum** — every word must be real content from this brief
17. **Mobile menu** must close on any link click or outside click
18. **Accessibility** — all interactive elements have aria-labels; color contrast meets WCAG AA
19. **Performance** — lazy-render the records table; debounce scroll listeners
20. **Semantic HTML** inside JSX — use section, nav, footer, article, h1–h3 correctly
