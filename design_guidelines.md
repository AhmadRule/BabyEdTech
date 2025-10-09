# MyBaby Landing Page - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from Famly.co and MyBrightwheel.com - modern EdTech platforms with warm, friendly, and professional aesthetics. The design balances playful elements suitable for nursery/kindergarten context while maintaining professional credibility for school administrators.

**Core Principle**: Bilingual-first design with seamless Arabic/English experience and RTL support.

## Color Palette

### Primary & Brand Colors
- **Primary**: 184 100% 47% (MyBaby Blue #00ADEF)
- **Secondary Palette**:
  - Light Blue: 221 100% 77% (#89AEFF)
  - Coral: 14 82% 62% (#EE7248)
  - Lime: 69 96% 77% (#DFFC8E)
  - Pink: 308 74% 80% (#F4AEDF)
  - Forest Green: 152 51% 32% (#2B885C)
  - Charcoal: 20 2% 20% (#333231)

### Background Treatment
- Subtle pastel gradients using secondary colors at low opacity
- Incorporate MyBaby patterns as background elements
- Soft shadows throughout for depth

## Typography

### Arabic Typography
- **Primary**: Cairo or Noto Kufi Arabic (Google Fonts)
- Clean, modern, highly legible for RTL layouts

### English Typography
- **Primary**: Poppins or Nunito (Google Fonts)
- Friendly, rounded letterforms matching brand personality

### Hierarchy
- Hero Arabic headline: Bold, 3xl-4xl desktop, 2xl mobile
- Hero English subheadline: Semibold, xl-2xl desktop, lg mobile
- Body text: Regular 400-500 weight, base-lg sizes
- Bilingual display: Stack Arabic above English for primary messaging

## Layout System

### Spacing Primitives
Use Tailwind units: **4, 6, 8, 12, 16, 20, 24** for consistent rhythm
- Section padding: py-16 md:py-24
- Card padding: p-6 md:p-8
- Element spacing: gap-4, gap-6, gap-8

### Grid System
- Container: max-w-7xl mx-auto px-4 md:px-8
- Feature cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Responsive breakpoints: Mobile-first, stack to single column on mobile

### RTL Support
- Automatic layout flip for Arabic
- Mirror all directional properties (padding, margin, text-align)
- Icons and illustrations flip horizontally in RTL

## Component Library

### Navigation (Sticky)
- Logo: English version only, left-aligned (right in RTL)
- Menu items: Home | Features | For Schools | For Parents | Contact Us
- Language toggle: AR/EN switch (flag icons or text-based)
- Background: White with subtle shadow on scroll
- Mobile: Hamburger menu with slide-in drawer

### Hero Section
- **Layout**: 60/40 split (text/illustration) on desktop, stacked mobile
- **Headlines**: 
  - Arabic primary: "الحضانة بجوالك" (bold, large)
  - English secondary: "Your Nursery, In Your Pocket." (below Arabic)
- **Subtext**: Bilingual description, max-w-2xl
- **CTAs**: Dual buttons - "Get a Demo" + "جرّب مجاناً" (primary + outline variants)
- **Illustration**: Hero image showing happy parents, teachers, children with tablets/phones
- **Background**: Gradient with pastel secondary colors + pattern overlay

### Features Section (4 Cards)
- **Style**: Rounded-2xl cards with soft gradients
- **Content per card**:
  - Icon (custom or from library)
  - Bilingual title (Arabic/English stacked)
  - Brief description
- **Hover**: Subtle lift animation (translate-y-1, shadow increase)
- **Colors**: Each card uses different secondary color as accent

### Testimonials
- **Layout**: Carousel/slider with 1-2 visible cards
- **Card design**: Rounded, pastel backgrounds, user avatar
- **Content**: Quote in Arabic OR English, name, role
- **Navigation**: Subtle dots indicator

### CTA Section
- **Background**: Full-width gradient or solid secondary color
- **Content**: Centered bilingual headline + description
- **Button**: Large "Schedule a Demo" / "احجز عرض توضيحي"
- **Padding**: py-20 md:py-28 for presence

### Footer
- **Layout**: 3-column on desktop (Contact | Links | Social), stacked mobile
- **Contact**: info@mybabyapp.net | +966 54 332 4707
- **Social**: Instagram, LinkedIn icons (brand colors on hover)
- **Copyright**: "© 2025 MyBaby | Made with 💙 in Saudi Arabia"

## Images

### Hero Image (Required)
Large illustration/photo showing nursery context: parents using app, teacher dashboard view, happy children. Style should be modern, friendly, with MyBaby color accents. Position: Right side desktop, below text on mobile.

### Feature Icons
Use icon library (Heroicons or similar) with MyBaby brand colors applied.

### Testimonial Avatars
Circular user photos or illustrated avatars with diverse representation.

## Animations & Interactions

- **Scroll Animations**: Use AOS library for fade-in, slide-up effects on sections
- **Hover States**: Subtle transforms on cards, buttons (scale, shadow)
- **Language Toggle**: Smooth transition with fade effect during content swap
- **Mobile Menu**: Slide-in from right (left in RTL) with backdrop

## Technical Requirements

- Fully responsive: Mobile-first approach
- RTL automatic switching on language toggle
- Smooth scroll behavior for anchor links
- Favicon using MyBaby primary color
- Meta tags optimized for SEO with bilingual content