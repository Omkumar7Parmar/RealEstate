# 🔥 Firebase Setup Checklist

## ✅ COMPLETED BY ME

- [x] Installed Firebase package (`npm install firebase`)
- [x] Created `lib/firebase.ts` - Firebase initialization
- [x] Created `lib/firebase-auth.ts` - Authentication functions
- [x] Created `lib/firebase-agents.ts` - Agent management
- [x] Created `hooks/useFirebaseAuth.ts` - Auth state hook
- [x] Updated login page with Firebase integration
- [x] Updated register page with Firebase integration
- [x] Updated dashboard with Firebase protection
- [x] Created `.env.local` with your Firebase config
- [x] Created seed script for agents (`scripts/seed-agents.ts`)
- [x] Build succeeds without errors
- [x] Created comprehensive documentation

---

## ⚠️ YOU NEED TO DO (5-10 minutes)

### 1. Open Firebase Console
Go to: [firebase.google.com](https://firebase.google.com)
- Click "Go to console"
- Select your "realestate-30d92" project

### 2. Create Firestore Collections

**Location:** Firestore Database (in left sidebar)

#### Create "users" Collection:
- [ ] Click "Create Collection"
- [ ] Collection ID: `users`
- [ ] Click "Create Collection"
- [ ] **Skip adding first document** (it will auto-create on signup)

#### Create "agents" Collection:
- [ ] Click "Create Collection"
- [ ] Collection ID: `agents`
- [ ] Click "Create Collection"

### 3. Set Firestore Security Rules

**Location:** Firestore → Rules (tab at top)

**Replace everything with this:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
    
    // Everyone can read agents (public)
    match /agents/{agentId} {
      allow read: if true;
      allow write: if request.auth.uid != null;
    }
    
    // Default: deny everything
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

- [ ] Click "Publish" button (blue)

### 4. Enable Email/Password Authentication

**Location:** Authentication (in left sidebar) → Sign-in method (tab)

- [ ] Find "Email/Password"
- [ ] Click it
- [ ] Toggle "Enable" ON
- [ ] Click "Save"

### 5. (Optional) Seed Agents Data

**Option A: Using Script (Recommended)**
```bash
npm install -D ts-node
npx ts-node scripts/seed-agents.ts
```

Check success:
- [ ] Terminal shows "✅ Added agent:" messages
- [ ] Go to Firestore → agents collection
- [ ] You should see 6 agents created

**Option B: Manual Entry**
- [ ] Go to Firestore → agents collection
- [ ] Click "Add document"
- [ ] Generate document ID (auto)
- [ ] Add these fields for one agent:
  ```
  name: "Priya Sharma"
  photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
  bio: "Expert in luxury apartments"
  rating: 4.8
  propertiesCount: 24
  properties: ["1", "2", "3"]
  email: "priya@realestate.com"
  phone: "+91-9876543210"
  region: "Mumbai"
  createdAt: (current timestamp)
  updatedAt: (current timestamp)
  ```

---

## 🧪 Test Everything Works

### Test 1: Register New User
1. [ ] Go to `http://localhost:3000/register`
2. [ ] Fill form:
   - Name: "Test User"
   - Email: "test@example.com"
   - Password: "password123"
   - Confirm: "password123"
3. [ ] Click "Create Account"
4. [ ] Should redirect to dashboard
5. [ ] Dashboard shows "Welcome back Test User"

**Verify in Firebase:**
- [ ] Go to Firebase Console → Authentication
- [ ] You should see "test@example.com" in Users list

- [ ] Go to Firebase Console → Firestore → users collection
- [ ] You should see new document with test user's data

### Test 2: Login
1. [ ] Click "Logout" on dashboard (or go to `/login`)
2. [ ] Go to `http://localhost:3000/login`
3. [ ] Enter email: "test@example.com"
4. [ ] Enter password: "password123"
5. [ ] Click "Sign In"
6. [ ] Should show dashboard again

### Test 3: Wrong Password
1. [ ] Go to `/login`
2. [ ] Enter email: "test@example.com"
3. [ ] Enter password: "wrongpassword"
4. [ ] Click "Sign In"
5. [ ] Should show error message
6. [ ] Should NOT redirect to dashboard

### Test 4: New Email
1. [ ] Try register with new email: "another@example.com"
2. [ ] Should create new account successfully
3. [ ] Should show in Firebase Authentication

### Test 5: Logout
1. [ ] Click "Logout" button on dashboard
2. [ ] Should redirect to home page
3. [ ] Session should be cleared

---

## 📋 Troubleshooting

### "auth/configuration-not-found"
**Problem:** Firebase not configured
**Solution:** 
- [ ] Check `.env.local` file exists in project root
- [ ] Verify all 6 environment variables are present
- [ ] Restart dev server: `npm run dev`

### "Permission denied" when accessing Firestore
**Problem:** Security rules not set correctly
**Solution:**
- [ ] Go to Firestore → Rules
- [ ] Copy the rules from STEP 3 above
- [ ] Click "Publish"
- [ ] Wait 30 seconds for rules to take effect

### "User not found" after register
**Problem:** User in Auth but not in Firestore
**Solution:**
- [ ] Check Firestore rules allow writes to /users/{uid}
- [ ] Check user document exists in Firestore → users collection
- [ ] Try logging out and logging back in

### Dashboard shows loading forever
**Problem:** Hook not connecting to Firebase
**Solution:**
- [ ] Check browser console for errors (F12)
- [ ] Verify Firestore rules are published
- [ ] Check Firebase Connection status in Console

### Can't seed agents
**Problem:** Script not running
**Solution:**
- [ ] Install ts-node: `npm install -D ts-node`
- [ ] Make sure `.env.local` has Firebase config
- [ ] Run: `npx ts-node scripts/seed-agents.ts`

---

## ✨ After Setup is Complete

Your app now has:
- ✅ User registration with email/password
- ✅ User login with session persistence
- ✅ Protected dashboard (only authenticated users)
- ✅ User profiles stored in Firestore
- ✅ Agent data stored in Firebase
- ✅ Real-time auth state synchronization
- ✅ Logout functionality

### Next Features to Add:
- [ ] Google Sign-In
- [ ] Profile picture upload
- [ ] Agent contact/messaging
- [ ] Save favorite properties
- [ ] User reviews/ratings
- [ ] Email notifications
- [ ] Advanced search filters

---

## 📞 Common Questions

**Q: Do I need to pay for Firebase?**
A: No! You have a free tier that includes:
- 50k reads/month
- 20k writes/month
- 1GB storage
- Plenty for testing

**Q: How do I view user data I created?**
A: 
1. Firebase Console → Firestore
2. Click "users" collection
3. You see all registered users' profiles

**Q: Can I delete users?**
A: Yes!
- Authentication: Select user → Delete
- Firestore: Open user document → Delete

**Q: What if I need to change the rules later?**
A: Easy! Firestore → Rules → Edit → Publish. Takes effect in ~30 seconds.

**Q: Is my data secure?**
A: Yes! Rules prevent:
- Users reading other users' data
- Unauthenticated users from writing
- Public reads only for agents

---

## 🎉 You're Done!

Once you complete the checklist above:
1. Your app has full authentication
2. User data persists in Firestore
3. Dashboard is protected
4. Agents are stored and queryable
5. Ready for production!

Questions? Check `FIREBASE_SETUP.md` for detailed info.
