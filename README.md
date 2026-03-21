# NoseFlow

E-commerce site for NoseFlow — a modern breathing optimisation brand selling medical-grade silicone nasal dilators to improve airflow, sleep, and performance.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles & Tailwind theme
│   ├── layout.tsx        # Root layout with fonts & metadata
│   └── page.tsx          # Homepage (composes all sections)
├── components/
│   ├── Navbar.tsx        # Top navigation bar
│   ├── Hero.tsx          # Hero section with CTA
│   ├── BenefitsTicker.tsx # Scrolling benefits bar
│   ├── StatsBar.tsx      # Product stats/highlights
│   ├── ProductShowcase.tsx # Product details & size selector
│   ├── ScienceSection.tsx # Tabbed education section
│   ├── Testimonials.tsx  # Customer reviews
│   ├── CtaBanner.tsx     # Call-to-action banner
│   └── Footer.tsx        # Footer with links & email signup
public/
└── images/               # Product & brand images go here
```
