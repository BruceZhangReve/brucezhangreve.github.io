# Academic Personal Homepage - Lige Zhang

A clean, modern, academic-style personal homepage built with React, Tailwind CSS, and Framer Motion. Designed to look like a top CS/ML PhD student's personal page.

## Features

- **Modern Academic Design**: Clean, minimalist layout with academic aesthetic
- **Dark Mode Toggle**: Smooth dark/light mode switching
- **Responsive Layout**: Fully responsive across all device sizes
- **Smooth Animations**: Subtle animations using Framer Motion
- **Complete Sections**:
  - Hero section with name, bio, and research interests
  - News/Updates section
  - Publications with year grouping
  - Research Projects with card components
  - Experience/Education timeline
  - Teaching/Service section
  - Contact section with social links
- **Navigation**: Smooth scrolling navigation with mobile menu
- **Placeholder Data**: Easy-to-edit placeholder data for quick customization

## Tech Stack

- **React 19** - Frontend library
- **Tailwind CSS 3** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Vite 4** - Build tool and dev server

## Getting Started

### Prerequisites

- Node.js 18+ (required for Vite 4)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Data

All personal data is stored in the `PERSONAL_DATA` object in [src/App.jsx](src/App.jsx). Edit this object to update:

- Name, title, and bio
- Research interests
- Education and experience
- Publications and projects
- News updates
- Contact information

### Styling

- **Colors**: Edit the color palette in [tailwind.config.js](tailwind.config.js)
- **Typography**: Font settings are configured in Tailwind config
- **Animations**: Adjust animation durations and effects in the Framer Motion components

### Adding Sections

To add new sections:

1. Add a new component to `App.jsx`
2. Update the navigation items in the `Navigation` component
3. Add the section to the main `App` component

## Project Structure

```
├── src/
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## Features in Detail

### Dark Mode
- Toggle button in navigation
- Uses localStorage to remember preference
- System preference detection

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Collapsible mobile navigation menu

### Animations
- Staggered entry animations for content
- Smooth page transitions
- Hover effects on interactive elements

### Accessibility
- Semantic HTML structure
- ARIA labels for icons
- Keyboard navigation support

## Editing Tips

1. **Update Publications**: Modify the `publications` array in `PERSONAL_DATA`
2. **Change Colors**: Update the `colors` section in `tailwind.config.js`
3. **Add New Research Interests**: Edit the `researchInterests` array
4. **Update Social Links**: Modify the `contact` object
5. **Change Profile Image**: Replace the placeholder avatar in the `HeroSection` component

## Node.js Compatibility

This project uses Vite 4 which is compatible with Node.js 18+. The original Vite 8 requirement has been downgraded to ensure compatibility with your current Node.js version (22.7.0). You can now run the development server without upgrading Node.js.

## License

This project is for personal/academic use. Feel free to modify and adapt for your own personal website.

## Acknowledgments

- Design inspired by academic personal pages of top ML researchers
- Icons from [Lucide](https://lucide.dev)
- Fonts from [Google Fonts](https://fonts.google.com)
