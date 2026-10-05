# RESONANCE AI4D Lab — Homepage Modernization & Architecture Prototype

**[Live Production Prototype](https://resonance-ai4d-lab-web.vercel.app/)** • **[GitHub Repository](https://github.com/MekdelawitGebre/resonance-ai4d-lab-web)**

A high-performance, accessible, and responsive homepage prototype engineered for the **RESONANCE AI4D Lab @ CTBE** at Addis Ababa University. This project addresses the structural, visual, navigation, and accessibility limitations of the lab's current Google Sites web presence while strictly preserving its academic heritage and verified institutional data.

---

## Executive Summary

The objective of this technical exercise was to evaluate the active web presence of the RESONANCE AI4D Lab, isolate high-friction usability bottlenecks, and engineer a production-ready prototype demonstrating disciplined technical judgment, user-centric information architecture, and strict adherence to academic standards within an approximate 4-hour window.

The delivered prototype resolves critical navigation and mobile responsiveness issues, implements an **Academic Tech** design token system with WCAG 2.1 AA compliant contrast ratios, organizes fragmented research themes into structured components, and enhances user engagement via a lightweight 3D interactive hero background without compromising page performance.

---

## 1. Website Assessment & Evaluation Matrix

A comprehensive review of the active Google Sites portal (`https://sites.google.com/aait.edu.et/resonance-lab`) identified several architectural, aesthetic, and functional challenges:

### Diagnostic Findings

* **Content Organization & Hierarchy:** The current layout relies on fragmented subpages and flat text blocks. Visitors arriving at the homepage are not greeted with an immediate, high-impact overview of what the lab investigates (AI for Development, Healthcare AI, NLP), forcing exploratory clicks just to identify core focus areas.
* **Navigation Architecture:** The original navigation relies on default Google Sites dropdowns with multi-level nesting. The absence of a sticky navigation pattern forces repetitive manual scrolling on desktop and mobile viewports. On mobile viewports, menus collapse into rigid drawers without clear visual feedback for active links or section jumps.
* **Color Design Pattern & Visual Identity:** The original site adopts a generic default office theme with low-contrast gray-on-white text, weak typographic scales, and under-emphasized call-to-actions. It fails to convey the precision and technological leadership of an advanced AI research laboratory.
* **Mobile Responsiveness:** Tables, multi-column blocks, and partner logos do not reflow dynamically on smaller viewports, resulting in clipped margins and horizontal scroll overflow.
* **Accessibility (a11y)::** The original site lacks semantic HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), explicit ARIA attributes, and accessible keyboard `:focus-visible` boundaries.
* **Action Pathways:** Key conversion points—specifically student and researcher engagement paths like `Get Involved (Application 2025/26)`—are obscured in deep sub-navigation instead of functioning as prominent primary action buttons.

---

### Prioritized Action Matrix (P0 to P2)

| Priority | Dimension | Root Issue Identified | Engineering Solution Implemented |
| :--- | :--- | :--- | :--- |
| **P0 (Critical)** | **Navigation Architecture** | Non-sticky header, deep nested menus, cumbersome mobile navigation. | Implemented a glassmorphic (`backdrop-blur`) sticky navigation bar featuring instantaneous anchor-link routing and a responsive slide-out mobile drawer with standard touch targets (44px+). |
| **P0 (Critical)** | **Color Pattern & Hierarchy** | Generic palette, poor visual hierarchy, low typographic contrast. | Engineered an **Academic Tech** design system utilizing deep slate/navy surfaces (`#0F172A`, `#1E293B`), crisp white body typography, and vibrant cyan/indigo accents meeting WCAG 2.1 AA standards. |
| **P1 (High)** | **Research Discoverability** | Research domains buried inside secondary sub-routes. | Built dedicated, scannable **Research Pillar cards** featuring metadata tags, hover elevations, and concise domain descriptions directly on the homepage. |
| **P1 (High)** | **Accessibility & Semantics** | Missing semantic landmarks and keyboard focus rings. | Structured using semantic HTML5 tags, Radix UI accessible primitives, and explicit `:focus-visible` outlines for full screen-reader and keyboard compliance. |
| **P2 (Medium)** | **Hero Engagement** | Flat, static imagery failing to communicate computational intelligence. | Integrated a lightweight **Three.js / React Three Fiber** dynamic mesh canvas to visually symbolize neural resonance and distributed AI networks. |
| **P2 (Medium)** | **Institutional Partners** | Low-resolution, unevenly stacked logos at the bottom of the page. | Designed an evenly proportioned, responsive grid showcasing verified partner organizations and affiliations (AAU / CTBE). |

---

## 2. Design & Technical Decisions

### Architectural Stack Rationale

