# vuejs-masterclass-2024

This template should help get you started developing with Vue 3 in Vite.

## Important - for using Shad-cn components with current Tailwind release
For the current setup, use `^0.11.4` for adding components. For example do you not use `shadcn-vue@latest` use instead
```sh
npx shadcn-vue@^0.11.4 add input
```

## Important - for resetting the database
Use this syntax to reset the server currently, instead of `db:reset`
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
