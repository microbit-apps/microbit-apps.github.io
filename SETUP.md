# Installation and Setup Guide

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## Installation

1. Navigate to the project directory:
```bash
cd microbit-apps.github.io
```

2. Install dependencies:
```bash
npm install
```

## Development

To start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Building for Production

To build the site for production:
```bash
npm run build
```

The built site will be in the `dist/` directory.

## Deployment

The site is configured to deploy to GitHub Pages. Push your changes to the `main` branch and the site will automatically build and deploy.

## Project Structure

```
src/
├── content/
│   └── docs/
│       ├── index.mdx (homepage)
│       ├── getting-started/
│       ├── apps/
│       └── resources/
├── assets/
│   └── (images and SVGs)
└── styles/
    └── custom.css

astro.config.mjs - Astro configuration
package.json - Project dependencies
tsconfig.json - TypeScript configuration
```

## Customization

- Edit `astro.config.mjs` to customize site settings, sidebar navigation, and theme
- Add new pages in `src/content/docs/`
- Modify styling in `src/styles/custom.css`
- Replace logo images in `src/assets/`

## Learn More

- [Astro Documentation](https://docs.astro.build)
- [Starlight Documentation](https://starlight.astro.build)
