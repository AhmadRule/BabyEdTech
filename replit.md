# MyBaby - EdTech SaaS Landing Page

## Project Overview
A fully responsive bilingual (Arabic/English) landing page for MyBaby, an EdTech SaaS platform. The design is inspired by Famly.co and MyBrightwheel.com, featuring modern UI with RTL support for Arabic language.

## Key Features
- Bilingual support (English/Arabic) with RTL layout switching
- Responsive design optimized for all devices
- Admin panel for logo customization via file upload
- Client logos management system
- Contact/demo request form with admin viewing
- Stakeholder value diagram showing platform ecosystem
- MyBaby brand color palette
- Modern components: Hero, Features, Testimonials, Social Proof, CTA, StakeholderValue, Footer

## Technology Stack
- Frontend: React + TypeScript + Wouter + TanStack Query
- Backend: Express + Node.js
- Database: PostgreSQL (Neon) with Drizzle ORM
- UI Components: Shadcn/ui + Tailwind CSS
- File Upload: Multer
- Authentication: Session-based (cookie-parser)

## Brand Colors
- Primary: #0682F0 (Bright Blue)
- Secondary Colors: #89AEFF, #EE7248, #DFFC8E, #F4AEDF, #2B885C, #333231

## Typography
- Arabic: Cairo (headings), Noto Kufi Arabic (body)
- English: Poppins (headings), Nunito (body)

## Admin Panel

### Access
- URL: `/admin/login`
- Default credentials (development only):
  - Username: `admin`
  - Password: `admin123`

### Production Setup
⚠️ **REQUIRED FOR PRODUCTION**: Set environment variables to secure the admin panel:
- `ADMIN_USERNAME`: Custom admin username (optional, defaults to 'admin')
- `ADMIN_PASSWORD`: Custom admin password **OR** use ADMIN_PASSWORD_HASH (required in production)
- `ADMIN_PASSWORD_HASH`: Pre-hashed password using scrypt (recommended)

**The server will refuse to start in production mode without ADMIN_PASSWORD or ADMIN_PASSWORD_HASH set.**

To generate a password hash, run:
```bash
node -e "const crypto = require('crypto'); const util = require('util'); const scrypt = util.promisify(crypto.scrypt); const salt = crypto.randomBytes(16).toString('hex'); scrypt('your-password', salt, 64).then(buf => console.log(buf.toString('hex') + '.' + salt));"
```

### Logo Management
1. Login at `/admin/login`
2. Navigate to `/admin/logo` (automatic redirect after login)
3. Upload logo file (PNG, JPEG, or SVG, max 2MB)
4. Logo will appear across all pages

### Data Persistence
✅ **PostgreSQL Database**: The application now uses persistent database storage for:
- Admin sessions (persist across restarts)
- Branding settings (custom logo path)
- Client logos
- Contact form submissions
- Kindergarten onboarding requests

**Note:** Uploaded files are stored in `server/uploads/` directory. The database stores file paths, ensuring references persist across restarts.

## Development

### Running the Project
```bash
npm run dev
```

The application runs on port 5000 (or PORT environment variable).

### File Structure
```
client/src/
├── pages/
│   ├── Home.tsx           # Landing page
│   ├── AdminLogin.tsx     # Admin login
│   └── AdminLogo.tsx      # Logo management
├── components/
│   ├── Navigation.tsx     # Header with language switcher
│   ├── Logo.tsx          # Logo component (supports custom logo)
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features with tabs
│   ├── Testimonials.tsx  # Customer testimonials
│   ├── SocialProof.tsx   # Statistics and social proof
│   ├── ClientLogos.tsx   # Client logos display
│   ├── StakeholderValue.tsx # Stakeholder ecosystem diagram
│   ├── ContactForm.tsx   # Demo request form
│   └── Footer.tsx        # Footer
└── contexts/
    └── LanguageContext.tsx # Bilingual support

server/
├── routes.ts             # API routes
├── storage.ts            # Database storage (PostgreSQL)
├── lib/
│   └── adminAuth.ts      # Admin authentication
└── middleware/
    └── adminAuth.ts      # Auth middleware

shared/
└── schema.ts             # Drizzle database schema
```

## Security Notes
- Sessions are HTTP-only cookies
- File upload validation (type & size)
- Admin routes protected by session middleware
- Default credentials show warning in development

## Kindergarten Onboarding Feature

### Overview
Free onboarding form allowing kindergartens to register for the MyBaby platform. Submissions are stored and can be reviewed by admins.

### Access
- Public URL: `/onboarding`
- Accessible via "Join Free" button on Hero section

### Features
- **Bilingual Form** (English/Arabic with RTL support)
- **Required Fields:**
  - Kindergarten Name
  - Contact Person Name
  - Email Address
  - Phone Number
  - City
  - Logo Upload (PNG/JPEG/SVG, max 2MB)
- **File Upload:** Logo with live preview
- **Form Validation:** Client-side (Zod) and server-side validation
- **Success Confirmation:** Displays thank you message with option to submit another request

### Admin Review
- Login at `/admin/login`
- View submissions via API: `GET /api/admin/kindergarten-onboardings`

### Technical Details
- **Backend:** `POST /api/kindergarten-onboarding` with multer file upload
- **Storage:** PostgreSQL database (submissions persist permanently)
- **Schema:** `kindergartenOnboarding` table with status tracking
- **Email Notification:** TODO - requires email service credentials (Resend/SendGrid/other)

### Future Enhancements
1. **Email Notification:** ⏰ **REMINDER: User wants to enable this later** - Once credentials are provided (Resend/SendGrid/SMTP), tech team will receive email alerts for new onboarding requests
2. **Status Workflow:** Add approval/rejection status management
3. **Admin Dashboard:** Add full admin interface to view and manage all submissions

