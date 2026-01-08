# Quick Reference Guide - Premium Design System

## Component Quick Start

### HeroSection
```tsx
import HeroSection from '@/components/HeroSection';

export default function Page() {
  return <HeroSection />;
}
```

### ListingHeroSection
```tsx
import ListingHeroSection from '@/components/ListingHeroSection';

export default function BuyPage() {
  return (
    <ListingHeroSection
      title="Properties for Sale"
      subtitle="..."
      defaultTab="buy"
      propertyCount={2847}
    />
  );
}
```

### CTASection
```tsx
import CTASection from '@/components/CTASection';

export default function Page() {
  return (
    <CTASection
      title="Ready to Get Started?"
      primaryButtonText="Sign Up"
      primaryButtonHref="/register"
    />
  );
}
```

---

## Color Quick Reference

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Emerald-500 | #10b981 | Primary buttons |
| Cyan-500 | #06b6d4 | Accents |
| Violet-500 | #a855f7 | Gradients |
| Fuchsia-500 | #d946ef | Gradients |

### Dark Backgrounds
| Color | Hex | Usage |
|-------|-----|-------|
| Slate-900 | #0f172a | Dark sections |
| Indigo-900 | #312e81 | Gradients |

### Neutrals
| Color | Hex | Usage |
|-------|-----|-------|
| White | #ffffff | Text, buttons |
| Gray-300 | #d1d5db | Subtext |
| Gray-400 | #9ca3af | Secondary text |

---

## Tailwind Class Cheat Sheet

### Buttons
```tsx
// Primary
className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold hover:scale-105 hover:-translate-y-1 transition-all duration-300"

// Secondary
className="px-8 py-4 rounded-full border-2 border-white text-white hover:bg-white/10 transition-all duration-300"
```

### Cards
```tsx
className="bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
```

### Images
```tsx
className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
```

### Gradients
```tsx
// Violet to Cyan
className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500"

// Dark section
className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"
```

### Glass Effect
```tsx
className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full"
```

### Responsive Text
```tsx
className="text-4xl sm:text-5xl lg:text-6xl font-black"
```

---

## Animation Quick Reference

### Button Hover
```
Scale:     hover:scale-105       (5% growth)
Lift:      hover:-translate-y-1  (4px up)
Transition: transition-all duration-300
```

### Icon Hover
```
Rotate:    group-hover:rotate-12 (rotate 12°)
Slide:     group-hover:translate-x-1 (4px right)
```

### Image Hover
```
Zoom:      group-hover:scale-105
Transition: transition-transform duration-300
```

---

## Responsive Breakpoints

```
Mobile:  < 640px
Tablet:  640px - 1024px
Desktop: > 1024px
```

### Usage Pattern
```tsx
// Mobile first, then override
className="text-4xl sm:text-5xl lg:text-6xl"
//         mobile    tablet    desktop
```

---

## Typography Quick Reference

### Headings
```
H1: text-6xl font-black        (60px, 900 weight)
H2: text-5xl font-black        (48px, 900 weight)
H3: text-2xl font-bold         (24px, 700 weight)
H4: text-lg font-bold          (18px, 700 weight)
```

### Body
```
Large:   text-xl leading-relaxed   (20px)
Regular: text-base leading-relaxed (16px)
Small:   text-sm leading-relaxed   (14px)
Micro:   text-xs                   (12px)
```

---

## Spacing Quick Reference

### Padding
```
Small:  p-4 (16px)
Medium: p-6 (24px)
Large:  p-8 (32px)
XL:     p-12 (48px)
```

### Gaps
```
Mobile:  gap-4 (16px)
Tablet:  gap-6 (24px)
Desktop: gap-8 (32px)
```

### Sections
```
Mobile:  py-16 py-20 (64px - 80px)
Tablet:  py-24 (96px)
Desktop: py-28 (112px)
```

---

## Common Patterns

### Full-Width Gradient Background
```tsx
<div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
  {/* Content */}
</div>
```

### Glassmorphism Container
```tsx
<div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-xl">
  {/* Content */}
</div>
```

### Avatar Stack
```tsx
<div className="flex -space-x-3">
  {avatars.map((avatar) => (
    <img
      key={avatar.id}
      src={avatar.src}
      className="w-12 h-12 rounded-full ring-2 ring-slate-900"
    />
  ))}
</div>
```

### Hover Lift Effect
```tsx
<div className="transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
  {/* Content */}
</div>
```

