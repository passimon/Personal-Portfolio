# Frontend Developer Portfolio

A sleek, responsive Next.js portfolio showcasing projects, skills, and a contact section with smooth animations powered by Framer Motion and styled with Tailwind CSS.

---

## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running Locally](#running-locally)  
  - [Building for Production](#building-for-production)  
- [Project Structure](#project-structure)  
- [Customizing](#customizing)  
- [Deployment](#deployment)  
- [License](#license)  
- [Author](#author)  

---

## Demo

Live demo available at:  
https://psimon.vercel.app

![Portfolio Screenshot](/public/og-image.jpg)

---

## Features

- 🎨 Modern, responsive design using Tailwind CSS  
- 🚀 Fast performance with Next.js (SSR/SSG)  
- 🔥 Smooth scroll-triggered animations via Framer Motion  
- 🎯 SEO-friendly Metadata & Open Graph tags  
- 📱 Mobile-first and accessible  
- 💌 Interactive contact section with mailto link  
- 🖼️ Optimized images via Next.js `<Image>`  
- 🔗 Easy to customize: themes, fonts, content  

---

## Tech Stack

- **Framework:** Next.js 14+  
- **Language:** TypeScript / JavaScript  
- **Styling:** Tailwind CSS  
- **Animation:** Framer Motion  
- **Fonts:** Google Fonts (Geist Sans, Geist Mono)  
- **Image Optimization:** Next.js `<Image>`  
- **Deployment:** Vercel (recommended)  

---

## Getting Started

### Prerequisites

- Node.js ≥ 18  
- npm or Yarn  

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/portfolio-nextjs.git
cd portfolio-nextjs

# Install dependencies
npm install
# or
yarn
```

### Running Locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

---

## Project Structure

```
.
├── public
│   ├── grid.svg
│   ├── maproute.gif
│   ├── ping.gif
│   ├── nutrition.gif
│   ├── calculator.gif
│   └── og-image.jpg
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── ContactSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── SkillsSection.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── metadata.ts
│   └── styles
│       └── globals.css
├── .gitignore
├── next.config.js
├── package.json
└── README.md
```

- `layout.tsx` – Root layout with Google Fonts and metadata.  
- `page.tsx` – Entry point that renders the three main sections.  
- `components/` – Reusable React components for each section.  

---

## Customizing

1. **Metadata**  
   Edit `metadata` in `src/app/metadata.ts` (or inline in `layout.tsx`) for title, description, keywords, Open Graph, robots settings.

2. **Fonts**  
   Adjust the Google Font imports in `layout.tsx` or switch to your preferred fonts.

3. **Colors & Styles**  
   Update Tailwind config (`tailwind.config.js`) or override CSS in `globals.css`.

4. **Projects & Skills**  
   Modify the `projects` and `skills` arrays in `ProjectsSection.tsx` and `SkillsSection.tsx`.

5. **Contact Link**  
   Change the `mailto:` link in `ContactSection.tsx` to your email address.

---

## Deployment

This project is optimized for Vercel:

1. Push your code to a GitHub repository.
2. Import the repo in Vercel: https://vercel.com/new.
3. Vercel will auto-detect Next.js and deploy your site.

Alternatively, you can deploy to Netlify, Cloudflare Pages, or your own server following their Next.js guides.

---

## License

This project is open source and available under the MIT License. See [LICENSE](LICENSE) for details.

- [GitHub](https://github.com/your-username)  
- [LinkedIn](https://linkedin.com/in/your-profile)  

Feel free to reach out for collaborations or inquiries!
