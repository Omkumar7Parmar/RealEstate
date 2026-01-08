# Agents Page – Quick Reference Guide

## Component Files

```
├── app/agents/
│   └── page.tsx (Main agents gallery page)
├── components/
│   ├── LuxuryAgentCard.tsx (New: Premium card component)
│   └── EditorialAgentCard.tsx (Old: Deprecated)
└── lib/
    └── agents.ts (Enhanced with specialty, yearsExperience, reviewCount)
```

---

## LuxuryAgentCard Props

```typescript
interface LuxuryAgentCardProps {
  agent: Agent
}

interface Agent {
  id: string
  name: string
  photoUrl: string                    // Local or Unsplash URL
  bio: string
  rating: number                      // 4.5-5.0
  reviewCount?: number                // e.g., 284
  propertiesCount: number             // e.g., 2
  properties: string[]                // Array of property IDs
  specialty?: string                  // "Luxury" | "Residential" | "Commercial" | "Investment"
  yearsExperience?: number            // e.g., 12
}
```

---

## Visual Breakdown: LuxuryAgentCard

### Base State (Always Visible)

```
┌─────────────────────┐
│                     │
│   Portrait Image    │ ← Image: aspect-[3/4], object-cover
│   (3:4 ratio)       │
│                     │
│   Top-Right Badge:  │ ← Green "Top Agent" (if rating >= 4.8)
│   ⭐ TOP AGENT     │
│                     │
│  [Name]             │ ← White text, large, bold
│  SPECIALTY BADGE    │ ← Amber-300, glass morphism
│  ⭐4.9 (284)       │ ← Yellow stars + review count
│                     │
└─────────────────────┘
```

### Hover State (Overlay)

```
┌─────────────────────┐
│                     │
│                     │ ← Overlay: black/90 gradient top-to-bottom
│                     │
│    15               │ ← Years experience (large, bold)
│  YEARS EXP.         │
│                     │
│  • Active Listings  │
│    2 properties     │
│                     │
│  Expert in luxury   │ ← Bio preview (2-line clamp)
│  villa design...    │
│                     │
│ ┌─────────────────┐ │ ← Primary CTA: Amber-500 full-width
│ │ CONTACT AGENT → │ │
│ └─────────────────┘ │
│                     │
│ ┌──────┐ ┌──────┐   │ ← Secondary CTAs: Glass morphism
│ │ CALL │ │EMAIL │   │
│ └──────┘ └──────┘   │
│                     │
└─────────────────────┘
```

---

## Page Layout

### Hero Section

```
═════════════════════════════════════════════════════════════════
                        OUR TEAM (badge)

        DISCOVER OUR ELITE AGENTS
    (Gradient text: Amber to Copper)

        Meet award-winning real estate professionals...
        (Subheadline)

═════════════════════════════════════════════════════════════════
```

### Controls Section

```
┌──────────────────────────────────────────────────────────────┐
│ [Search input: "Search agents..."] [Sort ▼ Highest Rated]   │
├──────────────────────────────────────────────────────────────┤
│ [All] [Luxury] [Residential] [Commercial] [Investment]      │
├──────────────────────────────────────────────────────────────┤
│ Showing 9 of 9 agents                                        │
└──────────────────────────────────────────────────────────────┘
```

### Grid Section

```
┌─────────┐ ┌─────────┐ ┌─────────┐
│ Agent 1 │ │ Agent 2 │ │ Agent 3 │  ← Desktop: 3 columns
└─────────┘ └─────────┘ └─────────┘

┌─────────┐ ┌─────────┐ ┌─────────┐
│ Agent 4 │ │ Agent 5 │ │ Agent 6 │
└─────────┘ └─────────┘ └─────────┘

┌─────────┐ ┌─────────┐ ┌─────────┐
│ Agent 7 │ │ Agent 8 │ │ Agent 9 │
└─────────┘ └─────────┘ └─────────┘
```

### Pagination

```
     ◀ Previous │ 1 │ 2 │ 3 │ Next ▶

Notes:
- "Previous" disabled when on page 1
- Active page: Amber background
- Inactive pages: Light background with hover
- Shows total: "Page X of Y"
```

---

## Responsive Behavior

| Breakpoint | Grid | Controls | Pagination |
|-----------|------|----------|-----------|
| Mobile (0-640px) | 1 col | Stacked | Arrows only |
| Tablet (640-1024px) | 2 cols | Responsive | Numbers visible |
| Desktop (1024px+) | 3 cols | Full UI | All controls |

---

## State Management

```typescript
// Current page number
const [currentPage, setCurrentPage] = useState(1);

// Filter states
const [searchQuery, setSearchQuery] = useState('');
const [selectedSpecialty, setSelectedSpecialty] = useState('All');
const [sortBy, setSortBy] = useState('rating-desc');

// Computed
const filteredAndSortedAgents = useMemo(() => {
  // 1. Search filter (name + bio)
  // 2. Specialty filter (AND with search)
  // 3. Sort (rating, experience, name)
  return result;
}, [searchQuery, selectedSpecialty, sortBy]);

// Pagination
const totalPages = Math.ceil(filteredAndSortedAgents.length / 9);
const paginatedAgents = filteredAndSortedAgents.slice(startIdx, endIdx);
```

---

## Data: 9 Agents

| # | Name | Rating | Specialty | Experience | Photo |
|---|------|--------|-----------|------------|-------|
| 1 | Priya Sharma | 4.9★ | Luxury | 12 yrs | Local |
| 2 | Rahul Patel | 4.8★ | Residential | 9 yrs | Local |
| 3 | Anita Desai | 5.0★ | Luxury | 15 yrs | Local |
| 4 | Vikram Singh | 4.7★ | Commercial | 11 yrs | Local |
| 5 | Neha Gupta | 4.6★ | Residential | 8 yrs | Local |
| 6 | Arjun Verma | 4.5★ | Investment | 10 yrs | Local |
| 7 | Sophia Klein | 4.9★ | Luxury | 14 yrs | Unsplash |
| 8 | Marcus Chen | 4.7★ | Residential | 7 yrs | Unsplash |
| 9 | Alicia Rodriguez | 4.8★ | Commercial | 13 yrs | Unsplash |

