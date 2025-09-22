# Copilot Instructions: Building a Modern Single-Page Blogging Application

This document outlines the steps, procedures, and standards for developing a modern single-page blogging application. The goal is to create a highly performant, scalable, and user-friendly blog using contemporary web development practices.

## 1. Project Initialization & Core Technologies

*   **Framework**: Utilize **Next.js** for its excellent developer experience, server-side rendering (SSR), static site generation (SSG), and API routes.
*   **Language**: **TypeScript** for type safety and improved code quality.
*   **Styling**: **Tailwind CSS** for a utility-first CSS framework, enabling rapid UI development and consistent design.
*   **Content Management**:
    *   For **static blog posts (Markdown)**: Store content as Markdown files. Use libraries like `gray-matter` to parse front matter (metadata like title, date, author) and `remark` or `next-mdx-remote` for rendering Markdown/MDX.
    *   For **dynamic content (Headless CMS)**: Consider integrating with a headless CMS (e.g., Strapi, Contentful, Sanity, DatoCMS) if content needs to be managed by non-developers or updated frequently without code changes.

## 2. Application Structure & Components

Organize the application into logical, reusable components and a clear directory structure.

*   **`app/` (Next.js App Router)**:
    *   `layout.tsx`: Root layout for global elements (Header, Footer).
    *   `page.tsx`: Home page, typically listing blog posts.
    *   `[slug]/page.tsx`: Dynamic route for individual blog post pages.
*   **`components/`**: Reusable UI components (e.g., `Header.tsx`, `Footer.tsx`, `BlogPostCard.tsx`, `MarkdownRenderer.tsx`).
*   **`lib/` or `utils/`**: Utility functions (e.g., `posts.ts` for fetching blog post data, `markdown.ts` for processing Markdown).
*   **`public/`**: Static assets (images, fonts).
*   **`styles/`**: Global CSS (e.g., `globals.css` for Tailwind imports and custom styles).
*   **`content/` or `posts/`**: Directory for Markdown blog post files.

## 3. Content Management & Data Fetching

### 3.1. Markdown-based Content

1.  **File Structure**: Each blog post should be a `.md` or `.mdx` file (e.g., `content/my-first-post.md`).
2.  **Front Matter**: Include YAML front matter at the top of each Markdown file for metadata:
    ```yaml
    ---
    title: "My First Blog Post"
    date: "2023-10-27"
    author: "John Doe"
    excerpt: "A brief summary of my first blog post."
    coverImage: "/images/post-1-cover.jpg"
    ---
    ```
3.  **Data Fetching (SSG)**:
    *   Use `getStaticPaths` in `app/[slug]/page.tsx` to define all possible blog post slugs.
    *   Use `getStaticProps` in `app/[slug]/page.tsx` to fetch the content of a specific blog post based on its slug.
    *   For the home page (`app/page.tsx`), use `getStaticProps` to fetch a list of all blog posts.

### 3.2. Headless CMS Integration (Optional)

If using a headless CMS:

1.  **API Client**: Install and configure an SDK or create a simple API client to interact with the CMS API.
2.  **Data Fetching**: Use async Server Components or the `fetch` API directly in components (with appropriate caching strategies) to fetch blog post data from the CMS API.## 4. Styling with Tailwind CSS

1.  **Configuration**: Ensure `tailwind.config.js` is properly set up.
2.  **Utility-First**: Apply styles directly in JSX using Tailwind's utility classes.
3.  **Customization**: Extend Tailwind's default theme for custom colors, fonts, spacing, etc., in `tailwind.config.js`.
4.  **Responsive Design**: Use responsive prefixes (e.g., `md:`, `lg:`) for mobile-first design.

## 5. Routing

*   **Next.js App Router**: Leverage the file-system based routing.
    *   `app/page.tsx` -> `/`
    *   `app/blog/[slug]/page.tsx` -> `/blog/my-post-title`

## 6. SEO & Accessibility

*   **SEO**:
    *   **Meta Tags**: Use Next.js's `Head` component or the new Metadata API in App Router to add `title`, `description`, `og:image`, `twitter:card`, etc., for each page.
    *   **Semantic HTML**: Use appropriate HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
    *   **Sitemap & RSS Feed**: Implement a sitemap (`sitemap.xml`) and an RSS feed (`feed.xml`) for better discoverability.
*   **Accessibility (A11y)**:
    *   **ARIA Attributes**: Use ARIA attributes where necessary for complex UI components.
    *   **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible.
    *   **Image Alt Text**: Provide descriptive `alt` attributes for all images.
    *   **Color Contrast**: Ensure sufficient color contrast for readability.

## 7. Performance Optimizations

*   **Image Optimization**: Use `next/image` component for automatic image optimization (resizing, lazy loading, modern formats).
*   **Code Splitting**: Next.js handles this automatically, but be mindful of large component imports.
*   **Lazy Loading**: Dynamically import components that are not immediately needed using `React.lazy` and `Suspense` or Next.js dynamic imports.
*   **Font Optimization**: Use `next/font` for optimal font loading.

## 8. Code Quality & Standards

*   **Linting**: Configure **ESLint** with recommended Next.js and TypeScript rules.
*   **Formatting**: Use **Prettier** for consistent code formatting.
*   **Type Checking**: Leverage TypeScript for strict type checking.
*   **Component Best Practices**:
    *   Keep components small and focused (Single Responsibility Principle).
    *   Use props for data passing, avoid direct DOM manipulation.
    *   Manage state effectively (React hooks, Context API, or a state management library if needed).

## 9. Deployment

*   **Vercel**: Next.js applications are optimized for deployment on Vercel, offering seamless integration and performance benefits.
*   **Netlify**: Another excellent option for deploying static sites and Next.js applications.

By following these guidelines, the agent can develop a robust, modern, and high-quality single-page blogging application.