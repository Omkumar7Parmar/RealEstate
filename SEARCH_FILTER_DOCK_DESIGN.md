# Search & Filter Dock – Editorial Gallery Aesthetic

## Overview

The **Floating Command Dock** is a sophisticated, unified search and filter interface that elevates the perceived quality of the Agents gallery page. Designed with glassmorphism principles and editorial white space, it creates a cohesive, premium experience.

---

## Design Philosophy

### Problem Statement
Previous search/filter controls were:
- ❌ Scattered and disjointed
- ❌ Utilitarian and boxy
- ❌ Lowered perceived quality
- ❌ Lacked cohesion

### Solution: The Floating Dock
A unified, centered command center that:
- ✅ Feels sophisticated and minimal
- ✅ Uses glassmorphism for premium feel
- ✅ Integrates search, filters, and sort seamlessly
- ✅ Maintains editorial white space
- ✅ Responsive on all devices

---

## Visual Structure

### Desktop Layout (1024px+)

```
                    FLOATING COMMAND DOCK
         ┌─────────────────────────────────────┐
         │ 🔍 Search agents...                 │
         │              [All][Luxury][Res][Com]│ Sort: Rating ▼ │
         └─────────────────────────────────────┘
```

### Tablet Layout (640-1024px)

```
┌─────────────────────────────────────────┐
│ 🔍 Search...         [All][Luxury][Res] │
│              Sort: Rating ▼              │
└─────────────────────────────────────────┘
```

### Mobile Layout (0-640px)

```
┌───────────────────────────┐
│ 🔍 Search agents...       │
│        Sort: Rating ▼     │
├───────────────────────────┤
│ [All][Luxury][Residential]│
│ [Commercial][Investment]  │
└───────────────────────────┘
```

---

## Component Structure

### 1. Dock Container

**File:** `components/SearchFilterDock.tsx`

**Classes:**
```tailwind
bg-white/80 dark:bg-slate-800/80
backdrop-blur-md
border border-slate-100 dark:border-slate-700
rounded-full
shadow-xl
flex items-center justify-between
gap-2 sm:gap-4
p-2 sm:p-3
max-w-4xl mx-auto
```

**Glassmorphism Effect:**
- `bg-white/80` – 80% opaque white (20% transparent)
- `backdrop-blur-md` – Medium blur of background
- `border border-slate-100` – Subtle light border
- `shadow-xl` – Sophisticated shadow

**Spacing:**
- `my-12` – Generous vertical margin for editorial spacing
- `max-w-4xl` – Max width constraint
- `mx-auto` – Center on page

### 2. Search Input (Left Side)

**Icon:**
```tsx
<Search className="w-4 h-4 text-slate-400 dark:text-slate-500" />
```

**Input Styling:**
```tailwind
bg-transparent
focus:outline-none
focus:ring-0
text-slate-900 dark:text-white
placeholder:text-slate-400 dark:placeholder:text-slate-500
border-0
```

**Width:**
```tailwind
flex-1 (takes available space)
px-4 sm:px-2 (padding)
```

**Focus State:**
- No visible border (seamless with dock)
- Text color remains dark
- Icon doesn't change (consistent with dock aesthetic)

### 3. Category Pills (Center - Middle)

**Container:**
```tailwind
hidden sm:flex (visible on tablet/desktop)
items-center gap-1
bg-slate-100 dark:bg-slate-700
rounded-full
p-1
mx-2
```

**Active Pill:**
```tailwind
bg-white dark:bg-slate-600
text-slate-900 dark:text-white
shadow-sm
rounded-full
font-medium
```

**Inactive Pill:**
```tailwind
text-slate-500 dark:text-slate-400
hover:text-slate-800 dark:hover:text-slate-200
bg-transparent
transition-all duration-300
```

**Animation:**
- Smooth transition on active state change (300ms)
- Color shifts from gray to dark text
- Shadow appears on active

### 4. Sort Dropdown (Right Side)

**Button:**
```tailwind
flex items-center gap-2
pr-4 pl-2
text-sm font-medium
text-slate-600 dark:text-slate-300
hover:text-slate-900 dark:hover:text-white
whitespace-nowrap
```

