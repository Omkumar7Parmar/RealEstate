import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export interface TourBooking {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  propertyId: string;
  agentId: string;
  propertyTitle: string;
  userId?: string;
}

export async function saveTourBooking(booking: TourBooking): Promise<string> {
  try {
    const toursRef = collection(db, "tours");
    
    const dataToSave = {
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      date: booking.date,
      time: booking.time,
      propertyId: booking.propertyId,
      agentId: booking.agentId,
      propertyTitle: booking.propertyTitle,
      userId: booking.userId || null,
      createdAt: serverTimestamp(),
      status: "pending",
    };

    const docRef = await addDoc(toursRef, dataToSave);
    console.log("Tour booking saved with ID:", docRef.id);
    return docRef.id;
  } catch (error: any) {
    console.error("Error saving tour booking:", error);
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
    throw new Error(`Failed to save tour booking: ${error.message}`);
  }
}
