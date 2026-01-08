import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

export interface FirebaseAgent {
  id?: string;
  name: string;
  photoUrl: string;
  bio: string;
  rating: number;
  propertiesCount: number;
  properties: string[]; // property IDs
  email?: string;
  phone?: string;
  region?: string;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Add a new agent to Firestore
 */
export async function addAgent(agent: FirebaseAgent): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, "agents"), {
      ...agent,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return docRef.id;
  } catch (error: any) {
    throw new Error(error.message || "Failed to add agent");
  }
}

/**
 * Get all agents from Firestore
 */
export async function getAllAgents(): Promise<FirebaseAgent[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "agents"));
    const agents: FirebaseAgent[] = [];
    querySnapshot.forEach((doc) => {
      agents.push({
        id: doc.id,
        ...doc.data(),
      } as FirebaseAgent);
    });
    return agents;
  } catch (error: any) {
    console.error("Error fetching agents:", error.message);
    return [];
  }
}

/**
 * Get single agent by ID
 */
export async function getAgentById(agentId: string): Promise<FirebaseAgent | null> {
  try {
    const docSnap = await getDoc(doc(db, "agents", agentId));
    return docSnap.exists()
      ? ({ id: docSnap.id, ...docSnap.data() } as FirebaseAgent)
      : null;
  } catch (error: any) {
    console.error("Error fetching agent:", error.message);
    return null;
  }
}

/**
 * Update agent profile
 */
export async function updateAgent(
  agentId: string,
  updates: Partial<FirebaseAgent>
): Promise<void> {
  try {
    await updateDoc(doc(db, "agents", agentId), {
      ...updates,
      updatedAt: new Date().toISOString(),
    });
  } catch (error: any) {
    throw new Error(error.message || "Failed to update agent");
  }
}

/**
 * Delete agent
 */
export async function deleteAgent(agentId: string): Promise<void> {
  try {
    await deleteDoc(doc(db, "agents", agentId));
  } catch (error: any) {
    throw new Error(error.message || "Failed to delete agent");
  }
}

/**
 * Bulk add agents (for migration/seeding)
 */
export async function bulkAddAgents(agents: FirebaseAgent[]): Promise<string[]> {
  try {
    const agentIds: string[] = [];
    for (const agent of agents) {
      const id = await addAgent(agent);
      agentIds.push(id);
    }
    return agentIds;
  } catch (error: any) {
    throw new Error(error.message || "Failed to bulk add agents");
  }
}

/**
 * Search agents by region
 */
export async function searchAgentsByRegion(region: string): Promise<FirebaseAgent[]> {
  try {
    const q = query(collection(db, "agents"), where("region", "==", region));
    const querySnapshot = await getDocs(q);
    const agents: FirebaseAgent[] = [];
    querySnapshot.forEach((doc) => {
      agents.push({
        id: doc.id,
        ...doc.data(),
      } as FirebaseAgent);
    });
    return agents;
  } catch (error: any) {
    console.error("Error searching agents:", error.message);
    return [];
  }
}

/**
 * Get top rated agents
 */
export async function getTopRatedAgents(limit: number = 5): Promise<FirebaseAgent[]> {
  try {
    const querySnapshot = await getDocs(collection(db, "agents"));
    const agents: FirebaseAgent[] = [];
    querySnapshot.forEach((doc) => {
      agents.push({
        id: doc.id,
        ...doc.data(),
      } as FirebaseAgent);
    });
    return agents
      .sort((a, b) => (b.rating || 0) - (a.rating || 0))
      .slice(0, limit);
  } catch (error: any) {
    console.error("Error fetching top agents:", error.message);
    return [];
  }
}