**Label Format:**
```
"Sort: Rating" (selected)
"Sort: Experience" (selected)
"Sort: Name A-Z" (selected)
```

**Chevron Icon:**
```tailwind
w-4 h-4
text-slate-400 dark:text-slate-500
rotate-180 (when open)
transition-transform duration-300
```

**Dropdown Menu:**
```
Position: Absolute, right-0, mt-2
Width: w-48
Background: White/slate-800
Border: Subtle slate-200/slate-700
Rounded: xl (rounded-xl)
Shadow: lg (shadow-lg)
```

**Menu Items:**
```
Active Item:
- bg-amber-50 dark:bg-amber-900/30
- text-amber-900 dark:text-amber-300
- border-l-2 border-amber-500

Inactive Item:
- text-slate-700 dark:text-slate-300
- hover:bg-slate-50 dark:hover:bg-slate-700
```

### 5. Mobile Category Filters

**Container:**
```tailwind
sm:hidden (hidden on tablet/desktop)
mt-3
flex flex-wrap
gap-2
justify-center
```

**Button Styling:**
```
Active: bg-amber-500, text-white, shadow-sm
Inactive: bg-slate-100, dark:bg-slate-700
```

---

## Props Interface

```typescript
interface SearchFilterDockProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedSpecialty: string;
  onSpecialtyChange: (specialty: string) => void;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
  specialties: string[];
  sortOptions: Array<{ value: string; label: string }>;
}
```

---

## Dark Mode Support

### Light Mode
```
Background: white/80
Border: slate-100
Text: slate-900
Inactive: slate-500
Sort: slate-600
Dropdown: white, slate-200 border
Pill bg: slate-100
```

### Dark Mode
```
Background: slate-800/80
Border: slate-700
Text: white
Inactive: slate-400
Sort: slate-300
Dropdown: slate-800, slate-700 border
Pill bg: slate-700
```

**Consistency:** Accent colors (amber) remain unchanged

---

## Responsive Behavior

### Mobile (0-640px)
- Dock: Full width with 4px padding (px-4)
- Search: Prominent, full width
- Sort: Visible, right-aligned
- Category pills: Below dock, wrapping layout

### Tablet (640-1024px)
- Dock: Max-width constraint (max-w-4xl)
- All elements visible in single row
- Gap: 4px between elements
- Pills: Visible next to search

### Desktop (1024px+)
- Dock: Full max-width layout
- All elements in single optimized row
- Generous padding
- Professional spacing

---

## Interactions

### Search Input
- **On Focus:** No visual change (seamless)
- **On Type:** Filters agents in real-time
- **Placeholder:** "Search agents..."
- **Clear:** Auto-clears on reset

### Category Pills
- **On Click:** Switches active state
- **Active Animation:** 300ms smooth transition
- **Multiple Active:** Only one category at a time (or "All")
- **Feedback:** Shadow and color change

### Sort Dropdown
- **On Click:** Opens menu below
- **Click Outside:** Closes menu
- **On Select:** Updates sort, closes menu
- **Chevron:** Rotates 180° when open
- **Active Item:** Highlighted with amber background

---

## Animation Specifications

### Pill Transitions
```css
transition-all duration-300
```
- Background color change
- Shadow appearance
- Text color shift

### Chevron Rotation
```css
transition-transform duration-300
```
- Smooth 180° rotation
- Returns to normal when closed

### Hover Effects
```css
hover:text-slate-800 dark:hover:text-slate-200
```
- Subtle text color change
- No visual jump

---

## Spacing Reference

```
Container margin:     my-12 (48px top/bottom)
Dock padding:         p-2 sm:p-3 (8px / 12px)
Search padding:       px-4 sm:px-2 (left padding)
Gap between items:    gap-2 sm:gap-4 (8px / 16px)
Pill padding:         p-1 (4px)
Sort padding:         pr-4 pl-2 (right 16px, left 8px)
Results margin:       mt-6 (24px)
```

---

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS/Android)

---

## Accessibility Features

