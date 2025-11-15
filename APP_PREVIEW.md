# Pantri App Preview & Screenshots

## App Flow & User Interface Preview

### 🎨 Design System

**Color Palette:**
- Primary: #4CAF50 (Green) - Fresh, food-related
- Secondary: #FF9800 (Orange) - Expiry warnings
- Background: #F5F5F5 (Light gray)
- Surface: #FFFFFF (White)
- Error: #F44336 (Red)

**Typography:**
- React Native Paper default (Material Design 3)
- System fonts (San Francisco on iOS)

---

## Screen Previews

### 1. Login Screen (`LoginScreen.tsx`)

```
┌─────────────────────────────────┐
│                                 │
│                                 │
│        Welcome to Pantri        │
│   Smart food management at      │
│      your fingertips            │
│                                 │
│   ┌─────────────────────────┐   │
│   │ 📧 Email                │   │
│   │ user@example.com        │   │
│   └─────────────────────────┘   │
│                                 │
│   ┌─────────────────────────┐   │
│   │ 🔒 Password             │   │
│   │ ••••••••••              │   │
│   └─────────────────────────┘   │
│                                 │
│   ┌─────────────────────────┐   │
│   │       LOGIN             │   │
│   └─────────────────────────┘   │
│                                 │
│   Don't have an account?        │
│         Register                │
│                                 │
└─────────────────────────────────┘
```

**Features:**
- Email & password input fields
- Material Design outlined text inputs
- Green primary button
- Link to registration
- Auto-keyboard handling
- Error snackbar notifications

---

### 2. Register Screen (`RegisterScreen.tsx`)

```
┌─────────────────────────────────┐
│                                 │
│      Create Account             │
│      Join Pantri today          │
│                                 │
│   ┌─────────────────────────┐   │
│   │ First Name              │   │
│   └─────────────────────────┘   │
│   ┌─────────────────────────┐   │
│   │ Last Name               │   │
│   └─────────────────────────┘   │
│   ┌─────────────────────────┐   │
│   │ Email *                 │   │
│   └─────────────────────────┘   │
│   ┌─────────────────────────┐   │
│   │ Password *              │   │
│   └─────────────────────────┘   │
│   ┌─────────────────────────┐   │
│   │ Confirm Password *      │   │
│   └─────────────────────────┘   │
│                                 │
│   ┌─────────────────────────┐   │
│   │      REGISTER           │   │
│   └─────────────────────────┘   │
│                                 │
│   Already have an account?      │
│           Login                 │
│                                 │
└─────────────────────────────────┘
```

**Features:**
- Scrollable form
- Password confirmation validation
- Required field indicators
- Inline validation
- Automatic login after registration

---

### 3. Inventory Screen (`InventoryScreen.tsx`)

```
┌─────────────────────────────────┐
│ My Inventory                    │
├─────────────────────────────────┤
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 🥛 Whole Milk              │ │
│ │ Tesco                       │ │
│ │ [📦 1 liter] [📍 Fridge]   │ │
│ │ Expires: Jan 20, 2025       │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 🥚 Free Range Eggs         │ │
│ │ Happy Farms                 │ │
│ │ [📦 6 units] [📍 Fridge]   │ │
│ │ ⚠️ Expires: Jan 18, 2025   │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ 🍞 Whole Wheat Bread       │ │
│ │ Hovis                       │ │
│ │ [📦 1 unit] [📍 Pantry]    │ │
│ │ Expires: Jan 22, 2025       │ │
│ └─────────────────────────────┘ │
│                                 │
│                                 │
│                            [+]  │ ← FAB Button
└─────────────────────────────────┘
```

**Features:**
- Card-based item list
- Visual chips for quantity & location
- Color-coded expiry dates
- Empty state message
- Floating Action Button (FAB) to add items
- Pull to refresh

---

### 4. Recipe Screen (`RecipeScreen.tsx`)

