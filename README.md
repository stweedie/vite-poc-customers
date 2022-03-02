# Vite Customers POC (vite + vue + typescript)

## Initial setup
1. Clone [POC Component Library](https://github.com/stweedie/vite-poc-component-library)
2. Follow build steps
3. ```bash
yarn add path/to/stweedie-component-library-poc-v1.0.0.tgz
```
4. ```bash
yarn dev
```

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
