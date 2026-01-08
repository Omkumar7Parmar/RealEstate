# Dashboard - Quick Reference

## Access & Navigation

| Action | Route | Result |
|--------|-------|--------|
| User registers | `/register` | Redirects to `/dashboard` |
| Access dashboard | `/dashboard` | Shows full dashboard (no navbar) |
| Click "Back to Home" | Dashboard button | Goes to `/` |
| Click "Browse Properties" | Quick action | Goes to `/buy` |
| Click "Connect with Agents" | Quick action | Goes to `/agents` |
| Click "Logout" | Dashboard button | Signs out, goes to `/` |

## Page Layout Structure

```
┌─────────────────────────────────────────────┐
│                                             │
│   HERO SECTION (Dark Slate-900 gradient)   │
│   ├── Back to Home [Button]                │
│   ├── Logout [Button]                      │
│   ├── Welcome heading (with name)          │
│   ├── Descriptive text                     │
│   └── Email info card                      │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│   STATS GRID (3 cards)                     │
│   ├── Saved Properties (12)                │
│   ├── Saved Searches (5)                   │
│   └── Price Alerts (3)                     │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│   QUICK ACTIONS (4 buttons)                │
│   ├── Browse Properties                    │
│   ├── Connect with Agents                  │
│   ├── Your Favorites                       │
│   └── Saved Searches                       │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│   RECENT ACTIVITY (Timeline)               │
│   ├── Activity 1 (with time)               │
│   ├── Activity 2 (with time)               │
│   └── Activity 3 (with time)               │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│   CALL TO ACTION (CTA Section)             │
│   ├── Heading                              │
│   ├── Description                          │
│   ├── Start Browsing [Button]              │
│   └── Connect with Agents [Button]         │
│                                             │
├─────────────────────────────────────────────┤
│                    FOOTER                   │
└─────────────────────────────────────────────┘
```

## Component Breakdown

### 1. Hero Section
```
Dark Slate-900 gradient background
├── Animated Violet/Fuchsia orbs (top-right)
├── Back Button (Back to Home)
│   └── Icon + Text, white/10 background
├── Logout Button
│   └── Icon + Text, red/20 background, loading state
├── Welcome Text
│   ├── Subheading: "Welcome back" (uppercase, violet-300)
│   ├── Title: "Hey, [First Name]" (gradient text)
│   └── Description: "Manage your saved properties..."
└── User Info Card (glassmorphism)
    ├── Label: "Logged in as"
    └── Email: [User Email]
```

### 2. Stats Grid
```
3 Cards in responsive grid (grid-cols-1 md:grid-cols-3)

Card Layout (Each):
├── Icon Container (colored gradient background)
│   └── Icon with fill/color
├── Stat Number (text-5xl font-black)
├── Label (text-sm uppercase tracking-widest)
└── Description (text-sm gray text)

Card Hover Effects:
└── -translate-y-2, shadow-xl, icon scale-110
```

### 3. Quick Actions
```
4 Buttons in responsive grid (grid-cols-1 sm:grid-cols-2 lg:grid-cols-4)

Button Layout (Each):
├── Icon Container (colored gradient background)
├── Title (font-bold text-slate-900)
└── Description (text-sm text-slate-600)

Button Hover Effects:
├── Border color change to icon color
├── Background color shift (e.g., blue-50)
├── Icon scale-110
└── 300ms smooth transition
```

### 4. Recent Activity
```
List of activity items (space-y-3)

Each Item:
├── Icon Container (colored background)
├── Left Content
│   ├── Bold title (action description)
│   └── Details (property info or action details)
└── Right Content
    ├── Clock icon
    └── Timestamp (relative time)

Item Hover Effects:
└── border-slate-300, shadow-md
```

### 5. CTA Section
```
Dark gradient background (Violet-900 → Slate-900)

Content:
├── Heading (text-4xl font-black text-white)
├── Description (text-lg text-slate-300)
└── Button Group
    ├── Primary Button: "Start Browsing" (white)
    └── Secondary Button: "Connect with Agents" (white/20 border)
```

## Color Legend

| Element | Color | Use Case |
|---------|-------|----------|
| Background | Slate-50 to Slate-100 | Page background |
| Hero Section | Slate-900 → Slate-800 | Dark header |
| Cards | White | Main content |
| Card Borders | Slate-200 | Subtle separation |
| Headings | Slate-900 | Primary text |
| Body Text | Slate-600 | Secondary text |
| Icons - Heart | Red-600 | Saved properties |
| Icons - Search | Blue-600 | Saved searches |
| Icons - Bell | Amber-600 | Price alerts |
| Icons - Home | Blue-600 | Browse |
| Icons - MapPin | Violet-600 | Agents |
| Buttons - Primary | White | CTA buttons |
| Buttons - Secondary | White/20 | Secondary CTA |
| Accents | Violet/Fuchsia/Cyan | Gradients |