```
┌─────────────────────────────────┐
│ Recipe Suggestions              │
│ Based on what's in your kitchen │
├─────────────────────────────────┤
│                                 │
│ ┌─────────────────────────────┐ │
│ │ [Image: Scrambled Eggs]     │ │
│ │                             │ │
│ │ Fluffy Scrambled Eggs       │ │
│ │ Quick and easy breakfast    │ │
│ │ with eggs, milk, and butter │ │
│ │                             │ │
│ │ [🕐 10 min] [👤 2 servings] │ │
│ │                             │ │
│ │ [View Recipe] [Start Cook]  │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ [Image: French Toast]       │ │
│ │                             │ │
│ │ Classic French Toast        │ │
│ │ Uses expiring bread!        │ │
│ │                             │ │
│ │ [🕐 15 min] [👤 4 servings] │ │
│ │                             │ │
│ │ [View Recipe] [Start Cook]  │ │
│ └─────────────────────────────┘ │
│                                 │
│ ┌─────────────────────────────┐ │
│ │  Generate New Recipe with   │ │
│ │          AI ✨              │ │
│ └─────────────────────────────┘ │
│                                 │
└─────────────────────────────────┘
```

**Features:**
- Large recipe cards with images
- Prep time & serving indicators
- Prioritizes expiring ingredients
- AI generation button
- Step-by-step cooking mode
- Save favorites

---

### 5. Shopping List Screen (`ShoppingScreen.tsx`)

```
┌─────────────────────────────────┐
│ Shopping List                   │
├─────────────────────────────────┤
│                                 │
│ ☐ Milk                          │
│   2 liters              [🔴!]   │
│ ─────────────────────────────── │
│ ☐ Eggs                          │
│   12 units                      │
│ ─────────────────────────────── │
│ ☐ Bread                         │
│   1 loaf                        │
│ ─────────────────────────────── │
│ ☐ Apples                        │
│   1 kg                          │
│ ─────────────────────────────── │
│ ✅ Butter                       │
│   500g                          │
│ ─────────────────────────────── │
│ ✅ Cheese                       │
│   400g                          │
│ ─────────────────────────────── │
│                                 │
│                                 │
│                            [+]  │
└─────────────────────────────────┘
```

**Features:**
- Checkboxes to mark items bought
- Urgent items flagged with red icon
- Auto-added items from inventory
- Completed items shown at bottom
- Quantity indicators
- FAB to add custom items

---

### 6. Profile Screen (`ProfileScreen.tsx`)

```
┌─────────────────────────────────┐
│                                 │
│          ┌────┐                 │
│          │ JS │                 │
│          └────┘                 │
│        John Smith               │
│    john.smith@email.com         │
│                                 │
├─────────────────────────────────┤
│ ACCOUNT                         │
│                                 │
│ 🏠 Household Settings          │
│ 🍎 Dietary Preferences         │
│ 🔔 Notifications               │
│                                 │
├─────────────────────────────────┤
│ ANALYTICS                       │
│                                 │
│ 🗑️ Waste Report                │
│ 💰 Savings Report              │
│ 💡 Insights                    │
│                                 │
├─────────────────────────────────┤
│                                 │
│   ┌─────────────────────────┐   │
│   │      LOGOUT             │   │
│   └─────────────────────────┘   │
│                                 │
└─────────────────────────────────┘
```

**Features:**
- User avatar with initials
- Account settings menu
- Analytics navigation
- Logout button
- Settings for household & preferences

---

### 7. Bottom Navigation

```
┌─────────────────────────────────┐
│                                 │
│        [Current Screen]         │
│                                 │
│                                 │
├─────────────────────────────────┤
│  🧊      🍳      🛒      👤    │
│ Inventory Recipes Shopping Me  │
└─────────────────────────────────┘
```

**Tab Icons:**
- Inventory: 🧊 Fridge icon
- Recipes: 🍳 Food icon
- Shopping: 🛒 Cart icon
- Profile: 👤 Account icon

