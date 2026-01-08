# Agent Card Visual Guide

## Clean Card Design: Image + Content Separation

```
╔══════════════════════════════════════╗
║                                      ║
║     AGENT PORTRAIT IMAGE             ║
║     (3:4 Aspect Ratio)               ║
║     Clean, No Text Overlays          ║
║                                      ║
║     ┌────────────────────────────┐   ║
║     │ ⭐ TOP AGENT (if rating≥4.8) │   ║  ← Always visible
║     └────────────────────────────┘   ║
║                                      ║
║     Hover: Image scales to 110%      ║
║     Duration: 700ms ease-out         ║
║                                      ║
╚══════════════════════════════════════╝
┌──────────────────────────────────────┐
│                                      │
│  Priya Sharma                        │  ← Name: text-xl, bold
│                                      │
│  ┌────────────────────────────────┐  │
│  │  LUXURY                        │  │  ← Specialty badge
│  └────────────────────────────────┘  │
│                                      │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │  ← Divider
│                                      │
│  ⭐⭐⭐⭐⭐ 4.9 (284)            │  ← Rating: Always visible
│                                      │
│  • 12+ years experience              │  ← Stats with accent dots
│  • 2 active listings                 │
│                                      │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │  ← Divider
│                                      │
│  ┌────────────────────────────────┐  │
│  │  CONTACT (Amber-500)           │  │  ← Primary CTA
│  │         → (Arrow icon)         │  │     Hover: shadow-md
│  └────────────────────────────────┘  │
│                                      │
│  ┌──────────────┬──────────────────┐ │
│  │  ☎ CALL     │  ✉ EMAIL        │ │  ← Secondary actions
│  └──────────────┴──────────────────┘ │     Hover: bg-slate-200
│                                      │
│  Hover card: -translate-y-1          │  ← Card lifts slightly
│  Shadow: sm → xl                     │     on hover
│                                      │
└──────────────────────────────────────┘
```

## Information Hierarchy

### Always Visible (Base State)
```
✅ Portrait image
✅ Top Agent badge
✅ Agent name
✅ Specialty
✅ Star rating + review count
✅ Years of experience
✅ Active listings count
✅ All CTA buttons
```

**Key Point:** No information is hidden behind hover states or overlays. Everything is immediately readable.

---

## Responsive Sizing

### Mobile (0-640px)
```
Full width card
Single column layout
Buttons full width
All text readable
Touch-friendly: 44px+ button heights
```

### Tablet (640-1024px)
```
Two-column grid
gap: 6-8px
Comfortable spacing
Text sized appropriately
```

### Desktop (1024px+)
```
Three-column grid
gap: 8px
Maximum width: 7xl container
Professional spacing
```

---

## Color Breakdown

### Text Hierarchy
```
Primary Text (Name)          → slate-900 dark:white        (text-xl bold)
Secondary Text (Specialty)   → amber-600 dark:amber-400    (text-xs uppercase)
Tertiary Text (Stats)        → slate-700 dark:slate-300    (text-sm)
Muted Text (Count)           → slate-500 dark:slate-400    (text-xs)
```

### Interactive Elements
```
Primary CTA (Contact)        → bg-amber-500 hover:amber-600
Secondary CTA (Call/Email)   → bg-slate-100 dark:bg-slate-700
Badges (Specialty)           → bg-amber-50 dark:bg-amber-900/30
Dividers                     → bg-slate-100 dark:bg-slate-700
```

---

## Interaction States

### Default State
```
Card: bg-white dark:bg-slate-800
Shadow: shadow-sm
Image: 1.0 scale
Text: slate-900 dark:white
```

### Hover State (Card)
```
Card: -translate-y-1 (lifts up 4px)
Shadow: shadow-xl (elevation)
Image: scale-110 (over 700ms)
Transition: smooth 300ms
```

### Hover State (Buttons)
```
Contact Button: bg-amber-600 (darker amber)
Call/Email: bg-slate-200 dark:bg-slate-600
Arrow icon: slight translate-x animation
Duration: 300ms
```

### Focus State (Inputs)
```
Ring: 2px ring-amber-500
Border: transparent
Transition: 200ms
Icon color: amber-500
```

---

## Typography Scale

```
Name                    → text-xl (20px)     font-bold
Specialty              → text-xs (12px)     font-semibold uppercase
Rating Number          → text-sm (14px)     font-bold
Stats Text             → text-sm (14px)     regular
Button Text            → text-xs (12px)     font-semibold uppercase
```

---

## Spacing Reference

```
Card Padding            → p-5 (20px)
Sections Gap            → gap-3 (12px)
Divider Margin          → my-1 (4px)
Stats Gap               → py-2 (8px)
Button Grid Gap         → gap-2 (8px)
Section Space           → gap-3 (12px)
```

---

## Star Rating Display

### Rating 5.0
```
⭐⭐⭐⭐⭐ (5 filled stars)
Fill: amber-400
```

### Rating 4.9
```
⭐⭐⭐⭐⭐ (4 filled, 1 empty)
Filled: amber-400
Empty: slate-300 dark:slate-600
```

### Rating 4.5
```
⭐⭐⭐⭐✩ (4 filled, 1 empty)
Filled: amber-400
Empty: slate-300 dark:slate-600
```

---

## Dark Mode Comparison

### Light Mode
```
Background    White           #ffffff
Card          White           #ffffff
Text Primary  Slate-900       #0f172a
Text Secondary Slate-600      #475569
Accent        Amber-500       #f59e0b
Border        Slate-200       #e2e8f0
```

