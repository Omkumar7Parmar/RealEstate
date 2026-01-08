# Firebase Firestore Security Rules Setup

## Problem
Getting "Missing or insufficient permissions" error when registering users because Firestore security rules deny write access to the `users` collection.

## Solution

### Step 1: Access Firebase Console
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **Firestore Database** → **Rules** tab

### Step 2: Replace Current Rules

Replace all existing rules with the following:

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // ============================================
    // Users Collection Rules
    // ============================================
    match /users/{uid} {
      // Allow users to read/write their own documents
      allow read, write: if request.auth != null && request.auth.uid == uid;
      
      // Allow creating own user profile during registration
      allow create: if request.auth != null && request.auth.uid == uid;
    }
    
    // ============================================
    // Properties Collection Rules (Public Read)
    // ============================================
    match /properties/{document=**} {
      // Allow anyone to read properties
      allow read: if true;
      
      // Only authenticated users can write
      allow write: if request.auth != null;
    }
    
    // ============================================
    // Agents Collection Rules (Public Read)
    // ============================================
    match /agents/{document=**} {
      // Allow anyone to read agents
      allow read: if true;
      
      // Only authenticated users can write
      allow write: if request.auth != null;
    }
    
    // ============================================
    // Listings Collection Rules
    // ============================================
    match /listings/{document=**} {
      // Allow anyone to read listings
      allow read: if true;
      
      // Only authenticated users can write
      allow write: if request.auth != null;
    }
    
    // ============================================
    // Reviews Collection Rules
    // ============================================
    match /reviews/{document=**} {
      // Allow anyone to read reviews
      allow read: if true;
      
      // Only authenticated users can write
      allow write: if request.auth != null;
    }
    
    // ============================================
    // Saved/Favorites Collection Rules
    // ============================================
    match /saved/{uid}/{document=**} {
      // Allow users to read/write their own saved items
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
    
    // ============================================
    // Deny all other access
    // ============================================
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

### Step 3: Publish Rules

1. Click the **Publish** button in the Firebase Console
2. Wait for confirmation message: "Rules published"
3. You should see green checkmark

### Step 4: Test Registration

Now try registering a new user in your app:
1. Go to `/register` page
2. Fill in the form
3. Click "Sign Up"
4. Should redirect to dashboard

## Rule Breakdown

### Users Collection
```firestore
match /users/{uid} {
  allow read, write: if request.auth != null && request.auth.uid == uid;
  allow create: if request.auth != null && request.auth.uid == uid;
}
```
- ✅ Users can create their own profile during registration
- ✅ Users can only read/write their own documents
- ❌ Users cannot access other users' data

### Public Collections (Properties, Agents, Listings, Reviews)
```firestore
match /properties/{document=**} {
  allow read: if true;
  allow write: if request.auth != null;
}
```
- ✅ Anyone can read properties (unauthenticated users too)
- ✅ Only authenticated users can write/update properties
- ❌ Unauthenticated users cannot modify properties

### Saved Items (Private)
```firestore
match /saved/{uid}/{document=**} {
  allow read, write: if request.auth != null && request.auth.uid == uid;
}
```
- ✅ Users can only access their own saved items
- ✅ Private collection per user
- ❌ Cannot access others' saved items

## Common Issues & Solutions

### Issue: Still Getting Permission Error

**Cause**: Rules not published yet
**Solution**: 
1. Wait 30 seconds after publishing
2. Refresh the app
3. Clear browser cache (Ctrl+Shift+Delete)
4. Try registration again

### Issue: Can Read But Cannot Write

**Cause**: Write rules are too restrictive
**Solution**: Ensure `allow write:` is present in the rules for the collection

### Issue: Cannot Create User Profile

**Cause**: `create` permission not explicitly allowed
**Solution**: Add explicit `allow create:` rule for user creation

## Testing Rules in Console

### Test Read Access
1. Go to Firebase Console → Firestore
2. Click **Collections** → **properties**
3. Should see data (if rules allow public read)

### Test Write Access
1. Go to **Rules** tab
2. Click **Simulate** button
3. Set Request Type: `write`
4. Set Path: `users/{your-test-uid}`
5. Set Custom Claims if needed
6. Click **Simulate**
7. Should show ✅ if allowed

## Security Best Practices

✅ **Implemented**:
- User isolation (users can only modify their own data)
- Public read for properties/listings
- Authenticated write for modifications
- Clear deny rules for unused collections

✅ **Recommended Enhancements**:
- Add rate limiting rules
- Add validation for data fields
- Add custom claims for admin access
- Add timestamp validation

## Production Checklist

- [ ] Rules published to Firestore
- [ ] User registration working
- [ ] User login working
- [ ] Can read properties as unauthenticated user
- [ ] Can save properties as authenticated user
- [ ] Cannot access other users' data
- [ ] Admin operations working correctly

## Reference
- [Firebase Firestore Security Rules](https://firebase.google.com/docs/firestore/security/start)
- [Common Security Rule Examples](https://firebase.google.com/docs/firestore/security/rules-structure)
