This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Setting Up Developer Environment

Install Prettier

1.  If using VS Code, install the Prettier extension
2.  Refer to the NextJS Lint with Prettier configuration notes [here](https://nextjs.org/docs/pages/building-your-application/configuring/eslint#usage-with-other-tools):

    1.  Install the eslint-config-prettier dependency: `npm install --save-dev eslint-config-prettier`
    2.  Add prettier to the existing ESLint config (`.eslintrc.json`)

        ```
        {
          "extends": ["next/core-web-vitals", "next", "prettier"]
        }
        ```

    3.  Create a `.prettierrc.json` configuration file in the project root directory and add these styling rules:

        ```
        {
          "trailingComma": "es5",
          "semi": true,
          "tabWidth": 2,
          "printWidth": 100
        }
        ```

    4.  Configure scripts in package.json:

        ```
        "scripts": {
          ...
          "format": "prettier --check --ignore-path .gitignore .",
          "format:fix": "prettier --write --ignore-path .gitignore ."
        }
        ```

    5.  Enable format on save in VS Code settings
    6.  Set the default code formatter to Prettier in VS Code settings
    7.  Restart VS Code

Refer to [this](https://medium.com/@cameronadams1225/setting-up-a-next-js-13-project-with-eslint-and-prettier-735c3ccfd26c) guide for more useful details on how to setup prettier with TailwindCSS in a NextJS project.

## Important Resources

- [YouTube](https://www.youtube.com/watch?v=Z-hACIsjv4E&t=123s)
- [GitHub](https://github.com/safak/youtube/tree/next-food-ordering-app)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
