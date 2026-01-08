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
  // BUY Properties with Indian Names and Locations
  {
    id: "1",
    title: "Luxury 4BHK Apartment in Bandra",
    price: 250000000,
    location: "Bandra, Mumbai",
    type: "buy",
    beds: 4,
    baths: 3,
    area: 2400,
    imageUrl: "/images/properties/WhatsApp-Image-2017-09-06-at-1.45.23-PM.jpg",
  },
  {
    id: "2",
    title: "Modern 3BHK in Andheri",
    price: 180000000,
    location: "Andheri, Mumbai",
    type: "buy",
    beds: 3,
    baths: 2,
    area: 1800,
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
  },
  {
    id: "3",
    title: "Villa with Garden in Powai",
    price: 320000000,
    location: "Powai, Mumbai",
    type: "buy",
    beds: 4,
    baths: 4,
    area: 3000,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  },
  {
    id: "4",
    title: "Sea-Facing Penthouse in Marine Drive",
    price: 450000000,
    location: "Marine Drive, Mumbai",
    type: "buy",
    beds: 3,
    baths: 3,
    area: 2800,
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop",
  },
  {
    id: "5",
    title: "Premium 2BHK in Worli",
    price: 220000000,
    location: "Worli, Mumbai",
    type: "buy",
    beds: 2,
    baths: 2,
    area: 1500,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
  },
  {
    id: "6",
    title: "Spacious 5BHK Estate in Khandala",
    price: 380000000,
    location: "Khandala, Pune",
    type: "buy",
    beds: 5,
    baths: 5,
    area: 4200,
    imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&fit=crop",
  },
  {
    id: "7",
    title: "Modern Apartment in Lower Parel",
    price: 200000000,
    location: "Lower Parel, Mumbai",
    type: "buy",
    beds: 3,
    baths: 2,
    area: 1700,
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop",
  },
  // RENT Properties with Indian Names and Locations
  {
    id: "8",
    title: "Furnished 2BHK in Colaba",
    price: 120000,
    location: "Colaba, Mumbai",
    type: "rent",
    beds: 2,
    baths: 2,
    area: 1200,
    imageUrl: "/images/properties/11cf486c-e05b-403b-93eb-13220d04943f.avif",
  },
  {
    id: "9",
    title: "Studio Apartment in Fort",
    price: 55000,
    location: "Fort, Mumbai",
    type: "rent",
    beds: 1,
    baths: 1,
    area: 600,
    imageUrl: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&h=400&fit=crop",
  },
  {
    id: "10",
    title: "3BHK Villa in Bhayandar",
    price: 95000,
    location: "Bhayandar, Mumbai",
    type: "rent",
    beds: 3,
    baths: 2,
    area: 1800,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
  },
  {
    id: "11",
    title: "Luxury Apartment in Mahim",
    price: 140000,
    location: "Mahim, Mumbai",
    type: "rent",
    beds: 2,
    baths: 2,
    area: 1400,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  },
  {
    id: "12",
    title: "1BHK in Dadar",
    price: 65000,
    location: "Dadar, Mumbai",
    type: "rent",
    beds: 1,
    baths: 1,
    area: 750,
    imageUrl: "/images/properties/77483361_4_1738177143933-38014_470_1080.jpg",
  },
  {
    id: "13",
    title: "2BHK Apartment in Malad",
    price: 85000,
    location: "Malad, Mumbai",
    type: "rent",
    beds: 2,
    baths: 1,
    area: 1100,
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
  },
  {
    id: "14",
    title: "Penthouse Apartment in Kandivali",
    price: 125000,
    location: "Kandivali, Mumbai",
    type: "rent",
    beds: 3,
    baths: 2,
    area: 1600,
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop",
  },
  {
    id: "15",
    title: "Serviced Apartment in Borivali",
    price: 75000,
    location: "Borivali, Mumbai",
    type: "rent",
    beds: 2,
    baths: 2,
    area: 1200,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
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
