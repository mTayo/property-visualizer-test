# 🏙️ Tower Explorer – Interactive Apartment Layout Viewer

A simple frontend prototype that allows users to explore towers, view floors, and also view apartment layouts with  metadata and subtle animations.

## 🔍 Features

### 🏢 Tower Overview
- Displays 3 clickable tower cards: **Tower A**, **Tower B**, and **Tower C**
- Responsive layout for mobile and desktop

### 🪜 Floor Selection
- Upon selecting a tower, users see a vertical  list of **10–15 floors**
- Each floor is clickable to reveal its apartments

### 🛏️ Apartment Layout View
- Selecting a floor reveals **3–4 apartment units**
- Each unit shows:
  - 📸 **Thumbnail image** 
  - 🏠 **Metadata**:
    - Area (e.g., "120 sqm")
    - Unit type (e.g., "2BHK")
    - Room count (1 or 2)

### 🖼️ Detailed Layout View
- Clicking a unit displays:
  - A larger layout image
  - Full metadata in a neatly styled layout

## 🌟 Bonus Interaction
- **Hover effect on unit thumbnails**:
  - Floor background subtly darkens
  - Thumbnail image gently **scales up**
  - Smooth transition with soft animation
  - Responsive on both **desktop and mobile**

## 🧱 Tech Stack
- **React + Vite**
- **TypeScript**
- State management via **Redux toolkit**
- **Tailwind CSS** 
- Animations via  **Framer Motion**

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev