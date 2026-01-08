/**
 * Script to seed agents data to Firebase
 * Run with: node -r ts-node/register scripts/seed-agents.ts
 */

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const now = Date.now();

const agentsData = [
  {
    name: "Priya Sharma",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80&auto=format&crop=faces&fm=jpg",
    bio: "Expert in luxury apartments and villas in Mumbai",
    rating: 4.8,
    propertiesCount: 24,
    properties: ["1", "2", "3"],
    email: "priya.sharma@realestate.com",
    phone: "+91-98765-43210",
    region: "Mumbai",
    createdAt: now,
    updatedAt: now,
  },
  {
    name: "Rajesh Kumar",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80&auto=format&crop=faces&fm=jpg",
    bio: "Specialized in commercial properties and office spaces",
    rating: 4.6,
    propertiesCount: 18,
    properties: ["4", "5"],
    email: "rajesh.kumar@realestate.com",
    phone: "+91-98765-43211",
    region: "Delhi",
    createdAt: now,
    updatedAt: now,
  },
  {
    name: "Anjali Patel",
    photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80&auto=format&crop=faces&fm=jpg",
    bio: "Focused on residential projects and new launches",
    rating: 4.9,
    propertiesCount: 32,
    properties: ["6", "7", "8"],
    email: "anjali.patel@realestate.com",
    phone: "+91-98765-43212",
    region: "Bangalore",
    createdAt: now,
    updatedAt: now,
  },
  {
    name: "Vikram Singh",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80&auto=format&crop=faces&fm=jpg",
    bio: "Expert in suburban and township projects",
    rating: 4.5,
    propertiesCount: 20,
    properties: ["9", "10"],
    email: "vikram.singh@realestate.com",
    phone: "+91-98765-43213",
    region: "Pune",
    createdAt: now,
    updatedAt: now,
  },
  {
    name: "Neha Desai",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&q=80&auto=format&crop=faces&fm=jpg",
    bio: "Specializes in investment properties and portfolios",
    rating: 4.7,
    propertiesCount: 28,
    properties: ["11", "12"],
    email: "neha.desai@realestate.com",
    phone: "+91-98765-43214",
    region: "Hyderabad",
    createdAt: now,
    updatedAt: now,
  },
  {
    name: "Arjun Verma",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80&auto=format&crop=faces&fm=jpg",
    bio: "Expert in beachfront and premium properties",
    rating: 4.8,
    propertiesCount: 15,
    properties: ["3", "8"],
    email: "arjun.verma@realestate.com",
    phone: "+91-98765-43215",
    region: "Goa",
    createdAt: now,
    updatedAt: now,
  },
];

async function seedAgents() {
  try {
    console.log("🌱 Starting to seed agents...");

    for (const agent of agentsData) {
      const docRef = await addDoc(collection(db, "agents"), agent);
      console.log(`✅ Added agent: ${agent.name} (ID: ${docRef.id})`);
    }

    console.log("\n✨ All agents seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding agents:", error);
    process.exit(1);
  }
}

seedAgents();