### ARIA Labels
```tsx
aria-label="Search agents by name"
aria-pressed={selectedSpecialty === specialty}
aria-label={`Filter by ${specialty}`}
aria-label="Sort options"
aria-expanded={sortOpen}
aria-label={`Sort by ${option.label}`}
```

### Keyboard Navigation
- **Tab:** Navigate through all controls
- **Enter:** Activate buttons
- **Escape:** Close dropdown
- **Space:** Toggle pills

### Focus States
- Visible focus ring (built-in browser default)
- Text contrast maintained
- All interactive elements reachable

### Screen Reader Support
- Semantic button elements
- Descriptive labels
- State indicators (aria-pressed, aria-expanded)

---

## Performance Notes

### Optimizations
- ✅ No unnecessary re-renders (component receives only needed props)
- ✅ useRef for dropdown management (no state-based re-renders)
- ✅ useEffect for click-outside handling (clean event listeners)
- ✅ CSS transitions (GPU-accelerated)

### Bundle Impact
- Small component (minimal code)
- No additional dependencies
- Uses existing Lucide icons
- Pure Tailwind CSS

---

## Usage Example

```tsx
<SearchFilterDock
  searchQuery={searchQuery}
  onSearchChange={handleSearch}
  selectedSpecialty={selectedSpecialty}
  onSpecialtyChange={handleSpecialtyChange}
  sortBy={sortBy}
  onSortChange={handleSortChange}
  specialties={['All', 'Luxury', 'Residential', 'Commercial', 'Investment']}
  sortOptions={[
    { value: 'rating-desc', label: 'Highest Rated' },
    { value: 'rating-asc', label: 'Lowest Rated' },
    { value: 'experience-desc', label: 'Most Experience' },
    { value: 'name-asc', label: 'Name (A-Z)' },
  ]}
/>
```

---

## Design Justification

### Why Glassmorphism?
- Premium, sophisticated aesthetic
- Aligns with modern UI trends
- Creates depth without heavy shadows
- Looks elegant on light and dark backgrounds

### Why Floating Dock?
- Unifies disparate controls
- Creates focal point
- Adds editorial white space
- Feels like a cohesive tool
- Premium, intentional design

### Why Pills for Categories?
- Cleaner than dropdowns
- Faster selection
- Visual feedback on active state
- Modern, familiar pattern

### Why Subtle Sort?
- Text + chevron (not a box)
- Less prominent than search
- Secondary action
- Respects visual hierarchy

---

## Common Customizations

### Change Max Width
```tsx
// In SearchFilterDock.tsx
<div className="w-full max-w-5xl"> {/* was max-w-4xl */}
```

### Change Glassmorphism Blur
```tsx
// More blur
backdrop-blur-lg {/* was backdrop-blur-md */}

// Less blur
backdrop-blur-sm {/* was backdrop-blur-md */}
```

### Change Pill Colors
```tsx
// Active pill
bg-amber-500 text-white {/* was white bg */}

// Inactive pill
text-amber-600 {/* was slate-500 */}
```

### Change Spacing
```tsx
// More space
my-16 {/* was my-12 */}
gap-6 {/* was gap-2 sm:gap-4 */}
```

---

## Testing Checklist

- [x] Search filters agents in real-time
- [x] Category pills toggle correctly
- [x] Only one category active at a time
- [x] Sort dropdown opens/closes
- [x] Sort selection updates correctly
- [x] Click outside closes dropdown
- [x] Keyboard navigation works
- [x] Dark mode looks correct
- [x] Mobile layout responsive
- [x] All ARIA labels present
- [x] Animations smooth (no lag)
- [x] Touch-friendly on mobile
- [x] Accessible with screen reader

---

## Files

| File | Purpose |
|------|---------|
| `components/SearchFilterDock.tsx` | New dock component |
| `app/agents/page.tsx` | Updated to use dock |

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 7, 2026 | Initial release with glassmorphism dock |

---

## Summary

The Search & Filter Dock transforms utilitarian controls into a sophisticated, unified interface. With glassmorphism, responsive design, and careful attention to editorial spacing, it elevates the entire Agents gallery experience.

✅ **Sophisticated • Minimal • Unified • Premium**
