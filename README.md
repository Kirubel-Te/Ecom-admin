# Admin Dashboard

Welcome to the Admin dashboard for the e-commerce UI project. This admin app is built with Next.js 16, React 19, Tailwind CSS, shadcn/ui, and charting components to manage products, users, payments, and analytics. It is the admin dashboard for the e-commerce Micro-service, monorepo full-stack app. 

## Features

- Dashboard overview with revenue, charts, and activity widgets
- Product management page with a data table
- User management page with an interactive table and status indicators
- Payments/products page showing available items in a table
- Responsive layout using Tailwind CSS and custom components
- Local mock data for UI development and preview

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- pnpm installed globally

### Install dependencies

```bash
cd admin/Admin
pnpm install
```

### Run locally

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser to view the admin dashboard.

## Build

```bash
pnpm build
```

## Start

```bash
pnpm start
```

## Lint

```bash
pnpm lint
```

## Project Structure

- `app/` - Next.js app routes and pages
  - `page.tsx` - Dashboard home page
  - `products/` - Products listing page
  - `payments/` - Payments/products table page
  - `users/` - Users listing page
- `components/` - Shared UI components and dashboard widgets
- `components/providers/` - Theme provider and application wrappers
- `components/ui/` - Design system components powered by shadcn/ui
- `hooks/` - Custom hooks
- `lib/` - Utility functions
- `public/` - Static assets for products and users

## Technology Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript
- shadcn/ui
- Recharts
- react-hook-form
- zod

## Notes

- The app uses mock data in the page components for development.
- You can extend the pages and table components to connect to a real API.
- `next.config.ts` allows remote images from `images.pexels.com`.

## Contact

For questions or support, refer to the main repository README or reach out to the project owner.