### Dark Mode
```
Background    Slate-900       #0f172a
Card          Slate-800       #1e293b
Text Primary  White           #ffffff
Text Secondary Slate-300      #cbd5e1
Accent        Amber-500       #f59e0b (same)
Border        Slate-700       #334155
```

**Key:** Accent color (amber) remains unchanged for consistency.

---

## Grid Layouts

### Mobile (1 Column)
```
┌──────────────────┐
│   Agent Card 1   │
└──────────────────┘
┌──────────────────┐
│   Agent Card 2   │
└──────────────────┘
┌──────────────────┐
│   Agent Card 3   │
└──────────────────┘
```

### Tablet (2 Columns)
```
┌──────────────┬──────────────┐
│ Agent Card 1 │ Agent Card 2 │
├──────────────┼──────────────┤
│ Agent Card 3 │ Agent Card 4 │
├──────────────┼──────────────┤
│ Agent Card 5 │ Agent Card 6 │
└──────────────┴──────────────┘
```

### Desktop (3 Columns)
```
┌──────────────┬──────────────┬──────────────┐
│ Agent Card 1 │ Agent Card 2 │ Agent Card 3 │
├──────────────┼──────────────┼──────────────┤
│ Agent Card 4 │ Agent Card 5 │ Agent Card 6 │
├──────────────┼──────────────┼──────────────┤
│ Agent Card 7 │ Agent Card 8 │ Agent Card 9 │
└──────────────┴──────────────┴──────────────┘
```

---

## Animation Details

### Card Fade-In
```
Duration     600ms
Easing       ease-out
From         opacity: 0, translateY(20px)
To           opacity: 1, translateY(0)
Stagger      75ms between cards
```

### Image Zoom
```
Duration     700ms
Easing       ease-out
Scale        1.0 → 1.1
Trigger      group-hover
```

### Button Hover
```
Duration     300ms
Arrow Icon   translate-x(2px)
Shadow       sm → md
Color        amber-500 → amber-600
```

---

## Accessibility Features

### ARIA Labels
```html
<article aria-label="View profile of Priya Sharma">
<button aria-label="Call Priya Sharma">
<button aria-label="Email Priya Sharma">
```

### Semantic HTML
```html
<article>           ← Card wrapper
<section>           ← Page wrapper
<button>            ← All interactive elements
<h3>                ← Proper heading hierarchy
<img alt="...">     ← Descriptive alt text
```

### Keyboard Navigation
```
Tab         → Move between elements
Enter/Space → Activate buttons
Shift+Tab   → Move backwards
Focus Ring  → Visible 2px ring-amber-500
```

---

## Example: Priya Sharma Card

```
╔══════════════════════════════════════╗
║                                      ║
║  [High-quality portrait photo]       ║
║                                      ║
║  ┌────────────────────────────────┐  ║
║  │ ⭐ TOP AGENT                   │  ║
║  └────────────────────────────────┘  ║
║                                      ║
╚══════════════════════════════════════╝
┌──────────────────────────────────────┐
│                                      │
│  Priya Sharma                        │
│                                      │
│  ┌────────────────────────────────┐  │
│  │  LUXURY                        │  │
│  └────────────────────────────────┘  │
│                                      │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                      │
│  ⭐⭐⭐⭐⭐ 4.9 (284)              │
│                                      │
│  • 12+ years experience              │
│  • 2 active listings                 │
│                                      │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                      │
│  ┌────────────────────────────────┐  │
│  │  CONTACT →                     │  │
│  └────────────────────────────────┘  │
│                                      │
│  ┌──────────────┬──────────────────┐ │
│  │  ☎ CALL     │  ✉ EMAIL        │ │
│  └──────────────┴──────────────────┘ │
│                                      │
└──────────────────────────────────────┘
```

---

## Design Principles Used

1. **Information Hierarchy** - Most important info first (name, rating)
2. **Visual Separation** - Dividers between sections
3. **Color Consistency** - Amber for primary actions across all cards
4. **Whitespace** - Breathing room between elements
5. **Contrast** - High contrast for accessibility
6. **Responsiveness** - Works on all screen sizes
7. **Consistency** - Matches platform design patterns
8. **Clarity** - Every element has clear purpose

---

## Common Variations

### Agent Without Badge
```
(Top badge hidden if rating < 4.8)
Card displays same, just no badge
```

### Agent Without Experience
```
(yearsExperience is optional)
Stat line hidden if not provided
```

### Agent Without Specialty
```
(specialty is optional)
Badge hidden if not provided
```

---

## Mobile Optimization

### Touch Targets
- Minimum 44px × 44px for buttons
- Adequate spacing (8px) between clickable areas
- Large text for readability on mobile

### Viewport Considerations
- Full width cards on mobile
- Readable at 375px width
- No horizontal scrolling
- Portrait orientation optimized

### Performance
- Fast animations (300-700ms)
- Smooth transitions
- Lazy loading ready
- Optimized image sizes

---

## Browser Testing Checklist

- [x] Chrome (Desktop & Mobile)
- [x] Firefox (Desktop & Mobile)
- [x] Safari (Desktop & Mobile)
- [x] Edge (Desktop)
- [x] Dark mode toggle
- [x] Responsive resize
- [x] Keyboard navigation
- [x] Touch interaction
- [x] Print styles (if needed)
