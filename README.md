# SigSpecials - Company Website

A modern company webpage built with TypeScript and React.

## Project Structure

```
sigspecials/
├── public/                 # Static assets (favicon, images, etc.)
├── src/
│   ├── assets/            # Media assets
│   │   ├── images/        # Image files
│   │   └── fonts/         # Font files
│   ├── components/        # Reusable UI components
│   ├── constants/         # Application constants
│   ├── hooks/             # Custom React hooks
│   ├── layouts/           # Layout components (MainLayout, etc.)
│   ├── pages/             # Page components (Home, About, Contact, etc.)
│   ├── styles/            # CSS/styling files
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main App component
│   └── main.tsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start the development server, typically at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Directory Descriptions

- **`src/components/`** - Reusable UI components (buttons, cards, modals, etc.)
- **`src/pages/`** - Page-level components (Home, About, Services, Contact, etc.)
- **`src/layouts/`** - Layout wrappers that provide consistent structure across pages
- **`src/hooks/`** - Custom React hooks for shared logic
- **`src/utils/`** - Helper functions and utilities
- **`src/types/`** - TypeScript interfaces and type definitions
- **`src/assets/`** - Static media files (images, fonts, etc.)
- **`src/styles/`** - Global and component-specific stylesheets
- **`src/constants/`** - Application-wide constants and configuration

## Path Aliases

The project is configured with path aliases for cleaner imports:

- `@/*` → `src/*`
- `@/components/*` → `src/components/*`
- `@/pages/*` → `src/pages/*`
- `@/utils/*` → `src/utils/*`
- `@/types/*` → `src/types/*`
- `@/hooks/*` → `src/hooks/*`
- `@/assets/*` → `src/assets/*`
- `@/styles/*` → `src/styles/*`
- `@/constants/*` → `src/constants/*`

Example usage:
```typescript
import Button from '@/components/Button'
import { APP_NAME } from '@/constants'
```

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
