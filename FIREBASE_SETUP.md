# Firebase Integration Setup Guide

## ✅ Already Completed (By Me)

### 1. **Firebase Libraries Installed**
```bash
npm install firebase
```

### 2. **Firebase Config File Created**
- **File:** `lib/firebase.ts`
- Initializes Firebase app, Auth, and Firestore
- Prevents duplicate initialization

### 3. **Authentication Service**
- **File:** `lib/firebase-auth.ts`
- Functions:
  - `registerUser()` - Create new user account
  - `loginUserWithFirebase()` - Sign in user
  - `logoutUser()` - Sign out
  - `getCurrentFirebaseUser()` - Get current user
  - `getUserDataFromFirestore()` - Fetch user profile
  - `updateUserProfile()` - Update user info
  - `checkEmailExists()` - Check if email is taken

### 4. **Agent Service**
- **File:** `lib/firebase-agents.ts`
- Functions:
  - `addAgent()` - Add single agent
  - `getAllAgents()` - Fetch all agents
  - `getAgentById()` - Get specific agent
  - `updateAgent()` - Update agent info
  - `deleteAgent()` - Remove agent
  - `bulkAddAgents()` - Seed multiple agents
  - `searchAgentsByRegion()` - Filter by region
  - `getTopRatedAgents()` - Get best agents

### 5. **Custom Auth Hook**
- **File:** `hooks/useFirebaseAuth.ts`
- Manages auth state in React components
- Auto-syncs with Firestore user data
- Handles loading states

### 6. **Updated Pages**
- **Login Page:** `app/(auth)/login/page.tsx` - Uses Firebase auth
- **Register Page:** `app/(auth)/register/page.tsx` - Creates user in Firebase
- **Dashboard:** `app/(dashboard)/dashboard/page.tsx` - Protected, uses Firebase auth

### 7. **Environment Variables**
- **File:** `.env.local`
- Contains your Firebase config (already populated)

---

## 📋 What YOU Need to Do (Firestore Setup)

### Step 1: Create Firestore Collections

