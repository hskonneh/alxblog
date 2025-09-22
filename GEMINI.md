# Project Overview

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It is a simple blog application that uses [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), and the [Geist](https://vercel.com/font) font.

The main entry point for the application is `app/page.tsx`. The layout is defined in `app/layout.tsx`.

## Building and Running

To get started, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To build the application for production, run:

```bash
npm run build
```

To start the production server, run:

```bash
npm run start
```

## Development Conventions

*   **Styling:** This project uses [Tailwind CSS](https://tailwindcss.com/) for styling. Utility classes should be used whenever possible.
*   **Components:** React components should be defined in `.tsx` files.
*   **Fonts:** The project uses the [Geist](https://vercel.com/font) font family.
*   **Linting:** The project is configured with basic linting rules.
