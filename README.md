# Mert Güneş — Professional Portfolio

## Mechatronics Engineer • AI Automation Developer • Vibe Coder

[**Live Demo**](https://mertgunes.com) • [**Interactive Travel Log**](https://dunya.mertgunes.com) • [**Key Features**](#-key-features) • [**Getting Started**](#-getting-started)

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css) ![Three.js](https://img.shields.io/badge/Three.js-R3F-white?style=for-the-badge&logo=three.js) ![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.18-purple?style=for-the-badge&logo=framer) ![Groq](https://img.shields.io/badge/Groq-AI-orange?style=for-the-badge)

---

## 🚀 Overview

Welcome to the source code of my personal portfolio. This project is a modern, high-performance web application designed to showcase my journey as a **Mechatronics Engineer** transitioning into **AI-Assisted Development (Vibe Coding)**.

Built with an **Architectural Minimalist aesthetic**, it features advanced UI patterns like **Brand-Tinted Bento Grids**, a **high-performance canvas-based Squares background**, and smooth **Gooey Nav** animations. The entire application is fully responsive, bilingual (TR/EN), and optimized for performance via GPU-accelerated animations and efficient asset management.

## ✨ Key Features

### 🎨 Advanced UI/UX Design

- **Vibe Coder Persona**: Specialized "Skills" section showcasing the AI-assisted development stack (Antigravity, Ollama, n8n, etc.).
- **Brand-Tinted Bento Grid**: A redesigned Certifications section with interactive, color-blooming cards that respond to brand identities (IBM, McKinsey, etc.).
- **Gooey Nav Animation**: A custom navigation system with particle-based transitions and fluid motion.
- **3D Breathing Grid**: A WebGL shader-based background using `React Three Fiber` with sine-wave vertex displacement and mouse-proximity tracking.

### 🤖 AI Portfolio Assistant (MertAI V2.0)

- **Floating Chat Widget**: A fully animated chat widget powered by **Groq** (Llama 4 Scout model) that acts as an intelligent portfolio assistant.
- **CV-Grounded Responses**: The AI answers questions strictly based on structured data (experience, skills, projects, certifications, contact) — no hallucinations.
- **Bilingual**: Automatically responds in the language of the visitor (TR/EN).
- **Persistent History**: Conversation history is preserved per session via `localStorage`.
- **Prompt Injection Protection**: Role-lock and reinforcement prompting prevent off-topic manipulation.

### 🛠️ Technical Prowess

- **Next.js 14 App Router**: Utilizing React Server Components (RSC) and optimized layouts.
- **Bilingual & Global**: Full i18n support for Turkish and English with a seamless toggle.
- **1080p & Mobile Optimization**: Pixel-perfect responsiveness across all display sizes, from high-res monitors to mobile devices.
- **Legal & GDPR Ready**: Integrated Privacy Policy, Terms of Service, and a modern Cookie Consent banner to comply with GDPR/KVKK.
- **Performance Excellence**: Optimized asset loading, optimized WebGL rendering, and automatic image compression for high Lighthouse scores.
- **Technical SEO**: Fully configured with dynamic Sitemaps, Robots.txt, and Metadata API for search engine indexing.

---

### 🛠️ Tech Stack

This project leverages a modern, type-safe stack:

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | **Next.js 14** | App Router, Server Components, Image Optimization |
| **Language** | **TypeScript** | Strict type safety for maintainable code |
| **Styling** | **Tailwind CSS** | Utility-first CSS framework with `tailwindcss-animate` |
| **3D Graphics** | **React Three Fiber** | Declarative Three.js for React, using custom WebGL shaders |
| **Animations** | **Framer Motion** | Production-ready animation library |
| **AI / Vibe Coding** | **Groq / Ollama** | High-speed LLM inference and local AI integration |
| **Legal / Compliance** | **GDPR / KVKK** | Integrated Privacy Policy & Cookie Consent banner |
| **Automation** | **n8n** | Workflow automation for repetitive tasks |
| **Email** | **Resend** | Developer-first email API |
| **Analytics** | **Vercel Analytics** | Privacy-conscious user analytics and performance monitoring |
| **Icons** | **Lucide & React Icons** | Consistent and lightweight icon sets |

---

## 📂 Project Structure

A brief overview of the directory structure:

```bash
Mert-Portfolio/
├── 📂 app/                 # Next.js App Router (Pages, Layouts, API Routes)
│   ├── 📂 api/
│   │   ├── 📂 chat/        # AI portfolio assistant endpoint (Groq / Llama 4 Scout)
│   │   └── 📂 contact/     # Contact form email endpoint (Resend)
│   ├── 📂 about/           # About Me Page
│   ├── 📂 career/          # Career Timeline Page
│   ├── 📂 certifications/  # Bento Grid Certifications Page
│   ├── 📂 contact/         # Contact Page
│   ├── 📂 projects/        # Projects Showcase Page
│   ├── 📂 services/        # Services/Offerings Page
│   └── 📂 skills/          # Vibe Coding Skills Page
├── 📂 components/          # React Components
│   ├── 📂 main/            # Section components (Hero, Skills, Projects)
│   ├── 📂 ui/              # Reusable atomic components (Buttons, Cards, Modals)
│   └── 📂 3d/              # React Three Fiber components (BreathingGrid, etc.)
├── 📂 data/                # Static data & Content (The "CMS" of the app)
│   ├── Projects.ts         # Project definitions
│   ├── Skills.ts           # Skill categories and items
│   ├── Experience.ts       # Work experience timeline
│   └── Certification.ts    # Certification data
├── 📂 public/              # Static assets
│   ├── 📂 logo/            # High-quality SVG logos
│   ├── 📂 project-img/     # Project screenshots
│   └── 📂 company-logo/    # Work/Education logos
├── 📂 context/             # React Context Providers
├── 📂 utils/               # Helper functions and motion variants
└── 📂 types/               # TypeScript type definitions
```

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **pnpm**
- **Git**

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/gunesmert67/Mert-Portfolio.git
    cd Mert-Portfolio
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3. **Configure Environment Variables:**

    Create a `.env.local` file in the root directory and add the following keys:

    ```env
    # AI Chat Assistant (Groq)
    GROQ_API_KEY=your_groq_api_key_here

    # Email Service Configuration
    RESEND_API_KEY=your_resend_api_key_here

    # Optional: Analytics
    NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
    ```

4. **Run the Development Server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📝 Content Management Guide

The content of this portfolio is designed to be easily updated without modifying the core component logic.

### Adding a New Project

1. Add your project images (cover and screenshots) to `public/project-img/`.
2. Open `data/Projects.ts`.
3. Add a new object to the `projects` array following the `Project` type definition.

---

### Updating Skills

1. Open `data/Skills.ts`.
2. Add or remove items in the respective categories (Vibe Coding, Environment, Technologies).
3. Icons are stored in `public/logo/` as SVGs for high quality.

### Adding Experience/Education

1. Open `data/Experience.ts`.
2. Add a new entry with the role, company, date, and description.

### Updating Certifications

1. Open `data/Certification.ts`.
2. Add new certification objects to the `CertificationData` array to update the Bento Grid.

### Updating Legal Content

1. Open `data/LegalContent.ts`.
2. Update the Privacy Policy or Terms & Conditions in both Turkish and English.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

Please ensure your code follows the existing style guidelines (Prettier/ESLint).

---

## 📄 License

Distributed under the **Apache-2.0 License**. See `LICENSE` for more information.

---

## 📞 Contact

**Mert Güneş**  
_Mechatronics Engineer & AI Specialist_

- 🌐 **Website**: [mertgunes.com](https://mertgunes.com)
- 💼 **LinkedIn**: [linkedin.com/in/mertgunes34](https://www.linkedin.com/in/mertgunes34/)
- 🐙 **GitHub**: [github.com/gunesmert67](https://github.com/gunesmert67)
- 📧 **Email**: [Contact via Website](https://mertgunes.com/#contact)

---

Built with ❤️ and ☕ by Mert Güneş
