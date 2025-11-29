# 📦 Pravita React Design System (`pravita-react-ds`)

A reusable **React + TypeScript** Design System built with **Mantine**,
**Vite**, and **tsup**, designed for use across multiple Pravita
applications (e.g. `pravita-hub-app`).\
This package provides a consistent UI component library, theming layer,
and Storybook-powered documentation.

------------------------------------------------------------------------

## 🚀 Features

-   ⚛️ **React + TypeScript** with strict typing (no `any`)
-   🎨 **Mantine-based component primitives**
-   🧩 Custom, reusable DS components (`Button`, future UI components)
-   🌗 **DSProvider** for theming and color-mode handling
-   📚 **Storybook** documentation (`pnpm storybook`)
-   📦 Built with **tsup** → outputs ESM, CJS, and `.d.ts` files
-   🔌 Published package supports semver (`0.1.0`, `0.2.0`, ...)
-   🔄 Compatible with Vite-based consumer apps
-   🎯 Zero-config consumption:
    `import { Button } from 'pravita-react-ds'`

------------------------------------------------------------------------

## 1. Prerequisites

Ensure you have:

-   **Node.js 20+**
-   **pnpm 9+**
-   **Git**
-   (Optional) npm account for publishing

Check:

``` bash
node -v
pnpm -v
```

------------------------------------------------------------------------

## 2. Getting started

Clone the repo:

``` bash
git clone https://github.com/<your-username>/pravita-react-ds.git
cd pravita-react-ds
pnpm install
```

------------------------------------------------------------------------

## 3. Project structure

    src/
      design-system/
        DSProvider.tsx
        tokens.ts
        mantineTheme.ts
      components/
        index.ts
        button/
          Button.tsx
          Button.stories.tsx
      App.tsx
      main.tsx
      index.css

    src/index.ts

------------------------------------------------------------------------

## 4. Scripts

``` bash
pnpm dev            # run local dev sandbox
pnpm storybook      # run storybook
pnpm lint           # run ESLint
pnpm build          # build library using tsup
pnpm preview        # preview vite build
```

------------------------------------------------------------------------

## 5. Build (tsup)

Tsup generates:

-   `dist/index.js` (ES module)
-   `dist/index.cjs` (CommonJS)
-   `dist/index.d.ts` (Types)
-   sourcemaps

------------------------------------------------------------------------

## 6. Publishing to npm

Login:

``` bash
npm login
```

Build:

``` bash
pnpm build
```

Version bump:

``` bash
npm version patch | minor | major
git push
git push --tags
```

Publish:

``` bash
npm publish --access public
```

------------------------------------------------------------------------

## 7. Consuming the Design System

Install:

``` bash
pnpm add pravita-react-ds @mantine/core @mantine/hooks @mantine/notifications
```

Wrap the app:

``` tsx
import { DSProvider } from 'pravita-react-ds';
import '@mantine/core/styles.css';

<DSProvider>
  <App />
</DSProvider>
```

Use components:

``` tsx
import { Button } from 'pravita-react-ds';

<Button>Primary</Button>
```

------------------------------------------------------------------------

## 8. Storybook Deployment

Storybook is deployed via GitHub Pages:

    https://<your-username>.github.io/pravita-react-ds/

------------------------------------------------------------------------

## 9. Release Workflow

1.  Make changes\

2.  `pnpm lint`\

3.  `pnpm build`\

4.  `npm version patch|minor|major`\

5.  Push tags\

6.  `npm publish`\

7.  Update consumer apps

    ``` bash
    pnpm add pravita-react-ds@latest
    ```

------------------------------------------------------------------------

## 10. Contributing

1.  Add new component under `src/components/`
2.  Add Storybook file
3.  Export in `src/components/index.ts`
4.  Export in `src/index.ts`
5.  Build & test
