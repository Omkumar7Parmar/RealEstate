export interface Agent {
  id: string;
  name: string;
  photoUrl: string;
  bio: string;
  rating: number;
  reviewCount?: number;
  propertiesCount: number;
  properties: string[]; // property IDs they handle
  specialty?: string; // e.g., "Luxury", "Commercial", "Residential"
  yearsExperience?: number;
}


export const agents: Agent[] = [
  {
    id: "1",
    name: "Priya Sharma",
    photoUrl: "/images/agents/Priya Sharma.jpg",
    bio: "Senior Real Estate Consultant with 12+ years experience in Mumbai luxury properties.",
    rating: 4.9,
    reviewCount: 284,
    propertiesCount: 3,
    properties: ["1", "3", "5"],
    specialty: "Luxury",
    yearsExperience: 12
  },
  {
    id: "2", 
    name: "Rahul Patel",
    photoUrl: "/images/agents/Rahul Patel.webp",
    bio: "Specialist in affordable housing and rental properties across Mumbai suburbs.",
    rating: 4.8,
    reviewCount: 156,
    propertiesCount: 3,
    properties: ["2", "4", "7"],
    specialty: "Residential",
    yearsExperience: 9
  },
  {
    id: "3",
    name: "Anita Desai",
    photoUrl: "/images/agents/Anita Desai.jpg",
    bio: "Luxury villa and penthouse expert serving high-net-worth clients.",
    rating: 5.0,
    reviewCount: 328,
    propertiesCount: 2,
    properties: ["15", "6"],
    specialty: "Luxury",
    yearsExperience: 15
  },
  {
    id: "4",
    name: "Vikram Singh",
    photoUrl: "/images/agents/Vikram Singh.jpg",
    bio: "Commercial and industrial property specialist with 10+ years in the market.",
    rating: 4.7,
    reviewCount: 198,
    propertiesCount: 2,
    properties: ["8", "13"],
    specialty: "Commercial",
    yearsExperience: 11
  },
  {
    id: "5",
    name: "Neha Gupta",
    photoUrl: "/images/agents/Neha Gupta.jpg",
    bio: "Residential property expert focused on first-time homebuyers and families.",
    rating: 4.6,
    reviewCount: 142,
    propertiesCount: 2,
    properties: ["2", "14"],
    specialty: "Residential",
    yearsExperience: 8
  },
  {
    id: "6",
    name: "Arjun Verma",
    photoUrl: "/images/agents/ Arjun Verma.jpg",
    bio: "Rental properties and investment portfolio management expert.",
    rating: 4.5,
    reviewCount: 167,
    propertiesCount: 2,
    properties: ["4", "14"],
    specialty: "Investment",
    yearsExperience: 10
  }
];

export function getTopRatedAgents(limit: number = 3): Agent[] {
  return agents
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

export function getAgentById(id: string): Agent | null {
  return agents.find(agent => agent.id === id) || null;
}

export function getFeaturedAgents(): Agent[] {
  return agents.slice(0, 3);
}
