# Hero Section & Tab Switcher Implementation Guide

## Overview
The hero section has been refactored to include a premium **Segmented Control Tab Switcher** that allows users to switch between "Buy", "Rent", and "Commercial" property types with smooth, interactive animations.

## Components Updated

### 1. HeroSection.tsx
- **Location**: `/components/HeroSection.tsx`
- **Purpose**: Main landing page hero with tab switcher

#### Tab Switcher Features
```tsx
// Tab Configuration
const tabs: { id: TabType; label: string; icon: string }[] = [
  { id: "buy", label: "Buy", icon: "🏠" },
  { id: "rent", label: "Rent", icon: "🔑" },
  { id: "commercial", label: "Commercial", icon: "🏢" },
];
```

#### Active Tab State
```tsx
const [activeTab, setActiveTab] = useState<TabType>("buy");
```

### 2. ListingHeroSection.tsx
- **Location**: `/components/ListingHeroSection.tsx`
- **Purpose**: Listing pages (buy, rent, commercial) with context-aware tab switcher
- **Props**: Accepts `defaultTab` to set initial active tab

```tsx
<ListingHeroSection
  title="Properties for Sale"
  subtitle="..."
  defaultTab="buy"
  propertyCount={properties.length}
/>
```

## Design System

### Tab Switcher Structure

#### Container
- **Background**: `bg-white/10 backdrop-blur-xl`
- **Border**: `border border-white/20`
- **Shape**: `rounded-full` (pill shape)
- **Shadow**: `shadow-xl`
- **Padding**: `p-1.5` (internal spacing)

#### Active Tab Button
```css
/* Styling */
background: gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500
text-color: white
shadow: shadow-lg
transform: scale-105
border: none

/* Transitions */
transition: all duration-300
```

#### Inactive Tab Button
```css
/* Styling */
text-color: white/70 (hover: white/90)
border: border-white/20
background: transparent

/* Transitions */
transition: all duration-300
hover:text-color: white/90
```

### Search Button Behavior
The search button dynamically updates based on active tab:
- **Buy**: "Find Properties"
- **Rent**: "Find Rentals"
- **Commercial**: "Find Commercial"

#### Search Button Hover Effects
- Scale: `hover:scale-105`
- Vertical lift: `hover:-translate-y-1`
- Icon animation: Icon rotates on hover
- Shadow: Grows to `hover:shadow-2xl`

## Animation Details

### Transitions
All interactive elements use **300ms duration** smooth transitions:

```tsx
transition-all duration-300
```

### Tab Switch Animation
When clicking a tab:
1. **Active Tab**: Scales to 105% and applies gradient
2. **Previous Active**: Returns to normal state
3. **Inactive Tabs**: Maintain subtle white border

### CSS Timing Function
- Type: Linear smooth transitions
- Duration: 300ms
- Property: All (affects transform, background, text color, shadow)

## Implementation Code

### HeroSection Tab Switcher
```tsx
{/* Tab Switcher - Segmented Control */}
<div className="mt-16 mb-6">
  <div className="inline-flex gap-1 p-1.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-xl">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
          activeTab === tab.id
            ? "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 text-white shadow-lg scale-105"
            : "text-white/70 hover:text-white/90 border border-white/20"
        }`}
      >
        <span>{tab.icon}</span>
        {tab.label}
      </button>
    ))}
  </div>
</div>
```

### Search Button with Dynamic Text
```tsx
<button
  type="submit"
  className="md:rounded-full rounded-lg m-1.5 px-8 py-4 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 hover:from-violet-600 hover:via-fuchsia-600 hover:to-cyan-600 text-white font-bold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center gap-2 group"
>
  <Search className="w-5 h-5 group-hover:rotate-12 transition-transform" />
  <span>Find {activeTab === "buy" ? "Properties" : activeTab === "rent" ? "Rentals" : "Commercial"}</span>
</button>
```

## Color Palette

### Gradient (Active State)
- **From**: `violet-500` (#a855f7)
- **Via**: `fuchsia-500` (#d946ef)
- **To**: `cyan-500` (#06b6d4)

### Text Colors
- **Active**: `white` (100%)
- **Inactive**: `white/70` (70% opacity)
- **Hover**: `white/90` (90% opacity)

### Background Colors
- **Container**: `white/10` (10% opacity)
- **Backdrop**: `backdrop-blur-xl` (ultra blur)
- **Border**: `white/20` (20% opacity)

## Responsive Behavior

### Mobile (< 640px)
- Tab switcher adapts to screen width
- Search bar stacks vertically
- Padding adjusts to `px-4`

### Tablet (640px - 1024px)
- Tab switcher remains inline
- Search inputs display in flexible columns

### Desktop (> 1024px)
- Full horizontal layout
- All search inputs in single row
- Maximum width container at `max-w-5xl`

## Type Definitions

```tsx
type TabType = "buy" | "rent" | "commercial";

interface HeroSectionProps {
  onSearch?: (query: string, propertyType: string) => void;
}

interface ListingHeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  propertyCount?: number;
  onSearch?: (query: string, propertyType: string) => void;
  defaultTab?: "buy" | "rent" | "commercial";
}
```

## Performance Considerations

1. **CSS Transitions**: Using CSS for animations (GPU-accelerated)
2. **No External Libraries**: Pure Tailwind CSS and React state
3. **Lazy State Updates**: Tab changes only update UI, not DOM structure
4. **Icon Usage**: Lucide React icons (lightweight, tree-shakeable)

## Browser Support

- Modern browsers with CSS Grid & Flexbox support
- Backdrop-filter support (Chrome 76+, Safari 9+, Firefox 103+)
- CSS transforms and transitions (all modern browsers)

## Future Enhancements

1. **Framer Motion**: Can replace CSS transitions for more advanced animations
2. **Keyboard Navigation**: Add arrow key support for tab navigation
3. **Accessibility**: Add ARIA labels and focus states
4. **Analytics**: Track which tab users click most frequently
5. **Conditional Content**: Show different search fields based on active tab

## Testing

### Manual Testing Checklist
- [ ] Click each tab - verify state changes
- [ ] Verify button text updates dynamically
- [ ] Check hover effects on inactive tabs
- [ ] Verify scale-105 animation on active tab
- [ ] Test responsive behavior on mobile/tablet/desktop
- [ ] Verify 300ms transition timing
- [ ] Check gradient colors render correctly
- [ ] Test search functionality with different tabs

### Edge Cases
- Rapid tab switching
- Mobile touch interactions
- Dark mode compatibility
- Print view compatibility
- Screen reader accessibility

## References

### Files Modified
1. `components/HeroSection.tsx`
2. `components/ListingHeroSection.tsx`
3. `app/page.tsx` (uses HeroSection)
4. `app/buy/page.tsx` (uses ListingHeroSection with defaultTab="buy")
5. `app/rent/page.tsx` (uses ListingHeroSection with defaultTab="rent")
6. `app/commercial/page.tsx` (uses ListingHeroSection with defaultTab="commercial")

### Dependencies
- React 19+ (useState hooks)
- Next.js 16.1+ (Link, routing)
- Tailwind CSS 3.4+ (utility classes)
- Lucide React (icons)
