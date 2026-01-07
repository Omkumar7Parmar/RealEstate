export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
  rating: number;
  reviews: number;
  specialties: string[];
  listings: number;
  region: string;
}

export const agents: Agent[] = [
  {
    id: 'agent-1',
    name: 'Sarah Johnson',
    email: 'sarah@realestate.com',
    phone: '(555) 123-4567',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    bio: 'Top-rated agent with 15 years of experience in residential real estate',
    rating: 4.9,
    reviews: 128,
    specialties: ['Residential', 'Luxury Homes', 'Investment Properties'],
    listings: 42,
    region: 'Downtown & Midtown',
  },
  {
    id: 'agent-2',
    name: 'Michael Chen',
    email: 'michael@realestate.com',
    phone: '(555) 234-5678',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'Specialist in commercial and industrial properties',
    rating: 4.7,
    reviews: 95,
    specialties: ['Commercial', 'Industrial', 'Development'],
    listings: 28,
    region: 'Industrial District',
  },
  {
    id: 'agent-3',
    name: 'Emily Rodriguez',
    email: 'emily@realestate.com',
    phone: '(555) 345-6789',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    bio: 'Expert in waterfront and vacation properties',
    rating: 4.8,
    reviews: 112,
    specialties: ['Waterfront', 'Vacation Rentals', 'Beachfront'],
    listings: 35,
    region: 'Coastal Area',
  },
  {
    id: 'agent-4',
    name: 'David Thompson',
    email: 'david@realestate.com',
    phone: '(555) 456-7890',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    bio: 'Suburban specialist with focus on family homes',
    rating: 4.6,
    reviews: 87,
    specialties: ['Suburban', 'Family Homes', 'Schools Districts'],
    listings: 31,
    region: 'Suburban Heights',
  },
  {
    id: 'agent-5',
    name: 'Jessica Lee',
    email: 'jessica@realestate.com',
    phone: '(555) 567-8901',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    bio: 'Historic property renovation expert',
    rating: 4.9,
    reviews: 103,
    specialties: ['Historic Properties', 'Restoration', 'Heritage'],
    listings: 24,
    region: 'Historic District',
  },
];

export function getAgentById(id: string): Agent | undefined {
  return agents.find((a) => a.id === id);
}

export function getAgentsByRegion(region: string): Agent[] {
  return agents.filter((a) => a.region.includes(region));
}

export function getTopRatedAgents(limit: number = 5): Agent[] {
  return [...agents].sort((a, b) => b.rating - a.rating).slice(0, limit);
}
