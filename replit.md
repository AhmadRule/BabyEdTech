# MyBaby - EdTech SaaS Landing Page

## Project Overview
A fully responsive bilingual (Arabic/English) landing page for MyBaby, an EdTech SaaS platform. The design is inspired by Famly.co and MyBrightwheel.com, featuring modern UI with RTL support for Arabic language.

## Key Features
- Bilingual support (English/Arabic) with RTL layout switching
- Responsive design optimized for all devices
- Admin panel for logo customization via file upload
- MyBaby brand color palette
- Modern components: Hero, Features, Testimonials, Social Proof, CTA, Footer

## Technology Stack
- Frontend: React + TypeScript + Wouter + TanStack Query
- Backend: Express + Node.js
- UI Components: Shadcn/ui + Tailwind CSS
- File Upload: Multer
- Authentication: Session-based (cookie-parser)

## Brand Colors
- Primary: #00ADEF (Bright Blue)
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

### Important Limitations
⚠️ **In-Memory Storage**: The current implementation uses in-memory storage for:
- Admin sessions
- Branding settings (uploaded logo path)

This means:
- Sessions will be lost on server restart (users need to re-login)
- Custom logo will revert to default on server restart
- Uploaded files remain in `server/uploads/` but the reference is lost

To persist data across restarts, consider:
1. Using the built-in PostgreSQL database (recommended)
2. Implementing file-based storage
3. Using external storage services

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
│   └── Footer.tsx        # Footer
└── contexts/
    └── LanguageContext.tsx # Bilingual support

server/
├── routes.ts             # API routes
├── storage.ts            # In-memory storage
├── lib/
│   └── adminAuth.ts      # Admin authentication
└── middleware/
    └── adminAuth.ts      # Auth middleware
```

## Security Notes
- Sessions are HTTP-only cookies
- File upload validation (type & size)
- Admin routes protected by session middleware
- Default credentials show warning in development

## Recent Changes
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
