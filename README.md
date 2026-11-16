# Ecom Admin Dashboard

The Ecom Admin app is the Next.js administration dashboard for the e-commerce monorepo. It provides an authenticated view of dashboard analytics, products, users, and transactions, and gets live data from the platform's backend services.

## Features

- Dashboard with order and revenue charts, popular products, and latest transactions
- Product listing backed by the product service
- User listing and individual user profiles backed by the auth service
- Payments and transactions table backed by the payment service
- Clerk sign-in and admin-role authorization for dashboard routes
- Responsive dashboard layout with theme support

## Requirements

- Node.js 20+
- pnpm 9
- The product, order, payment, and auth services running and reachable
- A Clerk application configured for this app

## Configuration

From the repository root, create `apps/Ecom-admin/.env.local` and set the Clerk credentials and backend base URLs:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

NEXT_PUBLIC_PRODUCT_SERVICE_URL=http://localhost:8004
NEXT_PUBLIC_ORDER_SERVICE_URL=http://localhost:8001
NEXT_PUBLIC_PAYMENT_SERVICE_URL=http://localhost:8002
NEXT_PUBLIC_AUTH_SERVICE_URL=http://localhost:8003
```

Set each service URL to the base URL where that service is running. Protected service requests use the signed-in Clerk session token. The Clerk session claims must expose the `admin` role as `metadata.role` for access to dashboard routes.

Do not commit `.env.local` or other environment files.

## Run locally

Install workspace dependencies from the repository root:

```bash
pnpm install
```

Start the backend services in separate terminals:

```bash
pnpm --filter product-service dev
```

```bash
pnpm --filter order-service dev
```

```bash
pnpm --filter payment-service dev
```

```bash
pnpm --filter auth-service dev
```

Start the dashboard in another terminal:

```bash
pnpm --filter admin dev
```

Open [http://localhost:3003](http://localhost:3003).

Alternatively, `pnpm dev` from the repository root starts all workspace apps and services that define a development script.

## Workspace commands

Run these from the repository root:

```bash
pnpm --filter admin build
pnpm --filter admin start
pnpm --filter admin lint
pnpm --filter admin check-types
```

## Routes

| Route | Description |
| --- | --- |
| `/` | Dashboard overview and charts |
| `/products` | Product listing |
| `/payments` | Payments and transactions |
| `/users` | User listing |
| `/users/[username]` | User profile |
| `/sign-in` | Clerk sign-in |
| `/unauthorized` | Shown when the signed-in user is not an admin |

## Project structure

- `app/(dashboard)/` - Dashboard, products, payments, and users routes
- `app/(auth)/` - Sign-in and unauthorized pages
- `components/` - Dashboard widgets, charts, forms, and shared UI
- `components/ui/` - Shared interface components
- `hooks/` - React hooks
- `lib/` - Shared utilities

## Technology stack

- Next.js 16 and React 19
- TypeScript and Tailwind CSS 4
- Clerk authentication
- shadcn/ui components and Recharts
