import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
} from "firebase/auth";
import { auth, db } from "./firebase";
import {
  doc,
  setDoc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export interface UserData {
  uid: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

/**
 * Register a new user with email and password
 * Creates user in Firebase Auth and stores profile in Firestore
 */
export async function registerUser(
  email: string,
  password: string,
  name: string
): Promise<UserData> {
  try {
    // Create Firebase Auth user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const firebaseUser = userCredential.user;

    // Create user document in Firestore
    const userData: UserData = {
      uid: firebaseUser.uid,
      name,
      email,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await setDoc(doc(db, "users", firebaseUser.uid), userData);

    return userData;
  } catch (error: any) {
    throw new Error(error.message || "Registration failed");
  }
}

/**
 * Login user with email and password
 * Returns user data from Firestore
 */
export async function loginUserWithFirebase(
  email: string,
  password: string
): Promise<UserData> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;

    // Fetch user data from Firestore
    const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));

    if (!userDoc.exists()) {
      throw new Error("User profile not found");
    }

    return userDoc.data() as UserData;
  } catch (error: any) {
    throw new Error(error.message || "Login failed");
  }
}

/**
 * Logout current user
 */
export async function logoutUser(): Promise<void> {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new Error(error.message || "Logout failed");
  }
}

/**
 * Get current user from Firebase Auth
 * Returns null if not authenticated
 */
export function getCurrentFirebaseUser(): FirebaseUser | null {
  return auth.currentUser;
}

/**
 * Listen to auth state changes
 * Calls callback whenever user logs in/out
 */
export function onUserAuthStateChanged(
  callback: (user: FirebaseUser | null) => void
) {
  return onAuthStateChanged(auth, callback);
}

/**
 * Fetch user data from Firestore by UID
 */
export async function getUserDataFromFirestore(
  uid: string
): Promise<UserData | null> {
  try {
    const userDoc = await getDoc(doc(db, "users", uid));
    return userDoc.exists() ? (userDoc.data() as UserData) : null;
  } catch (error: any) {
    console.error("Error fetching user data:", error.message);
    return null;
  }
}

/**
 * Update user profile in Firestore
 */
export async function updateUserProfile(
  uid: string,
  updates: Partial<UserData>
): Promise<void> {
  try {
    await setDoc(
      doc(db, "users", uid),
      {
        ...updates,
        updatedAt: new Date().toISOString(),
      },
      { merge: true }
    );
  } catch (error: any) {
    throw new Error(error.message || "Update failed");
  }
}

/**
 * Check if email already exists in Firestore
 */
export async function checkEmailExists(email: string): Promise<boolean> {
  try {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error: any) {
    console.error("Error checking email:", error.message);
    return false;
  }
}
