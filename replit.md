# MyBaby - EdTech SaaS Landing Page

### Overview
MyBaby is an EdTech SaaS platform, and this project delivers its fully responsive, bilingual (Arabic/English) landing page. Inspired by Famly.co and MyBrightwheel.com, the platform features a modern UI with RTL support for Arabic, an admin panel for content management, and a kindergarten onboarding system. The project aims to provide a robust and engaging online presence for MyBaby, targeting the educational technology market.

### User Preferences
- I want iterative development.
- I prefer detailed explanations.
- Ask before making major changes.
- Email notification for kindergarten onboarding is a future enhancement, and the user dismissed the Resend integration setup. This functionality can be added later with manual credentials.

### System Architecture

**UI/UX Decisions:**
- **Bilingual Support:** Arabic (default) and English with RTL layout switching. Language preference persists via localStorage.
- **Responsive Design:** Optimized for all devices.
- **Branding:** MyBaby brand color palette is used (Primary: #0682F0). Typography includes Cairo/Noto Kufi Arabic for Arabic and Poppins/Nunito for English. Custom favicon featuring MyBaby branding in primary brand color.
- **Modern Components:** Hero, Features, Testimonials, Social Proof, CTA, StakeholderValue, Footer.
- **Animations:** Subtle motion graphics like floating circles, gradient blobs, and pulsing elements are used for a professional aesthetic.
- **Kindergarten Onboarding:** Bilingual form with logo upload, live preview, and validation.
- **Admin Panel:** Secure login, logo customization, and statistics management for the landing page.

**Technical Implementations:**
- **Frontend:** React, TypeScript, Wouter (for routing), TanStack Query (for data fetching), Shadcn/ui, and Tailwind CSS.
- **Backend:** Express.js and Node.js.
- **Database:** PostgreSQL (Neon) with Drizzle ORM for persistent storage of admin sessions, branding, site statistics, client logos, contact forms, and onboarding requests.
- **File Upload:** Multer for handling file uploads (e.g., logos).
- **Authentication:** Session-based authentication using `cookie-parser` for the admin panel.
- **Security:** HTTP-only cookies for sessions, file upload validation, and protected admin routes. Production deployments require secure environment variables for admin credentials and session secrets.
- **Data Persistence:** All dynamic content (logos, statistics, form submissions) is stored in PostgreSQL. Uploaded files are stored in `server/uploads/`.

**Feature Specifications:**
- **Language Switcher:** Allows users to toggle between Arabic and English, with preference stored in `localStorage`.
- **Admin Panel:** Accessible at `/admin/login`. Manages custom logo uploads (PNG, JPEG, SVG, max 2MB) and editable statistics (Nurseries Count, Happy Parents Count, App Store Rating).
- **Kindergarten Onboarding:** Public form at `/onboarding` for kindergartens to register, capturing details like name, contact, email, phone, city, and logo.
- **Stakeholder Value Diagram:** Interactive hub-and-spoke diagram illustrating MyBaby's ecosystem and benefits for parents, teachers, administrators, and better care.
- **Auto-Scroll Testimonials:** Testimonials carousel automatically advances every 5 seconds with smooth fade-in transitions. Auto-scroll pauses when user hovers over the section and resumes when mouse leaves.

### External Dependencies
- **PostgreSQL (Neon):** Database for all persistent data storage.
- **Multer:** Node.js middleware for handling `multipart/form-data`, primarily for file uploads.
- **Wouter:** A tiny (~1.5KB) routing library for React.
- **TanStack Query:** For server state management and data fetching in the frontend.
- **Shadcn/ui:** UI component library.
- **Tailwind CSS:** Utility-first CSS framework.