---

## Colors & Theming

### Light Mode
- Background: Gradient white → slate-50 → slate-100
- Text: slate-900
- Primary: Amber-500 (CTAs, active filters)
- Border: slate-200

### Dark Mode
- Background: Gradient slate-900 → slate-800 → slate-900
- Text: white
- Primary: Amber-500 (same)
- Border: slate-700

### Component Colors
- **Card Background:** white (light) / slate-800 (dark)
- **Badge:** Green-500 (Top Agent) / Amber-300 (Specialty)
- **Buttons:** Amber-500 (primary), white/15 backdrop (secondary)
- **Text Overlays:** White (on dark backgrounds)

---

## Key CSS Classes

```tailwind
/* Card wrapper */
group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl

/* Image transitions */
group-hover:scale-110 transition-transform duration-700

/* Overlay animations */
opacity-0 group-hover:opacity-100 transition-opacity duration-500

/* Badge styling */
backdrop-blur-md bg-white/20 border border-white/40 px-3.5 py-2 rounded-full

/* CTA buttons */
w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 rounded-lg

/* Search input focus */
focus:ring-2 focus:ring-amber-500 focus:border-transparent

/* Active filter tab */
bg-amber-500 hover:bg-amber-600 text-white shadow-lg
```

---

## Interaction Flow

```
1. User Lands on /agents
   ↓
2. Hero Section Loads (animated fade-in-up)
   ↓
3. Search/Filter Controls Visible
   ↓
4. Agent Cards Display (staggered 75ms delays)
   ↓
5. User Interacts:
   ├─ Type in Search → Filter in real-time
   ├─ Click Specialty → Filter + Reset to Page 1
   ├─ Select Sort → Reorder + Reset to Page 1
   ├─ Click Card → Navigate to /agents/[id]
   ├─ Hover Card → Show overlay + CTAs
   ├─ Click Call/Email → Trigger handler (placeholder)
   └─ Click Contact → Navigate to /agents/[id]
   ↓
6. Pagination: Next/Previous/Page Numbers
   ├─ Loads new batch of 9 agents
   ├─ Smooth scroll animation
   └─ Maintains filter state
```

---

## Styling Patterns Established

1. **Card Hover Pattern:**
   - Image scale-up (duration-700)
   - Overlay fade-in (duration-500)
   - Shadow elevation (shadow-2xl)

2. **Filter Button Pattern:**
   - Active: Solid amber background, white text
   - Inactive: Light background, dark text, hover border
   - Smooth 300ms transitions

3. **Input Focus Pattern:**
   - Ring-2 ring-amber-500 on focus
   - Icon color change on focus (gray → amber)
   - Smooth transitions

4. **Animation Pattern:**
   - CSS keyframes for fade-in-up
   - Staggered with JS `animationDelay`
   - 75-100ms delays for cascading effect

5. **Responsive Pattern:**
   - Mobile-first base styles
   - `sm:`, `md:`, `lg:` for breakpoints
   - Conditional rendering for labels (hidden sm:inline)

---

## Testing Guide

```bash
# 1. Verify Build
npm run build

# 2. Run Development
npm run dev

# 3. Test Responsive
- Open DevTools → Toggle Device Toolbar
- Test: Mobile (375px), Tablet (768px), Desktop (1440px)

# 4. Test Search
- Type "priya" → Should show only Priya Sharma
- Type "luxury" → Should show agents with bio containing "luxury"

# 5. Test Filters
- Click "Luxury" → Should show Priya, Anita, Sophia (3 agents)
- Click "Residential" → Should show Rahul, Neha, Marcus (3 agents)

# 6. Test Sort
- "Highest Rated" → Order: Anita (5.0), Priya (4.9), Sophia (4.9)...
- "Most Experience" → Order: Anita (15), Sophia (14), Priya (12)...

# 7. Test Pagination
- Default: 9 agents per page
- Create more agents to test page 2+
- Previous/Next buttons enable/disable correctly

# 8. Test Dark Mode
- Tailwind dark mode toggle
- All text readable
- Colors consistent

# 9. Test Hover States
- Hover card → Overlay appears
- Hover CTA → Scale/color change
- Touch devices → No hover (graceful degradation)

# 10. Test Accessibility
- Tab navigation through filters
- Screen reader: Verify aria-labels
- Keyboard: Enter on buttons, Space on toggles
```

---

## Known Limitations & TODOs

- [ ] CTA buttons (Call, Email) are non-functional (placeholder handlers)
- [ ] No Firebase integration for real-time agent data
- [ ] Review counts are static placeholder data
- [ ] No image lazy-loading optimization
- [ ] Agent detail pages (`/agents/[id]`) need implementation
- [ ] No testimonials or case studies
- [ ] No scheduling/availability calendar
- [ ] No location-based filtering yet
- [ ] No certification badges or credentials display

---

## Next Steps

1. **Implement `/agents/[id]` detail page** – Full agent profile with listings
2. **Add Firebase integration** – Real-time agent data and availability
3. **Implement contact forms** – Email/SMS integrations
4. **Add testimonials section** – Client reviews
5. **Schedule meeting feature** – Calendar integration
6. **Agent comparison tool** – Side-by-side agent details
7. **Analytics tracking** – Popular agents, search patterns
8. **Admin dashboard** – Agent profile management
