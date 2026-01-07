# Real Estate Platform - Project Structure

## Directory Overview

### `/app` - Next.js App Router Routes
All pages follow Next.js App Router conventions.

#### Main Routes
- **`/`** - Home page with hero, featured listings, property types, agents
- **`/buy`** - Browse properties for sale
- **`/rent`** - Browse rental properties
- **`/commercial`** - Commercial real estate listings
- **`/new-projects`** - New development projects
- **`/map`** - Interactive map-based search

#### Property Routes
- **`/property/[id]`** - Property detail page with gallery, specs, agent contact
- **`/property/[id]/contact`** - Lead capture form for property inquiries
- **`/compare`** - Side-by-side property comparison
- **`/saved`** - User's saved listings

#### Agent & Developer Routes
- **`/agents`** - Browse all agents with ratings
- **`/agents/[id]`** - Agent profile with listings and contact
- **`/developers`** - Property developers directory

#### Content Routes
- **`/about`** - Company mission and team
- **`/how-it-works`** - Platform explanation (3-step process)
- **`/pricing`** - Pricing plans and features
- **`/blog`** - Blog homepage
- **`/blog/[slug]`** - Blog article pages
- **`/guides`** - Buyer's guide, Seller's guide, FAQs
- **`/contact`** - Contact form and info
- **`/faq`** - Frequently asked questions

#### Auth Routes (Grouped with parentheses)
- **`/(auth)/login`** - Sign in page
- **`/(auth)/register`** - Sign up page

#### Dashboard Routes (Grouped with parentheses)
- **`/(dashboard)/dashboard`** - User dashboard with summary
- **`/(dashboard)/dashboard/listings`** - My listings management
- **`/(dashboard)/dashboard/add-listing`** - Create new property listing
- **`/(dashboard)/dashboard/profile`** - Profile settings and preferences

#### Legal Routes
- **`/legal/privacy`** - Privacy policy
- **`/legal/terms`** - Terms of service
- **`/404`** - Not found page

### `/components` - Reusable React Components
- **`Navbar.tsx`** - Navigation header with links
- **`Footer.tsx`** - Footer with links and company info
- **`PageHero.tsx`** - Hero section component (title, subtitle, optional image)
- **`PropertyCard.tsx`** - Single property listing card
- **`PropertyGrid.tsx`** - Grid layout for multiple properties
- **`Layout.tsx`** - Wrapper component with Navbar, main content, Footer

### `/lib` - Utilities and Data
- **`properties.ts`** - Property data and helper functions
  - `getPropertyById(id)` - Get single property
  - `getPropertiesByType(type)` - Filter by sale/rent
  - `getPropertiesByAgent(agentId)` - Get agent's listings
  
- **`agents.ts`** - Agent data and helper functions
  - `getAgentById(id)` - Get single agent
  - `getAgentsByRegion(region)` - Filter by region
  - `getTopRatedAgents(limit)` - Get highest rated agents

### `/public` - Static Assets
- **`/images`** - Directory for placeholder images (currently empty)
- Uses remote image URLs from Unsplash for demo

## Key Features Implemented

✅ 28 pages (as per sitemap)
✅ Reusable component system
✅ Fake data for properties and agents
✅ Responsive grid layouts
✅ Navigation structure
✅ Form pages (contact, add listing, profile)
✅ Dynamic routes for properties and agents
✅ Blog system with article pages
✅ Auth pages (login/register)
✅ Dashboard with multiple sections
✅ Error handling (404 page)

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- React

## Data Structure

### Property Interface
```typescript
{
  id: string
  title: string
  price: number
  location: string
  address: string
  beds: number
  baths: number
  sqft: number
  image: string
  type: 'sale' | 'rent'
  description: string
  amenities: string[]
  agentId: string
}
```

### Agent Interface
```typescript
{
  id: string
  name: string
  email: string
  phone: string
  image: string
  bio: string
  rating: number
  reviews: number
  specialties: string[]
  listings: number
  region: string
}
```

## Next Steps

1. Update `app/layout.tsx` to use the Layout component
2. Add database integration (replace fake data)
3. Implement authentication system
4. Add form handling and validation
5. Implement search and filter functionality
6. Add image upload for listings
7. Set up payment integration for pricing plans
8. Add email notifications
9. Implement real map functionality
10. Add SEO meta tags
