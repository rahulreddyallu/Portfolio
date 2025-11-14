# Premium Portfolio Website

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Three.js](https://img.shields.io/badge/Three.js-0.163-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

A premium portfolio website showcasing cutting-edge web technologies including 3D graphics, modern UI design, optimized performance, and advanced animations.

---

## Features

### Design and UI/UX

- Glassmorphism and Neumorphism hybrid design
- Dark and light theme with adaptive system preference support
- Fully responsive on all screen sizes
- Custom cursor with magnetic interactions
- Holographic cards with animated borders
- Dynamic gradient mesh backgrounds

### Animations and Motion

- Smooth spring animations using Framer Motion
- Scroll-based animations powered by GSAP ScrollTrigger
- Multi-layer parallax with cursor movement tracking
- Page transitions with fade and slide effects
- SVG morphing animations
- Staggered content reveal patterns

### 3D and Interactive Elements

- Three.js integration using React Three Fiber
- Animated 3D hero sphere with orbit control
- Particle system for ambient visual effects
- Wave animation in footer divider
- Noise overlay for additional depth

### Performance and Optimization

- Code splitting using React.lazy
- Image optimization with AVIF/WebP support
- Web Vitals tracking (LCP, FID, CLS)
- Smooth scroll implementation with Lenis
- SEO optimized with complete metadata and schema
- Lighthouse scores consistently above 95

### Features and Functionality

- Project showcase with holographic cards
- Skills visualization with animated progress effects
- Professional timeline for experience
- Validated contact form with error handling
- Social media links and integrations
- Newsletter subscription support
- Scroll-to-top functionality
- Persistent theme toggling

---

## Tech Stack

### Frontend

- React 18.3
- React Router 6
- React Suspense for code splitting

### Animation Libraries

- Framer Motion 11
- GSAP 3.12
- Lenis smooth scroll
- React Three Fiber
- Three.js

### Styling

- CSS Modules
- CSS Variables for theming
- Glassmorphism and Neumorphism styling patterns

### Development Tools

- React Scripts 5
- Web Vitals
- ESLint and Prettier configuration

---

## Installation

### Requirements

- Node.js 16 or higher
- Git

### Clone the Repository

```
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### Install Dependencies

```
npm install
```

### Start Development Server

```
npm start
```

### Build for Production

```
npm run build
```

### Test Production Build

```
npm install -g serve
serve -s build
```

---

## Deployment

### GitHub Pages

1. Add homepage field to `package.json`:

```
"homepage": "https://yourusername.github.io/portfolio"
```

2. Install gh-pages:

```
npm install gh-pages --save-dev
```

3. Deploy:

```
npm run deploy
```

### Vercel Deployment

```
npm install -g vercel
vercel
```

### Netlify Deployment

1. Build project:

```
npm run build
```

2. Deploy the `build` folder

---

## Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── Components/
│   ├── Styles/
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
└── README.md
```

---

## Customization

### Update Personal Information

Modify the following components:

- Hero.jsx
- About.jsx
- Work.jsx
- Contact.jsx
- Footer.jsx

### Change Colors

Edit variables in `src/index.css`:

```
:root {
  --color-primary: #7c3aed;
  --color-secondary: #06b6d4;
  --color-accent: #f472b6;
}
```

### Typography

Update fonts in `public/index.html` and style variables.

### Projects

Edit project list in `Work.jsx`.

### Social Links

Update social media links in Footer.jsx and Contact.jsx.

---

## Testing

Run tests:

```
npm test
```

Coverage:

```
npm test -- --coverage
```

Watch mode:

```
npm test -- --watch
```

---

## Troubleshooting

### Build Errors

```
rm -rf node_modules package-lock.json
npm install
```

### GitHub Pages Blank Page

Ensure homepage is correct in package.json.

### Animation Performance Issues

Disable heavy animations for mobile screens.

---

## License

This project is licensed under the MIT License.

## Contributing

Contributions, issues, and feature requests are welcome.

---

## Contact

Rahul Reddy Allu  
Email: rahul@example.com  
LinkedIn: linkedin.com/in/yourprofile  
GitHub: github.com/yourusername
