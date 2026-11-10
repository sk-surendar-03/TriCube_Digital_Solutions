# TriCube Digital Solutions Website (React + Vite)

A modern, modular, production-ready React 18 + Vite application for **TriCube Digital Solutions**, faithfully preserving the exact layout, visual aesthetics, typography, animations, and interactive functionality of the enterprise design reference.

The project now supports client-side multi-page routing via **React Router**, featuring both the high-converting **Homepage (`/`)** and a dedicated, comprehensive **About Page (`/about`)**.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended, tested on Node v24)
- npm (v9.0.0 or higher)

### 1. Installation
Install project dependencies:
```bash
npm install
```

### 2. Development Server
Start the local Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port indicated in your console).

### 3. Production Build
Compile and bundle the application for production:
```bash
npm run build
```
The optimized production bundle is generated in the `dist/` directory.

### 4. Preview Production Build
Locally preview the generated production build:
```bash
npm run preview
```

---

## 📁 Project Structure

```text
tricube_landing_page/
├── public/
│   ├── assets/
│   │   ├── logo.png               # Official TriCube brand logo (54x61px)
│   │   ├── hero-video.mp4         # Hero background looping video (1.55 MB)
│   │   └── hero-poster.jpg        # Video fallback poster (26.8 KB)
│   ├── favicon.png                # Brand favicon
│   └── favicon.ico
│
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── logo.png
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx         # Global navigation with React Router links and hash fallback
│   │   │   └── Footer.jsx         # TriCube 3D isometric SVG + 3-column links + legal bar
│   │   └── common/
│   │       └── ScrollToTop.jsx    # Automatically resets scroll position on route transitions
│   │
│   ├── pages/
│   │   ├── HomePage.jsx           # Landing page assembling all 10 core homepage sections
│   │   └── AboutPage.jsx          # Dedicated '/about' corporate profile page
│   │
│   ├── sections/                  # Modular homepage sections
│   │   ├── Hero.jsx               # Hero section with autoplaying video & search card
│   │   ├── ImpactStats.jsx        # 5-column impact numbers & metrics grid
│   │   ├── ServicesPractice.jsx   # Interactive 7-practice switcher with dynamic detail pane
│   │   ├── Industries.jsx         # 6-card vertical industry matrix
│   │   ├── Approach.jsx           # 4-step delivery methodology with connecting steplines
│   │   ├── CoreExpertise.jsx      # Dual pillar: Software Development & IT Training
│   │   ├── AboutWhyUs.jsx         # 4-pillar value propositions
│   │   ├── ClientsMarquee.jsx     # Continuous infinite-scrolling client logo marquee
│   │   └── ContactCTA.jsx         # Consultation CTA banner
│   │
│   ├── data/
│   │   ├── about.js               # Official About TriCube data: Mission, Vision, Values, Capabilities
│   │   ├── services.js            # Definitions & capability points for 7 service practices
│   │   ├── industries.js          # Industry sectors & descriptions
│   │   └── stats.js               # At-a-glance impact statistics (500+ Students, Salem HQ, etc.)
│   │
│   ├── styles/
│   │   └── global.css             # Preserved corporate typography, palette, animations, media queries
│   │
│   ├── App.jsx                    # Route mapping: '/' -> HomePage, '/about' -> AboutPage
│   └── main.jsx                   # React 18 DOM entry point wrapped in BrowserRouter
│
├── index.html                     # HTML5 entry with Google Fonts (IBM Plex Sans & Source Serif 4)
├── vite.config.js                 # Vite bundler configuration
├── package.json                   # Dependencies: React 18, React Router v6, Vite
└── TriCube Digital Solutions Website – Homepage.html # Preserved original reference source
```

---

## 🌐 Application Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `HomePage.jsx` | Full enterprise homepage with hero video, services selector, industry cards, process steps, client marquee, and CTA. |
| `/about` | `AboutPage.jsx` | Dedicated corporate profile detailing Who We Are, What We Do (Software Dev + IT Training), Mission, Vision, the 4-step Approach, 6 Core Values, Why Choose Us, and Contact CTA. |

---

## 🎨 Design & Interaction Details Preserved

1. **Exact Typography**: Google Fonts `IBM Plex Sans` (400, 500, 600) for body/controls and `Source Serif 4` (500, 600) for editorial headlines.
2. **Corporate Palette**:
   - Deep Corporate Navy: `#14264F`
   - Dark Base: `#0C1A3A`
   - Primary Teal Accent: `#1B6F64` / `#1F7A6E`
   - Warm Ochre / Amber Accent: `#C98A1B`
   - Light Neutral Backgrounds: `#FFFFFF`, `#F3F5F9`
3. **Hero Video**: Autoplaying, muted, looping background video with a 1.07 scale factor and dark overlay tint (`rgba(12,24,54,0.62)`).
4. **Interactive Practice Switcher**: Tab selector toggling active state between the 7 services with smooth instant state transitions.
5. **Infinite Logo Marquee**: Dual-track CSS keyframe translation running seamlessly at 48 seconds with hover-pause functionality.
6. **Responsive Layouts**: Breakpoints preserved at `900px` (tablet) and `560px` (mobile).