Active tab highlighted in green (#4CAF50)

---

## User Journey Flow

### First Time User

```
1. App Launch
   ↓
2. Login Screen (sees Register option)
   ↓
3. Tap "Register"
   ↓
4. Register Screen (fill details)
   ↓
5. Auto-login → Main App
   ↓
6. Inventory Screen (empty state)
   ↓
7. Tap [+] FAB → Add first item
   ↓
8. Item added → Shows in list
   ↓
9. Navigate to Recipes tab
   ↓
10. See "Add items first" message
    ↓
11. Add more inventory items
    ↓
12. Return to Recipes → See suggestions!
```

### Daily User Flow

```
1. App opens → Inventory Screen
   ↓
2. See notification: "3 items expiring soon"
   ↓
3. Tap notification → See expiring items
   ↓
4. Go to Recipes tab
   ↓
5. See recipes using expiring items
   ↓
6. Select recipe → Start cooking
   ↓
7. Mark ingredients as used
   ↓
8. Shopping list auto-updated
   ↓
9. Go shopping with smart list
   ↓
10. Check off items as bought
```

---

## Component Showcase

### Material Design Elements Used

**Text Inputs:**
- Outlined style (Material Design 3)
- Floating labels
- Helper text support
- Error states

**Buttons:**
- Contained (primary actions)
- Text (secondary actions)
- Loading states
- Disabled states

**Cards:**
- Elevated cards with shadows
- Card.Cover for images
- Card.Content for text
- Card.Actions for buttons

**Chips:**
- Outlined mode
- Icons (package, map-marker, clock)
- Used for metadata display

**Lists:**
- List.Item with left/right components
- List.Icon for visual indicators
- Dividers between items

**FAB (Floating Action Button):**
- Bottom-right positioned
- Green primary color
- Plus icon for "add" actions

**Snackbar:**
- Bottom toast notifications
- Auto-dismiss
- Error/success variants

---

## Color Coding System

### Expiry Status

- **Green** (>7 days): Safe, plenty of time
- **Orange** (3-7 days): Warning, use soon
- **Red** (<3 days): Urgent, expiring soon

### Priority Indicators

- **🔴** Urgent (shopping list)
- **🟠** Normal
- **🔵** Later / Low priority

### Storage Locations

- **🧊** Fridge
- **❄️** Freezer
- **📦** Pantry

---

## Animation & Interactions

### Gestures Supported

- **Pull to Refresh**: Inventory & Recipe lists
- **Swipe to Delete**: Shopping list items
- **Tap**: All buttons and cards
- **Long Press**: Item details (future)

### Transitions

- **Screen Navigation**: Slide transitions
- **Modal Pop-ups**: Fade in/out
- **List Updates**: Smooth insertion/deletion
- **Loading States**: Spinner animations

---

## Accessibility Features

- ✅ VoiceOver/TalkBack support (React Native built-in)
- ✅ High contrast ratios for text
- ✅ Touch targets ≥44x44 points
- ✅ Semantic labels for screen readers
- ✅ Error states with descriptive messages

---

## Demo Credentials (for testing)

```javascript
// Test user (will be created on first run)
Email: demo@pantri.app
Password: password123

// Or register new account with any email
```

---

## Next Steps to See Live Preview

To see the actual app running:

```bash
# 1. Start backend
cd backend
npm install
docker-compose up -d
npx prisma migrate dev
npm run dev

# 2. Start mobile app (new terminal)
cd mobile
npm install
npm start

# 3. Choose platform
# Press 'i' for iOS simulator
# Or scan QR code with Expo Go app on your phone
```

The app will launch in the iOS simulator and you can interact with all these screens!

---

## Screenshots (What You'll See)

When running, the app features:

1. **Smooth Material Design animations**
2. **Native iOS feel** with proper keyboard handling
3. **Fast navigation** between tabs
4. **Real-time updates** when adding/removing items
5. **Beautiful color palette** (green theme)
6. **Professional typography** (SF Pro on iOS)
7. **Intuitive icons** from Material Community Icons
8. **Responsive layouts** that work on all iPhone sizes

The design follows iOS Human Interface Guidelines while using Material Design components for consistency and rapid development.
