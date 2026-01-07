export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: "buy" | "rent";
  beds: number;
  baths: number;
  area: number; // in sqft
  imageUrl: string;
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Downtown Loft",
    price: 45000000,
    location: "Downtown, City Center",
    type: "buy",
    beds: 2,
    baths: 2,
    area: 1500,
    imageUrl:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
  },
  {
    id: "2",
    title: "Cozy Studio Apartment",
    price: 35000,
    location: "Midtown District",
    type: "rent",
    beds: 1,
    baths: 1,
    area: 600,
    imageUrl:
      "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=600&h=400&fit=crop",
  },
  {
    id: "3",
    title: "Luxury Suburban Villa",
    price: 85000000,
    location: "Suburban Heights",
    type: "buy",
    beds: 4,
    baths: 3,
    area: 3200,
    imageUrl:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
  },
  {
    id: "4",
    title: "Beachfront Condo",
    price: 75000,
    location: "Coastal Area",
    type: "rent",
    beds: 2,
    baths: 2,
    area: 1200,
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  },
  {
    id: "5",
    title: "Converted Warehouse",
    price: 65000000,
    location: "Industrial District",
    type: "buy",
    beds: 3,
    baths: 2,
    area: 2000,
    imageUrl:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
  },
  {
    id: "6",
    title: "Classic Brownstone",
    price: 55000,
    location: "Historic District",
    type: "rent",
    beds: 2,
    baths: 1,
    area: 1400,
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
  },
  {
    id: "7",
    title: "Modern Family Home",
    price: 57000000,
    location: "Riverside Community",
    type: "buy",
    beds: 3,
    baths: 2,
    area: 1800,
    imageUrl:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop",
  },
  {
    id: "8",
    title: "Urban Penthouse",
    price: 85000,
    location: "Downtown Skyrise",
    type: "rent",
    beds: 1,
    baths: 1,
    area: 950,
    imageUrl:
      "https://images.unsplash.com/photo-1545324418-cc1a9917d0c8?w=600&h=400&fit=crop",
  },
  {
    id: "9",
    title: "Garden Estate",
    price: 120000000,
    location: "Prestigious Neighborhood",
    type: "buy",
    beds: 5,
    baths: 4,
    area: 4500,
    imageUrl:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop",
  },
  {
    id: "10",
    title: "Cozy Cottage",
    price: 28000,
    location: "Small Town",
    type: "rent",
    beds: 1,
    baths: 1,
    area: 800,
    imageUrl:
      "https://images.unsplash.com/photo-1576941089067-2de3dd99c519?w=600&h=400&fit=crop",
  },
  {
    id: "11",
    title: "Contemporary Townhouse",
    price: 42000000,
    location: "Urban Village",
    type: "buy",
    beds: 3,
    baths: 2,
    area: 1600,
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    id: "12",
    title: "Luxury Apartment Complex",
    price: 95000,
    location: "Premium Downtown",
    type: "rent",
    beds: 2,
    baths: 2,
    area: 1300,
    imageUrl:
      "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&h=400&fit=crop",
  },
];

// Helper functions
export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function getPropertiesByType(type: "buy" | "rent"): Property[] {
  return properties.filter((p) => p.type === type);
}

export function getFeaturedProperties(limit: number = 6): Property[] {
  return properties.slice(0, limit);
}
