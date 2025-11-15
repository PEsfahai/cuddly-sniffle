# Pantri App - Visual Mockups & UI Design

## 📱 App Screenshots & Design Specification

### Design Principles
- **Clean & Minimal**: Focus on content, not clutter
- **Green Theme**: Fresh, food-related colors
- **Material Design 3**: Modern, consistent UI
- **iOS Native Feel**: Platform-appropriate interactions

---

## Color Palette

```css
/* Primary Colors */
--primary: #4CAF50;        /* Fresh Green */
--primary-light: #66BB6A;  /* Light Green */
--primary-dark: #388E3C;   /* Dark Green */

/* Secondary Colors */
--secondary: #FF9800;      /* Warning Orange */
--accent: #2196F3;         /* Info Blue */

/* Status Colors */
--success: #4CAF50;        /* Green */
--warning: #FFC107;        /* Amber */
--error: #F44336;          /* Red */

/* Neutrals */
--background: #F5F5F5;     /* Light Gray */
--surface: #FFFFFF;        /* White */
--text-primary: #212121;   /* Dark Gray */
--text-secondary: #757575; /* Medium Gray */
```

---

## Typography Scale

```
Headline Large:  32px, Bold
Headline Medium: 24px, Bold
Headline Small:  20px, Bold
Title Large:     22px, Medium
Title Medium:    16px, Medium
Body Large:      16px, Regular
Body Medium:     14px, Regular
Body Small:      12px, Regular
Label:           11px, Medium
```

---

## Screen Dimensions & Layouts

### Target Devices
- iPhone 15 Pro: 393 × 852 pts
- iPhone 15 Pro Max: 430 × 932 pts
- iPhone SE: 375 × 667 pts

### Safe Areas
- Top: 59pt (with notch) / 20pt (without)
- Bottom: 34pt (with home indicator) / 0pt (without)
- Sides: 0pt

### Layout Grid
- Margins: 16pt
- Padding: 16pt
- Card spacing: 12pt
- Button height: 48pt

---

## Detailed Screen Mockups

### 1. Login Screen - Full Detail

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ⚪⚪⚪                    🔋📶  ┃ ← Status Bar (59pt)
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                 ┃
┃            [Space]              ┃ ← 80pt
┃                                 ┃
┃    ┌─────────────────────┐      ┃
┃    │      🍃 Pantri      │      ┃ ← App Icon/Logo
┃    └─────────────────────┘      ┃
┃                                 ┃
┃       Welcome to Pantri         ┃ ← Headline Medium (24px)
┃                                 ┃
┃   Smart food management at      ┃ ← Body Medium (14px)
┃      your fingertips            ┃ ← Text Secondary color
┃                                 ┃
┃            [Space]              ┃ ← 40pt
┃                                 ┃
┃   ┏━━━━━━━━━━━━━━━━━━━━━━━┓    ┃
┃   ┃ 📧 Email              ┃    ┃ ← TextInput (56pt)
┃   ┃ user@example.com      ┃    ┃ ← Outlined, 8pt radius
┃   ┗━━━━━━━━━━━━━━━━━━━━━━━┛    ┃
┃                                 ┃ ← 16pt spacing
┃   ┏━━━━━━━━━━━━━━━━━━━━━━━┓    ┃
┃   ┃ 🔒 Password           ┃    ┃ ← TextInput (56pt)
┃   ┃ ••••••••••            ┃    ┃
┃   ┗━━━━━━━━━━━━━━━━━━━━━━━┛    ┃
┃                                 ┃ ← 24pt spacing
┃   ┏━━━━━━━━━━━━━━━━━━━━━━━┓    ┃
┃   ┃        LOGIN          ┃    ┃ ← Primary Button (48pt)
┃   ┗━━━━━━━━━━━━━━━━━━━━━━━┛    ┃ ← Green, 8pt radius
┃                                 ┃
┃            [Space]              ┃ ← 24pt
┃                                 ┃
┃   Don't have an account?        ┃ ← Body Small (12px)
┃         Register ─────►         ┃ ← Tappable, Primary color
┃                                 ┃
┃            [Space]              ┃
┃                                 ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

**Spacing Breakdown:**
- Top safe area: 59pt
- Logo to headline: 24pt
- Headline to subtitle: 8pt
- Subtitle to inputs: 40pt
- Between inputs: 16pt
- Input to button: 24pt
- Button to link: 24pt

---

