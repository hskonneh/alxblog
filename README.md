# TechBlog: A Next.js Blogging Platform

TechBlog is a modern, responsive, and fully-functional blogging web page built with Next.js, TypeScript, and Tailwind CSS. The theme of the blog is centered around technology, featuring a clean, dark design with subtle blue accents. This version of TechBlog uses a default dark theme and hardcoded blog posts without external image links, focusing on content and readability.

## Project Overview

This project serves as a template for a standard blogging website. It includes a home page with a hero section, a list of latest blog posts displayed in card layouts, and a footer. The application is designed to be easily customizable and extensible.

**🔖 Project Title & Description**

- **Title:** TechBlog: A Next.js Blogging Platform
- **Description:** A modern, responsive blogging platform built with Next.js, TypeScript, and Tailwind CSS. Designed for tech enthusiasts, this platform provides a clean, dark-themed interface with subtle blue accents, delivering the latest insights in technology and trends. This version emphasizes a minimalist design by using hardcoded content without image assets in the blog posts.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) 15
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI:** [React](https://react.dev/)
*   **Fonts:** [Google Fonts](https://fonts.google.com/) (Roboto and Roboto Mono)

**🧠 AI Integration Strategy**
- **Code Generation:** Utilize AI-powered tools within the IDE/CLI to scaffold features and components, generating boilerplate code and standard configurations.
- **Testing:** Employ AI prompts to generate and suggest unit tests, integration tests, and end-to-end tests to ensure robust functionality.
- **Documentation:** Use AI to assist in writing clear docstrings, inline comments, and maintaining up-to-date README documentation that reflects changes in code and architecture.
- **Context-Aware Techniques:** Feed API specs, file trees, and diffs into AI workflows to get context-specific suggestions and refinements during development.

## Project Structure

The project follows the standard Next.js App Router structure:

```
C:\Users\LENIVO\Documents\AI for Dev\cstone\alxblog\
├───.gitignore
├───next.config.ts
├───package.json
├───postcss.config.mjs
├───README.md
├───tsconfig.json
├───app\
│   ├───favicon.ico
│   ├───globals.css
│   ├───layout.tsx
│   └───page.tsx  // Contains the home page with hardcoded blog posts and a dark theme
├───public\
│   ├───file.svg
│   ├───globe.svg
│   ├───next.svg
│   ├───vercel.svg
│   └───window.svg
└───node_modules\
```

*   `app/`: Contains the core application code, including pages and layouts.
    *   `layout.tsx`: The root layout of the application with global styles imported from `globals.css`.
    *   `page.tsx`: The main page of the application. This version of `page.tsx` implements a dark theme and displays blog posts as cards with hardcoded text content (no images).
    *   `globals.css`: Global styles for the application, including theme definitions.
*   `public/`: Contains static assets like SVG icons used across the site.
*   `package.json`: Defines the project's dependencies and scripts.
*   `next.config.ts`: Configuration file for Next.js.
*   `tailwind.config.ts`: Configuration file for Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

This project does not yet have any automated tests. To run the linter, use the following command:

```bash
npm run lint
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request. Make sure to follow the existing code style and conventions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
