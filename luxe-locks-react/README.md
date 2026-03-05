# Luxe Locks - React Version

This is a React conversion of the original Luxe Locks static website. The website has been transformed from HTML/CSS/JavaScript to a modern React application with TypeScript.

## Features

- **React Components**: Modular component architecture
- **React Router**: Client-side routing for navigation
- **Shopping Cart**: Full cart functionality with localStorage persistence
- **Responsive Design**: Maintains the original responsive design
- **TypeScript**: Type-safe development

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with cart button
│   ├── Footer.tsx          # Site footer
│   └── CartDrawer.tsx      # Shopping cart sidebar
├── contexts/
│   └── CartContext.tsx     # Cart state management
├── pages/
│   ├── Home.tsx           # Homepage with hero and testimonials
│   ├── Services.tsx       # Services listing page
│   ├── Shop.tsx           # Product catalog with cart integration
│   └── About.tsx          # About and contact page
├── App.tsx                # Main app component with routing
├── index.tsx              # App entry point
└── styles.css             # Original CSS styles
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

## Key Conversions Made

### From Static HTML to React Components
- Converted all HTML pages to React functional components
- Maintained original CSS classes and styling
- Preserved all content and layout structure

### Cart Functionality
- Converted vanilla JavaScript cart logic to React hooks and context
- Maintained localStorage persistence
- Added TypeScript interfaces for type safety

### Navigation
- Implemented React Router for client-side routing
- Converted navigation links to React Router Links
- Maintained active state styling

### State Management
- Created CartContext for global cart state
- Used React hooks for local component state
- Preserved cart data persistence across sessions

## Original Features Preserved

- All original styling and layout
- Shopping cart functionality
- Responsive design
- Form elements and interactions
- Image assets and placeholders

## Development Notes

- The app uses Create React App with TypeScript template
- Original CSS has been preserved without modification
- Font loading and meta tags moved to public/index.html
- All original functionality has been maintained

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.
