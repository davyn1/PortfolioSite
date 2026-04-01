🖥️ Davy Nguyen — Personal Portfolio Website Plan
Overview
A dark, techy personal portfolio site with a hacker/dev aesthetic. The goal is to showcase coding projects, certificate badges, GitHub activity, and an about me section — all in one slick, memorable place.

🎨 Design Direction

Theme: Dark background (near-black), with neon accent colors (e.g. cyan, green, or electric blue)
Aesthetic: Terminal/hacker vibes — monospace fonts, subtle scanline or noise textures, glowing borders, matrix-like effects
Typography: Monospace display font (e.g. JetBrains Mono, Fira Code, or Space Mono) for headings; clean sans-serif for body text
Motion: Subtle typing animations on the hero, glowing hover effects on cards, fade-in on scroll
Layout: Single-page with smooth scroll navigation; sections separated by dark dividers or subtle grid lines


📐 Site Structure
1. Hero / Landing Section

Your name: Davy Nguyen
Animated typing effect cycling through:

> Cybersecurity Enthusiast
> Software Engineer
> Data Analytics
> BIM Graduate @ UC Irvine


Tagline: "Turning data into decisions and code into solutions."
CTA buttons: View My Work and Contact Me
Optional: subtle animated background (particle grid, matrix rain, or noise texture)

2. About Me

Bio:

Recent Business Information Management graduate from UC Irvine, seeking roles in cybersecurity or software engineering. Passionate about technology and data analytics, with hands-on experience in data management, analysis, and software development. Looking to bring my skills to a driven team while continuing to grow alongside like-minded people in the tech community.


Skills/tech stack displayed as glowing tag pills:

Languages: SQL Python R Java HTML CSS JavaScript
Focus Areas: Cybersecurity Data Analytics Software Engineering
Soft Skills: Collaboration Communication Problem Solving


Optional: profile photo with a neon border frame

3. Project Showcase Cards

Grid of cards, each representing a project
Each card includes:

Project name & short description
Tech stack tags
Links: GitHub and Live Demo (if available)
Optional: screenshot or animated preview on hover


Hover effect: card lifts with a glowing neon border

Projects (from Resume):
ProjectDateDescriptionTechFablix — Web ApplicationApril 2023Full-stack web & Android app to browse/search/buy movies. REST API via Apache Tomcat, 20k+ movie DB entries, Google reCAPTCHA, persistent cart. Stress-tested to 5000+ req/min.Java, AWS EC2, GCP, Apache Tomcat, MySQL, REST APISearch EngineApril 2022Web scraper + search engine indexing 2000+ pages using Beautiful Soup. Handled 300+ infinite loop pages and web request errors.Python, Beautiful SoupSleep Tracker — Mobile AppNovember 2023Mobile sleep tracker with overnight sleep logging and daytime sleepiness tracking. Native device notifications, Android design conventions.Ionic, Angular, TypeScript
4. Certificate / Badge Wall

Grid display of certification badges (images or Credly-style embeds)
Each badge shows:

Certificate name
Issuing organization
Date earned
Link to verify


Style: glowing badge cards with subtle shimmer effect

Known Certificates:
CertificateIssuerDateVerify LinkAWS Certified Cloud PractitionerAmazon Web ServicesMarch 22, 2026Credly Badge

⚠️ Profile photo to be pulled from LinkedIn manually — upload to assets/profile.jpg.

5. GitHub Stats / Repo Highlights

Embed GitHub stats using github-readme-stats:

Contribution streak
Top languages
Total stars / commits


Feature 3–4 pinned/highlighted repos with description and star count
Link to full GitHub profile

6. Contact / Footer

Simple contact section with links to:

GitHub
LinkedIn
Email


Footer with your name and year


🛠️ Tech Stack Recommendation
LayerChoiceWhyStructureHTML5 / ReactFlexible, component-basedStylingCSS3 + CSS VariablesFull control over dark themeFontsGoogle Fonts (JetBrains Mono)Fits hacker aestheticIconsFont Awesome or DeviconsDev/tech icon libraryGitHub Statsgithub-readme-stats APIEasy, no backend neededHostingGitHub Pages or VercelFree, easy to deployBadgesCredly embeds or badge imagesFor certificate display

🗂️ File Structure (Single HTML or React)
portfolio/
├── index.html          ← Main entry point
├── style.css           ← Global styles & dark theme variables
├── script.js           ← Animations & interactions
├── assets/
│   ├── profile.jpg     ← Your photo
│   ├── badges/         ← Certificate badge images
│   └── projects/       ← Project screenshots
└── README.md           ← Repo description

🚀 Build Phases
Phase 1 — Structure & Theme

Set up base HTML/CSS with dark theme
Add navigation and smooth scroll
Implement hero with typing animation

Phase 2 — Content Sections

Build About Me with skills tags
Build Project Cards grid
Build Certificate Badge wall

Phase 3 — GitHub Integration

Embed GitHub stats widgets
Add pinned repo highlights

Phase 4 — Polish & Deploy

Add scroll-triggered animations
Test responsiveness on mobile
Deploy to GitHub Pages or Vercel
Add custom domain (optional)


✅ Content Checklist

 Bio — UC Irvine BIM grad, seeking cybersecurity / software engineering roles
 Email — davyn1300@gmail.com
 LinkedIn — linkedin.com/in/davy-nguyen1
 Tech stack — SQL, Python, R, Java, HTML, CSS, JavaScript, React, Angular, Node.js, Flask, NumPy, Pandas, MySQL, AWS, Git
 GitHub username — davyn1 (github.com/davyn1)
 Certificates — AWS Certified Cloud Practitioner (March 22, 2026)
 Projects — Fablix (Apr 2023), Search Engine (Apr 2022), Sleep Tracker (Nov 2023)
 Profile photo — save from LinkedIn and upload as assets/profile.jpg