Go to [Firebase Console](https://console.firebase.google.com) → Your Project → Firestore Database

#### **Create `users` Collection:**
1. Click "Create Collection"
2. Name it: `users`
3. Click "Create Collection"
4. **You can skip adding a document** - they'll be auto-created on signup

#### **Create `agents` Collection:**
1. Click "Create Collection" again
2. Name it: `agents`
3. Click "Create Collection"

---

### Step 2: Set Firestore Security Rules

Go to Firestore → Rules → Replace with this:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow users to read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
    
    // Allow anyone to read agents (public)
    match /agents/{agentId} {
      allow read: if true;
      allow write: if request.auth.uid != null; // Only authenticated users can create/edit
    }
    
    // Default: deny all
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

Click "Publish" when done.

---

### Step 3: Enable Email/Password Authentication

Go to Firebase Console → Authentication → Sign-in method

1. Click "Email/Password"
2. Enable "Email/Password"
3. Click "Save"

---

### Step 4: (Optional) Seed Agents Data

Once Firestore is ready, populate agents:

**Option A: Use Admin SDK Script**
```bash
# Install ts-node if not already
npm install -D ts-node

# Run seeding script
npx ts-node scripts/seed-agents.ts
```

**Option B: Manual Entry**
Go to Firestore → agents collection → Add documents manually with this structure:

```json
{
  "name": "Priya Sharma",
  "photoUrl": "https://images.unsplash.com/...",
  "bio": "Expert in luxury apartments",
  "rating": 4.8,
  "propertiesCount": 24,
  "properties": ["1", "2", "3"],
  "email": "priya@realestate.com",
  "phone": "+91-9876543210",
  "region": "Mumbai",
  "createdAt": "2025-01-07T...",
  "updatedAt": "2025-01-07T..."
}
```

---

## 🔄 Data Flow

### User Registration:
```
User fills form 
  → validateEmail/validatePassword
    → registerUser() 
      → Creates Firebase Auth user
        → Stores profile in Firestore /users/{uid}
          → Redirects to dashboard
```

### User Login:
```
User enters credentials
  → loginUserWithFirebase()
    → Validates in Firebase Auth
      → Fetches user data from Firestore
        → useFirebaseAuth() hook updates state
          → Dashboard displays user info
```

### Dashboard:
```
Component mounts
  → useFirebaseAuth() hook
    → Listens to auth changes
      → If logged in: fetches user from Firestore
        → Displays welcome, stats, recent activity
        → Shows logout button
      → If not logged in: redirects to login
```

---

## 📁 File Structure

```
lib/
  ├── firebase.ts              # Firebase initialization
  ├── firebase-auth.ts         # Auth functions
  └── firebase-agents.ts       # Agent management

hooks/
  └── useFirebaseAuth.ts       # Auth state hook

app/
  ├── (auth)/
  │   ├── login/page.tsx       # Login form (Firebase)
  │   └── register/page.tsx    # Registration form (Firebase)
  └── (dashboard)/
      └── dashboard/page.tsx   # Protected dashboard

scripts/
  └── seed-agents.ts           # Seed agents to Firebase

.env.local                       # Firebase config
```

---

## 🧪 Testing

### Test Registration:
1. Go to `http://localhost:3000/register`
2. Fill form with:
   - Name: "Test User"
   - Email: "test@example.com"
   - Password: "password123"
3. Submit
4. Check Firebase → Authentication → You should see new user
5. Check Firestore → users collection → New document with user data

### Test Login:
1. Go to `http://localhost:3000/login`
2. Enter email and password from above
3. Should redirect to dashboard
4. Dashboard shows user name and email

### Test Logout:
1. On dashboard, click "Logout"
2. Redirects to home page
3. Session cleared

---

## 🚀 Available Functions

### Authentication (`lib/firebase-auth.ts`)
- `registerUser(email, password, name)` - Sign up
- `loginUserWithFirebase(email, password)` - Sign in
- `logoutUser()` - Sign out
- `getCurrentFirebaseUser()` - Get current user
- `getUserDataFromFirestore(uid)` - Fetch profile
- `updateUserProfile(uid, updates)` - Update profile
- `checkEmailExists(email)` - Check if email taken
- `onUserAuthStateChanged(callback)` - Listen to auth changes

### Agents (`lib/firebase-agents.ts`)
- `addAgent(agent)` - Create new agent
- `getAllAgents()` - Fetch all agents
- `getAgentById(agentId)` - Get single agent
- `updateAgent(agentId, updates)` - Update agent
- `deleteAgent(agentId)` - Remove agent
- `bulkAddAgents(agents)` - Seed multiple agents
- `searchAgentsByRegion(region)` - Filter by region
- `getTopRatedAgents(limit)` - Get best agents

### Hook (`hooks/useFirebaseAuth.ts`)
- `useFirebaseAuth()` - Returns:
  - `user` - Firebase Auth user
  - `userData` - User profile from Firestore
  - `isLoading` - Loading state
  - `isAuthenticated` - Is logged in
  - `logout()` - Function to logout

---

## ⚠️ Important Notes

1. **Environment Variables:** `.env.local` is gitignored (never commit)
2. **Firestore Rules:** Restrict data access - only users can read/write their own data
3. **Real-Time Updates:** `useFirebaseAuth()` automatically updates when auth changes
4. **User Data:** Stored in Firestore after registration
5. **Error Handling:** Firebase errors are caught and shown to user

---

## 📞 Common Issues

**Q: Getting "auth/configuration-not-found" error?**
A: Make sure `.env.local` is created with all Firebase config vars

**Q: Users can't log in?**
A: Check:
- Is Email/Password auth enabled in Firebase?
- Are Firestore rules published?
- Is user document in `/users/{uid}` collection?

**Q: Dashboard shows loading forever?**
A: Check browser console for errors. Verify Firestore connection in Firebase logs.

**Q: Need to reset everything?**
A: In Firebase Console:
- Delete all documents from `users` collection
- Delete all documents from `agents` collection
- Delete all users from Authentication
- Then test again from fresh

---

## ✨ Next Steps

After setup is working:
1. Add "Forgot Password" functionality
2. Add Google/GitHub social login
3. Add user profile editing
4. Add profile picture upload
5. Add agent chat/messaging
6. Add favorites/saved properties
