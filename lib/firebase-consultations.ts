import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export interface ConsultationBooking {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  agentId: string;
  agentName: string;
  message?: string;
  userId?: string;
}

export async function saveConsultationBooking(booking: ConsultationBooking): Promise<string> {
  try {
    const consultationsRef = collection(db, "consultations");
    
    const dataToSave = {
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      date: booking.date,
      time: booking.time,
      agentId: booking.agentId,
      agentName: booking.agentName,
      message: booking.message || "",
      userId: booking.userId || null,
      createdAt: serverTimestamp(),
      status: "pending",
    };

    const docRef = await addDoc(consultationsRef, dataToSave);
    console.log("Consultation booking saved with ID:", docRef.id);
    return docRef.id;
  } catch (error: any) {
    console.error("Error saving consultation booking:", error);
    console.error("Error code:", error.code);
    console.error("Error message:", error.message);
    throw new Error(`Failed to save consultation booking: ${error.message}`);
  }
}