```text
├── Next.js (App Router) → Server-Side Rendering (SSR) & optimized static asset delivery
├── TypeScript → Strict compile-time interface definitions and schema safety
├── Tailwind CSS → Zero-runtime CSS bloat and tokenized utility styling
├── Radix UI Primitives → Headless, unstyled accessible UI logic (drawer/modal/disclosure)
├── Lucide React → Scalable, lightweight SVG icon system
└── React Three Fiber / Three.js → Hardware-accelerated canvas background for computational branding
```

* **Next.js App Router & TypeScript:** Selected for optimal web vitals, strict type safety, zero client-bundle bloat for static components, and instantaneous global edge distribution via Vercel.
* **Tailwind Utility Architecture:** Rather than introducing heavy runtime component kits, Tailwind allows explicit control over responsiveness (`sm:`, `md:`, `lg:`) and theme variables, keeping the CSS bundle small and eliminating style leaks.
* **Preserving Academic Identity & Factual Integrity:** In strict adherence to evaluation guidelines, zero projects, metrics, grants, or personnel were fabricated. The lab's identity as an AAU entity under the Center of Technology & Biomedical Engineering (CTBE) remains central.
* **High-Performance Visual Assets:** The 3D canvas is configured with an efficient `requestAnimationFrame` loop that limits CPU/GPU thread contention, ensuring page interaction and First Contentful Paint (FCP) remain rapid.

---

## 3. Getting Started & Setup Instructions

### Prerequisites
* **Node.js** (v18.17.0 or later recommended)
* Package manager: **npm**, **pnpm**, **yarn**, or **bun**

### 1. Clone Repository

```bash
git clone https://github.com/MekdelawitGebre/resonance-ai4d-lab-web.git
cd resonance-ai4d-lab-web
```

### 2. Install Dependencies

```bash
npm install 
# or: pnpm install / yarn install / bun install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to review the local build.

### Production Build & Linting

```bash
# Static analysis and code quality checks
npm run lint

# Generate production bundle
npm run build

# Preview optimized production server
npm run start
```

---

## 4. Known Limitations

To deliver a polished prototype within the strictly enforced 4-hour scope, the following engineering trade-offs were intentionally made:

* **Homepage-Scoped Routing:** Deep subpages (e.g., individual research project dossiers, individual researcher biographies) are mocked or integrated via page anchor links rather than complete multi-page routes.
* **Client-Side State Storage:** Dynamic filters and content blocks leverage strongly typed TypeScript schemas rather than live querying a headless CMS or external REST/GraphQL API.
* **Application Intake:** The "Get Involved" call-to-action redirects to the existing institutional channels rather than processing inputs into an active transactional database.

---

## 5. Development Phases

```text
- Phase 1: Diagnostic Site Audit & Information Architecture Wireframing
- Phase 2: Project Initialization (Next.js, TypeScript, Tailwind, Token Setup)
- Phase 3: Core Component Implementation (Navbar, Hero 3D, Research, Partners, CTA)
- Phase 4: Responsive Breakpoint Optimization & WCAG a11y Auditing
- Phase 5: Vercel Production Deployment, Git History Curation & Documentation
```

---

## 6. AI and Development-Tool Disclosure

In accordance with the transparency instructions for this evaluation:

### Tools Employed:
* **Visual Studio Code:** Primary IDE with TypeScript, ESLint, and Tailwind CSS IntelliSense.
* **Google Gemini:** Utilized as an AI pair-programmer to accelerate rapid prototyping, generate initial boilerplate structures for responsive flex/grid layouts, draft TypeScript interfaces, and refine technical documentation structure.
* **Vercel Platform:** Automated CI/CD edge deployment and preview environments.

### Application & Verification Workflow:
* **Rapid Prototyping:** Gemini was tasked with outlining component scaffolding for the responsive mobile drawer and glassmorphic header. All resulting TSX files were manually inspected, cleaned of redundant markup, and adapted to Next.js App Router standards.
* **Factual & Copy Control:** Output was strictly constrained to verified facts extracted from `https://sites.google.com/aait.edu.et/resonance-lab`. No suggested marketing placeholders, unverified projects, or external accolades were accepted.
* **Cross-Device Testing:** The UI layout and viewport reflow were independently verified and debugged using Chrome DevTools across various viewport widths (375px mobile, 768px tablet, 1440px desktop).

### Suggestions Evaluated & Rejected:
* **Heavy Component Libraries:** Rejected suggestions to install UI component suites (MUI / Mantine / Chakra) to prevent unnecessary bundle weight and ensure clean, customized design system tokens.
* **Commercial SaaS Terminology:** Rejected AI-suggested commercial buzzwords ("next-gen AI solutions for enterprise") in favor of accurate, rigorous academic language suited for an institutional research center at Addis Ababa University.
