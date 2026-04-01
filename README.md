# Poojan Mittapalli Portfolio

A professional portfolio website showcasing enterprise cloud solutions, full-stack development expertise, and photography work.

## 🎯 About

Oracle Cloud Analyst & Full Stack Developer specializing in enterprise systems, AI/ML solutions, and modern cloud technologies. This portfolio showcases:

- **Enterprise Systems**: Oracle Fusion Cloud (HCM & Procurement), OTBI, BI Publisher
- **Data Analytics**: SQL-based reporting, predictive analytics, business intelligence
- **AI/ML Solutions**: Deep learning models, data-driven applications, machine learning systems
- **Backend Development**: Node.js, REST APIs, database architecture
- **Photography**: Visual Vault - a curated collection of professional photography

## 🛠 Tech Stack

- **Framework**: Next.js 16.2.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Architecture**: App Router with src directory structure
- **Deployment Ready**: Optimized for Vercel/modern hosting platforms

## 📋 Features

- ✅ Responsive dark theme design (inspired by Jake Sinclair)
- ✅ Professional hero section with CTAs
- ✅ Services showcase (6 expertise areas)
- ✅ Featured projects (5 enterprise & ML projects)
- ✅ Client testimonials from Deloitte & University of Memphis
- ✅ About section with professional background
- ✅ Visual Vault photography gallery
- ✅ Contact section with social links
- ✅ SEO-optimized metadata

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The portfolio will be available at `http://localhost:3000`

### Available Commands

```bash
# Development server (with hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Main portfolio page
│   └── globals.css        # Global styles
└── components/
    ├── Nav.tsx                    # Navigation bar
    ├── HeroSection.tsx           # Hero/intro section
    ├── ServicesSection.tsx       # Services showcase
    ├── ProjectsSection.tsx       # Featured projects
    ├── AboutSection.tsx          # Professional background
    ├── TestimonialsSection.tsx   # Client testimonials
    ├── PhotographySection.tsx    # Visual Vault gallery
    └── ContactSection.tsx        # Contact & footer
```

## 🎨 Customization

### Update Your Information

Edit the following files to personalize:

- **Hero Section**: `src/components/HeroSection.tsx` - Update title, tagline, and CTAs
- **Services**: `src/components/ServicesSection.tsx` - Add/remove services
- **Projects**: `src/components/ProjectsSection.tsx` - Update project details
- **Photography**: `src/components/PhotographySection.tsx` - Add your photo galleries
- **About**: `src/components/AboutSection.tsx` - Update biography and skills
- **Contact**: `src/components/ContactSection.tsx` - Update contact info and social links

### Replace Placeholder Images

1. **Profile Picture**: Update the placeholder in `HeroSection.tsx`
   - Replace with actual image from Google Drive link provided
   
2. **Gallery Images**: Update `PhotographySection.tsx`
   - Add images from your Visual Vault Google Drive folder

### Colors & Styling

- Edit `src/app/globals.css` for global styles
- Tailwind CSS classes are used throughout for responsive design
- Current theme: Dark mode (black background, white text)

## 📱 Performance

- Next.js Turbopack for fast development builds
- Static page pre-rendering for optimal performance
- Responsive design for all devices
- SEO optimized with metadata

## 🔗 Links

- **Email**: mnspoojankumar@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/mnspoojankumar/
- **GitHub**: https://github.com/nspoojankumar
- **Resume**: [Google Drive Link](https://drive.google.com/file/d/1MYQA5vdQtEZ6n7XHdT6-ZGn_c27ipMUu/view?usp=drive_link)

## 🚢 Deployment

The portfolio is ready to deploy on:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **GitHub Pages**
- **Any Node.js hosting provider**

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## 📝 License

© 2024 Poojan Mittapalli. All rights reserved.

## 🎓 Credits

Design inspired by [Jake Sinclair](https://www.jakesinclair.ca/) - a professional creative director's portfolio.

---

**Built with Next.js, TypeScript, and Tailwind CSS** ✨

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
