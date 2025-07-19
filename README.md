# Pocket Dictionary

**Pocket Dictionary** is a lightweight web-based tool that allows users to look up word definitions and organize them into personalized study folders. Pocket Dictionary helps language learners, students, or vocabulary enthusiasts manage their learning through a clean, responsive, and interactive interface.

### How To Use Pocket Dictionary

- **Search for a word** using the dictionary interface 
- **Browse word definitions** on the dictionary results page
- **Organize words into folders** in the My Words section
- **Adjust font size and color theme** for accessibility and personalized experience

> _Note: The live search functionality and folder editing features are not yet implemented. This current version is primarily a front-end prototype with visual and accessibility features._

---

## Lab 4: Interactive Features

### Font Size Adjuster
**Purpose**: Enables users to increase or decrease the size of on-page text for better readability.

**Location**: Top section of all pages, labeled "Aa+" and "Aa−"

**Behavior**:
- Increases/decreases the font size of the entire page.
- Font size changes persist across page reloads and navigation using `localStorage`.

### Theme Switcher

**Purpose**: Allows users to toggle between **Light** and **Dark** themes.

**Location**: Top section of all pages, below font controls

**Behavior**:
- Selecting a theme updates the page styling via the `data-theme` attribute on `<body>`.
- Backgrounds and text colors adapt to the selected theme.
- Theme preference is stored in `localStorage` and remains consistent across pages and reloads.

---