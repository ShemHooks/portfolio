# Morph Portfolio Setup

This build adds a scroll-driven Three.js particle morph plus Framer Motion card/modal transitions.

## Clean install (Windows CMD)

1. Close any running Vite server (`Ctrl+C`).
2. In this project folder run:

```cmd
rmdir /s /q node_modules 2>nul
del package-lock.json 2>nul
npm install
npm run dev
```

React and React Three Fiber are pinned to compatible exact versions in `package.json` to avoid the React 19.3 dependency conflict.

## Production check

```cmd
npm run build
npm run preview
```

## Morph behavior

- Top of page: particle sphere
- Mid-scroll: particles morph into a double-helix-like form
- Lower page: particles morph into a structured grid
- Project cards reveal with staggered motion
- Project info modal morphs from a rounded compact shape into the detail panel
- Reduced-motion users automatically get the animated background disabled