### Gradient Text
```tsx
<span className="bg-gradient-to-r from-violet-500 to-cyan-500 bg-clip-text text-transparent">
  Premium Text
</span>
```

---

## Icons (Lucide React)

### Common Icons
```
Search       - Search functionality
MapPin       - Location input
Home         - Buy properties
Key          - Rent properties
Building2    - Commercial
CheckCircle  - Features/Benefits
Users        - Team/Agents
Star         - Ratings
ArrowRight   - CTAs
Sliders      - Filters
Hammer       - New projects
Zap          - Speed/Easy
Shield       - Security
```

### Usage
```tsx
import { Search, MapPin, ArrowRight } from 'lucide-react';

<Search className="w-5 h-5 text-white" />
```

---

## Performance Tips

### Avoid
```
❌ Inline styles
❌ External animation libraries
❌ Large unoptimized images
❌ Unnecessary renders
```

### Prefer
```
✅ Tailwind utility classes
✅ CSS transitions (300ms)
✅ CDN images (Unsplash)
✅ React hooks (useState)
```

---

## Responsive Testing Breakpoints

### Devices to Test
```
Mobile:
  - iPhone SE (375px)
  - iPhone 12 (390px)
  - Galaxy S21 (360px)

Tablet:
  - iPad (768px)
  - iPad Air (820px)

Desktop:
  - MacBook (1440px)
  - 1080p (1920px)
  - 2K (2560px)
```

### Browser DevTools
```
Chrome:   F12 → Ctrl+Shift+M
Firefox:  F12 → Ctrl+Shift+M
Safari:   Cmd+Opt+I → Responsive Design Mode
```

---

## Common Issues & Fixes

### Issue: Buttons overlapping on mobile
**Fix**: Change `flex-row` to `flex-col sm:flex-row`

### Issue: Text too large on mobile
**Fix**: Use `text-3xl sm:text-4xl lg:text-6xl`

### Issue: Images not loading
**Fix**: Check URLs and image CDN paths

### Issue: Animations laggy
**Fix**: Use `transition-transform` instead of `transition-all`

### Issue: Colors look wrong
**Fix**: Check color opacity (white/10, white/20, etc.)

---

## File Locations

```
Components:
  - /components/HeroSection.tsx
  - /components/ListingHeroSection.tsx
  - /components/CTASection.tsx

Pages:
  - /app/page.tsx (homepage)
  - /app/buy/page.tsx
  - /app/rent/page.tsx
  - /app/commercial/page.tsx

Documentation:
  - HERO_SECTION_DOCS.md
  - CTA_COMPONENT_DOCS.md
  - CTA_RESPONSIVE_GUIDE.md
  - DESIGN_SYSTEM_SUMMARY.md
```

---

## Color Combinations

### Primary Gradient
```
from-violet-500 via-fuchsia-500 to-cyan-500
```

### Dark Section
```
from-slate-900 via-indigo-900 to-slate-900
```

### Button (Primary)
```
from-emerald-500 to-cyan-500
Hover: from-emerald-600 to-cyan-600
```

### Glass Background
```
bg-white/10 backdrop-blur-xl border-white/20
```

---

## Accessibility Checklist

- [x] Semantic HTML
- [x] Heading hierarchy
- [x] Color contrast ≥ 4.5:1
- [ ] ARIA labels (add as needed)
- [ ] Focus states (add as needed)
- [ ] Keyboard navigation (add as needed)

---

## Testing Checklist

- [ ] Mobile responsive (375px - 640px)
- [ ] Tablet responsive (640px - 1024px)
- [ ] Desktop responsive (1024px+)
- [ ] All hover effects work
- [ ] Animations smooth (60fps)
- [ ] Colors display correctly
- [ ] Images load properly
- [ ] No console errors
- [ ] Buttons clickable
- [ ] Links work

---

## Resources

### Tailwind Documentation
- Colors: tailwindcss.com/docs/customizing-colors
- Spacing: tailwindcss.com/docs/customizing-spacing
- Responsive: tailwindcss.com/docs/responsive-design

### Lucide Icons
- Icons: lucide.dev
- React: lucide.dev/guide/packages/lucide-react

### Design References
- Stripe: stripe.com
- Vercel: vercel.com
- Linear: linear.app

---

**Last Updated**: January 2026
**Version**: 1.0
**Status**: Production Ready
