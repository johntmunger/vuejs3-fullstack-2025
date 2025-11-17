# Vuejs 3 Masterclass 2025

Single-page application with Shadcn components and Tailwind CSS. 

Current local development setup  `^0.11.4` for adding components. For this demo, use the Shadcn `0.11.4` library
```sh
npx shadcn-vue@^0.11.4 add input
```

## Important to reset the database with Supabase
Use this syntax to reset the server currently
```sh
npx supabase@beta db reset --linked
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
