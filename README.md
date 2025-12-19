# Trinil

A standalone, tree-shakeable SVG icon library for React and Vue 3. Built with ~765 outline icons, stroke-based design, and zero runtime dependencies.

## Packages

- **`trinil-react`** - React 16.8+ components
- **`trinil-vue`** - Vue 3 components

## Features

- 🎯 **Standalone** - No Iconify or external runtime engine
- 📦 **Tree-shakeable** - ESM + named exports, one file per icon
- 🎨 **Locked style** - Icons use `stroke="currentColor"`, stroke width, and other properties cannot be overridden via props
- ♿ **Accessible** - Built-in ARIA attributes and title support
- 🚀 **Zero dependencies** - Peer dependencies only (React/Vue)
- 📐 **24×24 viewBox** - All icons standardized

## Icon Naming Convention

SVG filenames in `/svg/` are converted to PascalCase component names:
- `arrow-down.svg` → `ArrowDown`
- `users-search.svg` → `UsersSearch`
- `check-bold.svg` → `CheckBold`

## Building

Install and build all packages:

```bash
npm install
npm run build
```

Build specific package:

```bash
npm run build:react   # React only
npm run build:vue     # Vue only
```

## Adding New Icons

1. Export SVGs from Figma to `/svg/` (or place them there manually)
2. Ensure each SVG has `viewBox="0 0 24 24"` and uses stroke (no fill)
3. Run: `npm run generate`
4. Icons are automatically added to both `trinil-react` and `trinil-vue`

## Icon Generator

The generator script (`scripts/generate-icons.mjs`):
- Optimizes SVGs with SVGO
- Normalizes stroke attributes
- Converts filenames to component names (detects/fails on collisions)
- Generates React components and Vue components
- Updates `index.ts` exports automatically

## Component Props

Both React and Vue components support:

### React

```typescript
interface IconProps {
  size?: number;        // 24 (default)
  color?: string;       // "currentColor" (default)
  className?: string;   // CSS classes
  title?: string;       // SVG title (accessibility)
  ariaLabel?: string;   // aria-label attribute
}
```

### Vue

```typescript
interface IconProps {
  size?: number;        // 24 (default)
  color?: string;       // "currentColor" (default)
  class?: string;       // CSS classes
  title?: string;       // SVG title (accessibility)
  ariaLabel?: string;   // aria-label attribute
}
```

**Note**: Stroke properties (`stroke-width`, `stroke-linecap`, etc.) are intentionally locked and cannot be overridden.

## Example Usage

### React

```tsx
import { ArrowDown, UsersSearch } from 'trinil-react';

export function App() {
  return (
    <>
      <ArrowDown size={32} color="#000" />
      <UsersSearch className="icon-large" />
    </>
  );
}
```

### Vue 3

```vue
<script setup>
import { ArrowDown, UsersSearch } from 'trinil-vue';
</script>

<template>
  <div>
    <ArrowDown :size="32" color="#000" />
    <UsersSearch class="icon-large" />
  </div>
</template>
```

## Development

### Example Projects

- `/examples/react` - Vite + React example
- `/examples/vue` - Vite + Vue 3 example

Run examples (after building):

```bash
npm install
npm run build
cd examples/react && npm install && npm run dev
```

## Locked Attributes

All icons are generated with these attributes hardcoded (cannot be overridden):

```xml
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.5"
  stroke-linecap="round"
  stroke-linejoin="round"
  vector-effect="non-scaling-stroke"
>
  <!-- ... icon paths -->
</svg>
```

This ensures visual consistency across the icon set.

## License

MIT