### 2. Inventory Screen - Detailed Layout

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ⚪⚪⚪                    🔋📶  ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ← My Inventory          🔍 ⋮   ┃ ← Header (44pt)
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                 ┃
┃ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  ┃
┃ ┃ 🥛                        ┃  ┃ ← Card elevation 2
┃ ┃ Whole Milk                ┃  ┃ ← Title Medium (16px)
┃ ┃ Tesco                     ┃  ┃ ← Body Small (12px)
┃ ┃                           ┃  ┃
┃ ┃ ╭───────╮ ╭─────────╮    ┃  ┃
┃ ┃ │📦 1 L │ │📍Fridge│    ┃  ┃ ← Chips (32pt)
┃ ┃ ╰───────╯ ╰─────────╯    ┃  ┃
┃ ┃                           ┃  ┃
┃ ┃ Expires: Jan 20, 2025     ┃  ┃ ← Body Small, Primary
┃ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  ┃
┃                                 ┃ ← 12pt spacing
┃ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  ┃
┃ ┃ 🥚                        ┃  ┃
┃ ┃ Free Range Eggs           ┃  ┃
┃ ┃ Happy Farms               ┃  ┃
┃ ┃                           ┃  ┃
┃ ┃ ╭─────────╮ ╭─────────╮  ┃  ┃
┃ ┃ │📦 6 pcs│ │📍Fridge│  ┃  ┃
┃ ┃ ╰─────────╯ ╰─────────╯  ┃  ┃
┃ ┃                           ┃  ┃
┃ ┃ ⚠️ Expires: Jan 18, 2025  ┃  ┃ ← Warning color
┃ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  ┃
┃                                 ┃
┃ ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  ┃
┃ ┃ 🍞                        ┃  ┃
┃ ┃ Whole Wheat Bread         ┃  ┃
┃ ┃ Hovis                     ┃  ┃
┃ ┃                           ┃  ┃
┃ ┃ ╭──────────╮ ╭────────╮  ┃  ┃
┃ ┃ │📦 1 loaf│ │📍Pantry│  ┃  ┃
┃ ┃ ╰──────────╯ ╰────────╯  ┃  ┃
┃ ┃                           ┃  ┃
┃ ┃ Expires: Jan 22, 2025     ┃  ┃
┃ ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  ┃
┃                                 ┃
┃                                 ┃
┃                        ╭─────╮  ┃ ← FAB (56x56pt)
┃                        │  +  │  ┃ ← Floating 16pt
┃                        ╰─────╯  ┃ ← from bottom/right
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  🧊      🍳      🛒      👤    ┃ ← Tab Bar (49pt)
┃Inventory Recipes Shopping  Me  ┃ ← + safe area
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

**Card Anatomy:**
- Card padding: 16pt
- Icon size: 24pt
- Title font: 16px Medium
- Subtitle: 12px Regular
- Chip height: 32pt
- Chip gap: 8pt

---

### 3. Recipe Card - Expanded View

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ┌───────────────────────────┐   ┃
┃ │                           │   ┃
┃ │   [Recipe Hero Image]     │   ┃ ← Card.Cover
┃ │     200pt height          │   ┃ ← Border radius 8pt
┃ │                           │   ┃   top corners only
┃ └───────────────────────────┘   ┃
┃                                 ┃
┃  Fluffy Scrambled Eggs          ┃ ← Title Large (22px)
┃                                 ┃
┃  Quick and easy breakfast       ┃ ← Body Medium (14px)
┃  with eggs, milk, and butter.   ┃ ← Text Secondary
┃  Perfect for busy mornings!     ┃ ← 3 lines max
┃                                 ┃
┃  ╭──────────╮ ╭──────────────╮  ┃
┃  │🕐 10 min│ │👤 2 servings │  ┃ ← Meta chips
┃  ╰──────────╯ ╰──────────────╯  ┃
┃                                 ┃
┃  ╭───────────────╮ ╭──────────╮ ┃
┃  │ View Recipe   │ │START COOK│ ┃ ← Actions
┃  ╰───────────────╯ ╰──────────╯ ┃ ← Text vs Contained
┃                                 ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

---

### 4. Shopping List Item States

**Unchecked Item:**
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ☐  Milk                    🔴   ┃ ← Checkbox + urgent flag
┃    2 liters                     ┃ ← Secondary text
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

**Checked Item:**
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ✅  Butter                      ┃ ← Checked, opacity 0.5
┃    500g                         ┃ ← Strikethrough
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

---

### 5. Profile Screen - Complete Layout

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ⚪⚪⚪                    🔋📶  ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ← Profile               ⚙️      ┃ ← Header
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                 ┃ ← White surface
┃           ╭────────╮            ┃
┃           │   JS   │            ┃ ← Avatar 80x80pt
┃           ╰────────╯            ┃ ← Green background
┃                                 ┃
┃          John Smith             ┃ ← Title Large (22px)
┃      john@example.com           ┃ ← Body Small (12px)
┃                                 ┃
┃                                 ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ ← Divider 1pt
┃ ACCOUNT                         ┃ ← Section Header
┃                                 ┃
┃ 🏠 Household Settings       ›   ┃ ← List Item (56pt)
┣─────────────────────────────────┫
┃ 🍎 Dietary Preferences      ›   ┃
┣─────────────────────────────────┫
┃ 🔔 Notifications            ›   ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ ANALYTICS                       ┃
┃                                 ┃
┃ 🗑️ Waste Report             ›   ┃
┣─────────────────────────────────┫
┃ 💰 Savings Report           ›   ┃
┣─────────────────────────────────┫
┃ 💡 Insights                 ›   ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃                                 ┃
┃   ╭───────────────────────╮     ┃
┃   │      LOGOUT           │     ┃ ← Outlined button
┃   ╰───────────────────────╯     ┃ ← Red text/border
┃                                 ┃
┃                                 ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  🧊      🍳      🛒      👤    ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

