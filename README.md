# Portfolio Website

This is my personal portfolio website built with [GatsbyJS](https://www.gatsbyjs.com/). It showcases my projects, skills, and contact information in a modern, responsive design.

## Features

- Built with GatsbyJS (React-based static site generator)
- Responsive design for desktop and mobile
- Project showcase with images and tech stack
- About, Services, and Contact sections
- Smooth scrolling and scroll-to-top button
- Modular component structure

## Project Structure

- `src/components/` – Reusable React components (Header, Footer, Projects, etc.)
- `src/pages/` – Main pages (index, 404)
- `src/data/` – Data files for projects, tech, and work experience
- `public/static/` – Static assets (images, icons)
- `gatsby-config.js` – Gatsby configuration

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Development

To start the development server:

```bash
npm start
# or
npm run develop
```

The site will be available at `http://localhost:8000`.

### Build

To build the site for production:

```bash
npm run build
```

The static files will be generated in the `public/` directory.

### Deployment

You can deploy the `public/` directory to any static hosting service (e.g., Netlify, Vercel, GitHub Pages).
