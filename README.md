# Trinil

A standalone, tree-shakeable SVG icon library for React and Vue 3. Built with ~765 outline icons, stroke-based design, and zero runtime dependencies.

## Packages

- **`trinil-react`** - React 16.8+ components  
- **`trinil-vue`** - Vue 3 components

## Features

- 🎯 **Standalone** - No Iconify or external runtime engine
- 📦 **Tree-shakeable** - ESM + named exports, one file per icon
- 🎨 **Locked style** - Icons use `stroke="currentColor"`, stroke properties cannot be overridden
- ♿ **Accessible** - Built-in ARIA attributes and title support
- 🚀 **Zero dependencies** - Peer dependencies only (React/Vue)
- 📐 **24×24 viewBox** - All icons standardized

## Quick Start

### Install from npm

```bash
npm install trinil-react      # React
npm install trinil-vue        # Vue 3
npm install trinil-react trinil-vue  # Both
```

### React Example

```tsx
import { ArrowDown, Check, UsersSearch } from 'trinil-react';

export function App() {
  return (
    <div>
      <ArrowDown size={24} />
      <Check size={32} color="green" />
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
    <Check :size="32" color="green" />
    <UsersSearch aria-label="Search users" />
  </div>
</template>
```

## Component Props

| Prop | Type | Default | Notes |
|------|------|---------|-------|
| `size` | `number` | `24` | Width/height in pixels |
| `color` | `string` | `"currentColor"` | SVG stroke color (inherits from CSS) |
| `className` / `class` | `string` | — | CSS classes (React: `className`, Vue: `class`) |
| `title` | `string` | — | SVG `<title>` for accessibility |
| `ariaLabel` | `string` | — | `aria-label` attribute |

⚠️ **Important**: Stroke properties (`stroke-width`, `stroke-linecap`, `stroke-linejoin`) are **locked** and cannot be overridden to ensure consistent visual weight.

## How to Update Icons

1. Add or replace `.svg` files in `/svg/`
2. Run `npm run release:patch` (orchestrates the entire workflow)
   - Validates SVG structure
   - Generates React + Vue components  
   - Builds packages
   - Runs smoke tests
   - Bumps versions (both packages stay in sync)
   - Creates git commit + tag
   - Pushes to origin
3. Run `npm run publish:react` and `npm run publish:vue` (npm auth required)

## Development Commands

```bash
npm install                 # Install all dependencies
npm run icons:validate      # Validate SVG structure
npm run icons:generate      # Generate components from /svg/
npm run build               # Build both packages
npm run test:smoke          # Verify exports
npm run verify:pack         # Show published tarball contents
npm run release:patch       # Full release (patch bump)
npm run publish:react       # Publish to npm
npm run publish:vue         # Publish to npm
```

## SVG Guidelines

When adding icons to `/svg/`:
- Use **strokes, not fills**
- Ensure `viewBox="0 0 24 24"` is set
- Use round line caps and joins for consistency
- The generator locks all stroke attributes automatically

## Design System

All icons render with these **locked attributes**:

```xml
fill="none"
stroke="currentColor"
stroke-width="1.5"
stroke-linecap="round"
stroke-linejoin="round"
vector-effect="non-scaling-stroke"
```

This guarantees:
- ✅ Consistent visual weight across the library
- ✅ Predictable scaling at any size
- ✅ Color control via CSS (inherits from parent)
- ✅ No user overrides to stroke styles

## Project Structure

```
trinil/
├── svg/                    # ~765 source SVG icons (you update these)
├── packages/
│   ├── trinil-react/       # React package
│   │   ├── src/            # Source (generated components + index)
│   │   ├── dist/           # Built output
│   │   └── package.json
│   └── trinil-vue/         # Vue package
│       ├── src/            # Source (generated components + index)
│       ├── dist/           # Built output
│       └── package.json
├── examples/               # React + Vue demo apps
├── scripts/                # Generation, validation, release scripts
└── package.json
```

## License

MIT