## Typography Reference

| Element | Style | Size |
|---------|-------|------|
| Hero Title | font-black, gradient text | text-5xl sm:text-6xl |
| Section Title | font-black, slate-900 | text-3xl |
| Card Header | font-semibold, uppercase, tracking-widest | text-sm |
| Stat Number | font-black, slate-900 | text-5xl |
| Button Text | font-bold | text-base |
| Body Text | slate-600 | text-base or text-sm |
| Label | font-semibold, uppercase | text-xs or text-sm |

## Responsive Breakpoints

| Device | Width | Behavior |
|--------|-------|----------|
| Mobile | < 640px | Single column, adjusted padding |
| Tablet | 640px - 1024px | 2-column grids |
| Desktop | 1024px+ | 3-4 column grids, full width |

### Responsive Classes Used
```
grid-cols-1          // Mobile: 1 column
md:grid-cols-3       // Tablet+: 3 columns
lg:grid-cols-4       // Desktop: 4 columns

text-5xl sm:text-6xl // Mobile 5xl, Tablet+ 6xl

p-8 sm:p-12          // Mobile p-8, Tablet+ p-12

px-4 sm:px-6 lg:px-8 // Horizontal padding scaling
```

## Interactive States

### Buttons
```
Default:  bg-white, border-2 border-slate-200
Hover:    border-[color], bg-[color]-50, icon scale-110
Active:   scale-95 (press feedback)
Disabled: opacity-50, cursor-not-allowed
```

### Cards
```
Default:  border-slate-200, shadow-sm
Hover:    border-slate-300, shadow-md, -translate-y-2
Focus:    border-[color] (for keyboard nav)
```

### Links
```
Default:  text-slate-600
Hover:    text-slate-900, underline
Active:   border-b-2 border-slate-900
```

## Loading States

```
Loading Page:
├── Full-screen dark gradient
├── Spinner (h-16 w-16, animated)
├── Loading text: "Loading your dashboard..."
└── Centered both axes
```

## Key Measurements

| Property | Value | Usage |
|----------|-------|-------|
| Padding | p-4 to p-12 | Card/section padding |
| Gap | gap-4 to gap-6 | Grid gaps |
| Rounded | rounded-2xl to rounded-3xl | Border radius |
| Duration | 300ms | Transitions |
| Opacity | 20-30% | Background transparency |
| Shadow | sm to 2xl | Card elevation |
| Blur | backdrop-blur-md | Glassmorphism |

## Authentication Flow

```
User Journey:
1. User goes to /register
2. Fills signup form
3. Creates account via Firebase
4. Auto-redirects to /dashboard
5. useFirebaseAuth hook fetches user data
6. Dashboard renders with user info
7. User can logout (redirects to /)
```

## File References

| File | Purpose |
|------|---------|
| `app/(dashboard)/dashboard/page.tsx` | Main dashboard component |
| `components/Navbar.tsx` | Navbar (hidden on /dashboard) |
| `components/Footer.tsx` | Footer (shown on all pages) |
| `hooks/useFirebaseAuth.ts` | Auth state management |
| `lib/firebase-auth.ts` | Firebase auth functions |

## Quick Customization

### Change Primary Color
```tsx
// Replace all violet-xxx with your-color-xxx
from-violet-500 → from-your-color-500
text-violet-300 → text-your-color-300
hover:border-violet-400 → hover:border-your-color-400
```

### Add New Quick Action
```tsx
<button className="...">
  <div className="p-3 bg-your-color-100 rounded-xl">
    <YourIcon className="w-6 h-6 text-your-color-600" />
  </div>
  <h3 className="font-bold text-slate-900">Action Title</h3>
  <p className="text-sm text-slate-600">Description</p>
</button>
```

### Add New Stat Card
```tsx
<div className="group bg-white rounded-3xl p-8 ...">
  <div className="flex items-start justify-between mb-6">
    <div>
      <p className="text-sm font-semibold text-slate-600 uppercase">Label</p>
      <p className="text-5xl font-black text-slate-900">99</p>
    </div>
    <div className="p-4 bg-gradient-to-br from-[color]-100 to-[color]-100">
      <Icon className="w-8 h-8 text-[color]-600" />
    </div>
  </div>
</div>
```

## Browser Support
- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+
- Mobile browsers (iOS 14+, Android Chrome 88+)

## Performance Notes
- No external animation libraries (pure CSS)
- Optimized images with lazy loading
- Minimal JavaScript execution
- Hardware-accelerated transforms
- Responsive images via CSS media queries

## Accessibility
✅ Proper semantic HTML
✅ Color contrast ≥ 4.5:1
✅ Keyboard navigation support
✅ Focus states visible
✅ Proper heading hierarchy
✅ Alt text on images
✅ ARIA labels where needed
