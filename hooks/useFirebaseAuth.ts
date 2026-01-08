"use client";

import { useEffect, useState } from "react";
import { User as FirebaseUser } from "firebase/auth";
import {
  onUserAuthStateChanged,
  getUserDataFromFirestore,
  logoutUser,
} from "@/lib/firebase-auth";
import { UserData } from "@/lib/firebase-auth";

export interface AuthState {
  user: FirebaseUser | null;
  userData: UserData | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

/**
 * Custom hook to manage Firebase authentication state
 * Listens to auth changes and syncs user data from Firestore
 */
export function useFirebaseAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    userData: null,
    isLoading: true,
    isAuthenticated: false,
  });

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = onUserAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        // User is logged in - fetch their data from Firestore
        const userData = await getUserDataFromFirestore(firebaseUser.uid);
        setAuthState({
          user: firebaseUser,
          userData: userData,
          isLoading: false,
          isAuthenticated: true,
        });
      } else {
        // User is logged out
        setAuthState({
          user: null,
          userData: null,
          isLoading: false,
          isAuthenticated: false,
        });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await logoutUser();
      setAuthState({
        user: null,
        userData: null,
        isLoading: false,
        isAuthenticated: false,
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return {
    ...authState,
    logout,
  };
}
