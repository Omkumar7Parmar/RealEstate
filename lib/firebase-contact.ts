import { db } from './firebase';
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
  orderBy,
} from 'firebase/firestore';

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  message: string;
  propertyId?: string;
  timestamp?: any;
  updatedAt?: any;
  status?: 'new' | 'responded' | 'closed';
  adminResponse?: string;
}

/**
 * Store a contact form submission in Firestore
 */
export async function saveContactSubmission(
  submission: ContactSubmission
): Promise<string> {
  try {
    const contactsRef = collection(db, 'contacts');
    
    // Build data object, excluding undefined fields
    const dataToSave: any = {
      name: submission.name,
      email: submission.email,
      message: submission.message,
      timestamp: serverTimestamp(),
      status: 'new',
      adminNotes: '',
    };
    
    // Only include propertyId if it's provided and not empty
    if (submission.propertyId && submission.propertyId.trim()) {
      dataToSave.propertyId = submission.propertyId.trim();
    }
    
    const docRef = await addDoc(contactsRef, dataToSave);

    console.log('Contact submission saved with ID:', docRef.id);
    return docRef.id;
  } catch (error: any) {
    console.error('Error saving contact submission:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    throw new Error(`Failed to save contact submission: ${error.message}`);
  }
}

/**
 * Get all contact submissions (for admin dashboard)
 */
export async function getAllContactSubmissions(): Promise<ContactSubmission[]> {
  try {
    const contactsRef = collection(db, 'contacts');
    const q = query(contactsRef, orderBy('timestamp', 'desc'));
    
    const querySnapshot = await getDocs(q);
    const submissions: ContactSubmission[] = [];

    querySnapshot.forEach((doc) => {
      submissions.push({
        id: doc.id,
        ...doc.data(),
      } as ContactSubmission);
    });

    return submissions;
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    throw new Error('Failed to fetch contact submissions');
  }
}

/**
 * Get contact submissions by email
 */
export async function getContactSubmissionsByEmail(
  email: string
): Promise<ContactSubmission[]> {
  try {
    const contactsRef = collection(db, 'contacts');
    const q = query(
      contactsRef,
      where('email', '==', email),
      orderBy('timestamp', 'desc')
    );

    const querySnapshot = await getDocs(q);
    const submissions: ContactSubmission[] = [];

    querySnapshot.forEach((doc) => {
      submissions.push({
        id: doc.id,
        ...doc.data(),
      } as ContactSubmission);
    });

    return submissions;
  } catch (error) {
    console.error('Error fetching contact submissions by email:', error);
    throw new Error('Failed to fetch contact submissions');
  }
}

/**
 * Get contact submissions by status
 */
export async function getContactSubmissionsByStatus(
  status: 'new' | 'responded' | 'closed'
): Promise<ContactSubmission[]> {
  try {
    const contactsRef = collection(db, 'contacts');
    const q = query(
      contactsRef,
      where('status', '==', status),
      orderBy('timestamp', 'desc')
    );

    const querySnapshot = await getDocs(q);
    const submissions: ContactSubmission[] = [];

    querySnapshot.forEach((doc) => {
      submissions.push({
        id: doc.id,
        ...doc.data(),
      } as ContactSubmission);
    });

    return submissions;
  } catch (error) {
    console.error('Error fetching contact submissions by status:', error);
    throw new Error('Failed to fetch contact submissions');
  }
}
