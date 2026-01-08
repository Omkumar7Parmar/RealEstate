# Firebase Rules - Quick Fix (3 Minutes)

## The Problem
```
Error: Missing or insufficient permissions
```
Your Firestore security rules are blocking user registration.

## The Quick Fix

### Step 1: Go to Firebase Console
```
https://console.firebase.google.com/
→ Select Your Project
→ Firestore Database (left menu)
→ Rules Tab (top)
```

### Step 2: Copy This Code
```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Users can read/write their own data
    match /users/{uid} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
    
    // Public read, authenticated write
    match /properties/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /agents/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    match /listings/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Private saved items per user
    match /saved/{uid}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

### Step 3: Click Publish

### Step 4: Wait 30 Seconds

### Step 5: Refresh Your App & Try Signup

---

## ✅ What This Allows
- Users create own account ✅
- Users read properties (no login needed) ✅
- Users save properties (after login) ✅
- Users can't access other users' data ✅

## ❌ What This Blocks
- Reading other users' private data ❌
- Unauthenticated writes ❌
- Anonymous property creation ❌

---

## Still Not Working?

**Try This:**
1. Hard refresh browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Open in incognito/private window
4. Check Firebase console for any error messages

---

## Need More Details?
See `FIREBASE_SECURITY_RULES.md` for complete setup guide.