## Deployment Checklist

### Required for Production
1. ✅ **Database:** PostgreSQL configured and working
2. ⚠️ **Admin Password:** Set `ADMIN_PASSWORD` or `ADMIN_PASSWORD_HASH` in deployment secrets
3. ⚠️ **Session Secret:** Set `SESSION_SECRET` in deployment secrets (for cookie signing)
4. ✅ **Database Connection:** Using HTTP-based Neon driver (no WebSocket required)
5. ✅ **File Uploads:** Multer configured with size and type validation
6. ✅ **Error Handling:** All routes have proper error handling

### Deployment Steps
1. Click "Publish" button in Replit
2. Configure "Published app secrets":
   - `ADMIN_PASSWORD`: Your secure admin password
   - `SESSION_SECRET`: Random string for cookie signing (generate using: `openssl rand -base64 32`)
   - `DATABASE_URL`: Auto-configured by Replit
3. Verify deployment URL is accessible
4. Test admin login with production credentials
5. Upload logo via admin panel

### Security Notes
- ⚠️ Default admin credentials (admin/admin123) only work in development
- Production deployment will FAIL if `ADMIN_PASSWORD` or `ADMIN_PASSWORD_HASH` is not set
- All uploaded files are validated (type & size limits)
- Admin sessions use HTTP-only cookies
- All sensitive routes require authentication

## Recent Changes
- 2025-10-22: **Production readiness update:**
  - ✅ Implemented PostgreSQL database for all data persistence
  - ✅ Fixed database connection to use HTTP instead of WebSocket (Neon compatibility)
  - ✅ All features now persist across server restarts (logo, sessions, submissions)
  - ✅ Updated primary brand color to #0682F0
  - ✅ Restored Hero section with "Smart Management = More Time" and "360° Degree Management"
  - 📝 Added deployment checklist and production requirements documentation
- 2025-10-13: Applied Liquid Glass Button effect to "Join Free" button:
  - Integrated custom LiquidButton component with advanced glass morphism effect
  - Features liquid-like distortion using SVG filters (feTurbulence, feDisplacementMap)
  - Maintains vibrant orange to golden sunset gradient (#FF6B35 to #F7931E)
  - Pulsing glow effect with animated Gift and Sparkles icons
  - Multi-layered shadows for 3D depth effect
  - Smooth hover scale animation (1.05x on hover)
  - Creates premium, eye-catching appearance that stands out
- 2025-10-12: Added kindergarten onboarding feature:
  - Free registration form at `/onboarding` for kindergartens to join MyBaby platform
  - Bilingual form (English/Arabic) with RTL support
  - File upload for kindergarten logo with live preview
  - Form fields: kindergarten name, contact name, email, phone, city, logo
  - Client-side and server-side validation using Zod
  - Success confirmation page with option to submit another request
  - Admin can view all submissions via protected API endpoint
  - "Join Free" button added to Hero section for easy access
  - In-memory storage (submissions persist until server restart)
  - Email notification system ready but requires credentials (Resend/SendGrid/SMTP)
  - Note: User dismissed Resend integration setup - email functionality can be added later with manual credentials
- 2025-10-12: Added StakeholderValue section to landing page:
  - Central hub-and-spoke diagram showing MyBaby platform ecosystem
  - Animated central hub with multiple layered motion effects:
    - Pinging glow ring expanding outward (3s cycle)
    - Rotating dashed border ring
    - Smooth circular clockwise floating animation on main circle (8s cycle)
    - Pulsing inner glow (2s cycle)
  - 4 stakeholder cards: Parents, Teachers, Administrators, Better Care
  - Each card displays 4 key benefits with checkmark icons
  - RTL-aware SVG connecting lines that adjust based on language
  - Full bilingual support with Arabic translations
  - Positioned before Contact Form to reinforce value proposition
  - Gradient backgrounds matching MyBaby brand colors
  - Responsive layout with mobile-first design
- 2025-10-09: Added smooth moving graphics throughout the landing page:
  - Custom CSS animations: float, float-slow, float-diagonal, slide-horizontal, rotate-slow, scale-pulse
  - Hero section: Large floating circles, small shapes (Circle, Square, Triangle), sliding dots, rotating borders
  - Features section: Floating gradient blobs, shapes (Hexagon, Star), rotating decorative circles
  - PlatformShowcase section: Floating gradient orbs, icons (Zap, Cloud), sliding dots
  - CTA section: Large floating orbs, icons (Sparkle, Rocket), sliding dots
  - Testimonials section: Floating blobs, icons (Heart, Star), ping dots
  - All animations use staggered delays (6-10s cycles) for smooth, professional movement
  - Decorative elements use pointer-events-none to avoid blocking user interaction
- 2025-10-09: Reverted to clean, professional design (inspired by Brightwheel):
  - Removed #0183F1 background from Hero (restored subtle gradient)
  - Removed "Made with 💙 in Saudi Arabia" badge for cleaner aesthetic
  - Removed all device mockups (iPhone, tablet/coffee images)
  - Simplified Hero section with centered text layout
  - Platform Showcase now displays 4 centered cards (no mockup images)
  - Kept subtle motion graphics (gradients, pulse animations, hover effects)
  - Numbers always display in English (Western numerals) even when Arabic language is selected
- 2025-10-09: Implemented admin logo customization feature with file upload
- Fixed multer error handling to prevent server crashes
- Added security warnings for default admin credentials
- Improved error handling for file upload edge cases