---

## Component Library

### Buttons

**Primary (Contained)**
```
╭─────────────────────────╮
│       Button Text       │  Height: 48pt
╰─────────────────────────╯  Background: Primary
                             Text: White
                             Radius: 8pt
```

**Secondary (Outlined)**
```
┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃    Button Text        ┃  Height: 48pt
┗━━━━━━━━━━━━━━━━━━━━━━━┛  Border: 1pt Primary
                           Text: Primary
                           Radius: 8pt
```

**Text Button**
```
   Button Text →             Height: 40pt
                             Text: Primary
                             No border/bg
```

### Text Inputs

**Default State**
```
┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Label                 ┃  Height: 56pt
┃ user@example.com      ┃  Border: 1pt #E0E0E0
┗━━━━━━━━━━━━━━━━━━━━━━━┛  Radius: 4pt
```

**Focused State**
```
┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Label                 ┃  Border: 2pt Primary
┃ user@example.com|     ┃  Label: Primary color
┗━━━━━━━━━━━━━━━━━━━━━━━┛
```

**Error State**
```
┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃ Label                 ┃  Border: 2pt Error
┃ invalid@              ┃  Label: Error color
┗━━━━━━━━━━━━━━━━━━━━━━━┛
  ⚠️ Invalid email format   ← Helper text
```

### Cards

```
╭─────────────────────────────╮
│  ┌─────────────────────┐   │  Elevation: 2
│  │  Optional Image     │   │  Radius: 8pt
│  └─────────────────────┘   │  Padding: 16pt
│                             │  Background: Surface
│  Card Title                 │
│  Card description or        │
│  content goes here with     │
│  multiple lines.            │
│                             │
│  [Button 1]  [Button 2]     │
╰─────────────────────────────╯
```

### Chips

```
╭──────────────╮
│ 📦 Label    │   Height: 32pt
╰──────────────╯   Radius: 16pt
                   Padding: 12pt H, 8pt V
```

### FAB (Floating Action Button)

```
     ╭─────╮
     │  +  │      Size: 56x56pt
     ╰─────╯      Background: Primary
                  Icon: White, 24pt
                  Shadow: Elevation 6
```

---

## Iconography

### Icon Style
- **Library:** Material Community Icons
- **Size:** 24pt (default), 20pt (small), 32pt (large)
- **Color:** Text Primary / Primary / Secondary

### Common Icons Used

```
📧 email              → mdi-email
🔒 lock               → mdi-lock
🧊 fridge             → mdi-fridge
🍳 food               → mdi-food
🛒 cart               → mdi-cart
👤 account            → mdi-account
📦 package            → mdi-package-variant
📍 location           → mdi-map-marker
🕐 time               → mdi-clock-outline
👥 people             → mdi-account-group
⚙️ settings           → mdi-cog
› chevron-right       → mdi-chevron-right
+ plus                → mdi-plus
🔍 search             → mdi-magnify
⋮ menu                → mdi-dots-vertical
🏠 home               → mdi-home
🍎 apple              → mdi-food-apple
🔔 bell               → mdi-bell
🗑️ delete             → mdi-delete
💰 money              → mdi-currency-usd
💡 lightbulb          → mdi-lightbulb
```

---

## Responsive Behavior

### iPhone SE (Small)
- Reduce vertical spacing by 20%
- Stack chips vertically if needed
- Smaller card images (150pt)

### iPhone Pro (Medium)
- Standard spacing (shown above)
- Comfortable touch targets

### iPhone Pro Max (Large)
- Same layout, more breathing room
- Larger card images (240pt)
- More items visible on screen

---

## Dark Mode (Future)

```css
/* Dark Theme Colors */
--background: #121212;
--surface: #1E1E1E;
--primary: #66BB6A;      /* Lighter green */
--text-primary: #FFFFFF;
--text-secondary: #B3B3B3;
```

Cards will have slight border for definition in dark mode.

---

## Loading States

### Skeleton Screen (Inventory)
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ▓▓▓▓▓▓▓▓▓▓               ┃ ← Shimmer animation
┃ ▓▓▓▓▓                    ┃
┃ ▓▓▓▓ ▓▓▓▓                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ▓▓▓▓▓▓▓▓▓▓               ┃
┃ ▓▓▓▓▓                    ┃
┃ ▓▓▓▓ ▓▓▓▓                ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

### Button Loading
```
╭─────────────────────────╮
│    ⟳ Loading...        │  Spinner + text
╰─────────────────────────╯  Disabled state
```

---

## Empty States

### No Items
```
     ╭────╮
     │ 📦 │     Icon: 64pt, opacity 0.3
     ╰────╯

  No items yet

Tap + to add your first item
```

### No Results
```
     ╭────╮
     │ 🔍 │
     ╰────╯

  No results found

  Try different keywords
```

---

## Success States

### Item Added
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ✅ Item added!            ┃ ← Snackbar
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
                               Bottom toast
                               Auto-dismiss 3s
```

---

This design system ensures consistency across the entire app while maintaining iOS platform conventions and Material Design principles!
