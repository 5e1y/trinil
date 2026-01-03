# Trinil

A standalone, tree-shakeable SVG icon library for React, Vue 3, Svelte, SolidJS, and Web Components. Built with 1055 outline icons, stroke-based design, and zero runtime dependencies.

## Packages

- **`trinil-react`** - React 16.8+ components  
- **`trinil-vue`** - Vue 3 components
- **`trinil-svelte`** - Svelte 3/4/5 components
- **`trinil-solid`** - SolidJS components
- **`trinil-web`** - Web Components (vanilla JS)

## Features

- 🎯 **Standalone** - No Iconify or external runtime engine
- 📦 **Tree-shakeable** - ESM + named exports, one file per icon
- 🎨 **Customizable stroke** - Adjustable `strokeWidth` (1-2 recommended)
- ♿ **Accessible** - Built-in ARIA attributes and title support
- 🚀 **Zero dependencies** - Peer dependencies only
- 📐 **24×24 viewBox** - All icons standardized

## Quick Start

### Install from npm

```bash
npm install trinil-react      # React
npm install trinil-vue        # Vue 3
npm install trinil-svelte     # Svelte
npm install trinil-solid      # SolidJS
npm install trinil-web        # Web Components
```

### React Example

```tsx
import { ArrowDown, Check, UsersSearch } from 'trinil-react';

export function App() {
  return (
    <div>
      <ArrowDown size={24} />
      <Check size={32} color="green" strokeWidth={2} />
      <UsersSearch ariaLabel="Search users" />
    </div>
  );
}
```

### Vue 3 Example

```vue
<script setup>
import { ArrowDown, Check, UsersSearch } from 'trinil-vue';
</script>

<template>
  <div>
    <ArrowDown :size="24" />
    <Check :size="32" color="green" :stroke-width="2" />
    <UsersSearch aria-label="Search users" />
  </div>
</template>
```

## Component Props

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `size` | `number` | `24` | Width/height in pixels |
| `color` | `string` | `"currentColor"` | SVG stroke color (inherits from CSS) |
| `strokeWidth` | `number` | `1.5` | Stroke thickness (1-2 recommended) |
| `className` / `class` | `string` | — | CSS classes (React: `className`, Vue: `class`) |
| `title` | `string` | — | SVG `<title>` for accessibility |
| `ariaLabel` | `string` | — | `aria-label` attribute |

ℹ️ **Note**: `stroke-linecap` and `stroke-linejoin` are locked to `round` for visual consistency.

## How to Update Icons

1. Add or replace `.svg` files in `/svg/`
2. Run `npm run release:patch` (orchestrates the entire workflow)
   - Validates SVG structure
   - Generates components for all 5 frameworks
   - Builds packages
   - Runs smoke tests
   - Bumps versions (all packages stay in sync)
   - Creates git commit + tag
   - Pushes to origin
3. Run `npm run publish:react`, `npm run publish:vue`, etc. (npm auth required)

## Development Commands

```bash
npm install                 # Install all dependencies
npm run icons:validate      # Validate SVG structure
npm run icons:generate      # Generate components from /svg/
npm run build               # Build all packages
npm run test:smoke          # Verify exports
npm run verify:pack         # Show published tarball contents
npm run release:patch       # Full release (patch bump)
npm run publish:react       # Publish to npm
npm run publish:vue         # Publish to npm
npm run publish:svelte      # Publish to npm
npm run publish:solid       # Publish to npm
npm run publish:web         # Publish to npm
```

## SVG Guidelines

When adding icons to `/svg/`:
- Use **strokes, not fills**
- Ensure `viewBox="0 0 24 24"` is set
- Design for stroke-width between 1 and 2
- Use round line caps and joins for consistency
- The generator normalizes all stroke attributes automatically

## Design System

All icons render with these attributes:

```xml
fill="none"
stroke="currentColor"       <!-- customizable via color prop -->
stroke-width="1.5"          <!-- customizable via strokeWidth prop (1-2) -->
stroke-linecap="round"      <!-- locked -->
stroke-linejoin="round"     <!-- locked -->
vector-effect="non-scaling-stroke"
```

This guarantees:
- ✅ Consistent visual weight across the library
- ✅ Predictable scaling at any size
- ✅ Color control via CSS (inherits from parent)
- ✅ Adjustable stroke thickness (1-2 recommended)

## Project Structure

```
trinil/
├── svg/                    # 1055 source SVG icons
├── packages/
│   ├── trinil-react/       # React package
│   ├── trinil-vue/         # Vue package
│   ├── trinil-svelte/      # Svelte package
│   ├── trinil-solid/       # SolidJS package
│   └── trinil-web/         # Web Components package
├── scripts/                # Generation, validation, release scripts
└── package.json
```

## License

MIT