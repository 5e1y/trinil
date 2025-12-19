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

### Build the Icon Library

This repository uses npm workspaces. To build all packages:

```bash
# Install dependencies for root + all packages
npm install

# Generate icons from /svg/ and build both packages
npm run generate
npm run build
```

This produces:
- `packages/trinil-react/dist/` - React components bundle
- `packages/trinil-vue/dist/` - Vue 3 components bundle

### Use in a Project

Currently, these packages are not published to npm. To use them:

**Option 1: Local file path (during development)**

```json
{
  "dependencies": {
    "trinil-react": "file:../path/to/trinil/packages/trinil-react",
    "trinil-vue": "file:../path/to/trinil/packages/trinil-vue"
  }
}
```

**Option 2: Publish to npm (future)**

```bash
npm publish -w packages/trinil-react
npm publish -w packages/trinil-vue
```

## Usage Examples

### React

```tsx
import { ArrowDown, UsersSearch, Check } from 'trinil-react';

export function App() {
  return (
    <div>
      <ArrowDown size={24} color="currentColor" />
      <UsersSearch size={32} color="blue" className="my-icon" />
      <Check ariaLabel="Completed" />
    </div>
  );
}
```

### Vue 3

```vue
<script setup>
import { ArrowDown, UsersSearch, Check } from 'trinil-vue';
</script>

<template>
  <div>
    <ArrowDown :size="24" />
    <UsersSearch :size="32" color="blue" class="my-icon" />
    <Check aria-label="Completed" />
  </div>
</template>
```

## Component Props

### React Props

```typescript
interface IconProps {
  size?: number;        // Icon size in pixels (default: 24)
  color?: string;       // SVG stroke color (default: "currentColor")
  className?: string;   // CSS class names
  title?: string;       // SVG <title> (accessibility)
  ariaLabel?: string;   // aria-label attribute
}
```

### Vue Props

```typescript
interface IconProps {
  size?: number;        // Icon size in pixels (default: 24)
  color?: string;       // SVG stroke color (default: "currentColor")
  class?: string;       // CSS class names
  title?: string;       // SVG <title> (accessibility)
  ariaLabel?: string;   // aria-label attribute
}
```

⚠️ **Note**: Stroke properties (`stroke-width`, `stroke-linecap`, `stroke-linejoin`) are hardcoded and **cannot be overridden** to ensure consistent styling.

## Icon Naming

SVG filenames in `/svg/` are converted to PascalCase component names:

| File | Component |
|------|-----------|
| `arrow-down.svg` | `ArrowDown` |
| `users-search.svg` | `UsersSearch` |
| `check-bold.svg` | `CheckBold` |

Special characters (like `@`, `#`) are removed during conversion.

## Adding or Updating Icons

1. **Add SVGs to `/svg/`**  
   Export from Figma or add manually. Ensure:
   - `viewBox="0 0 24 24"` is set
   - Icons use strokes (no fills)

2. **Regenerate components**
   ```bash
   npm run generate
   npm run build
   ```

3. **Done!** New icons are available in both packages.

### Generator Details

The script (`scripts/generate-icons.mjs`):
- ✅ Optimizes SVGs with SVGO
- ✅ Normalizes stroke attributes to `currentColor`
- ✅ Removes hardcoded colors
- ✅ Generates React + Vue components
- ✅ Updates index exports
- ✅ Detects naming collisions and fails safely

## Try the Examples

```bash
# Build packages first
npm install && npm run build

# Run React example (port 3000)
cd examples/react
npm install
npm run dev

# Or run Vue example (port 3000)
cd examples/vue
npm install
npm run dev
```

Examples show size, color, accessibility, and styling options.

## Project Structure

```
trinil/
├── svg/                           # ~765 source SVG icons
├── packages/
│   ├── trinil-react/              # React package
│   │   ├── src/icons/             # Generated React components
│   │   ├── dist/                  # Built output (ESM + types)
│   │   └── package.json
│   └── trinil-vue/                # Vue 3 package
│       ├── src/icons/             # Generated Vue components
│       ├── dist/                  # Built output (ESM + types)
│       └── package.json
├── examples/
│   ├── react/                     # React demo app
│   └── vue/                       # Vue 3 demo app
├── scripts/
│   └── generate-icons.mjs         # Icon generator
└── package.json                   # Root workspace config
```

## Design Principles

All icons are rendered with these **locked attributes**:

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
```

This ensures:
- ✅ Consistent visual weight across all icons
- ✅ Inherit color from CSS without overrides
- ✅ Predictable stroke behavior at any size
- ✅ Perfect rendering at 24×24 (and scaled sizes)

## Commands Reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install all dependencies (root + workspaces) |
| `npm run generate` | Regenerate icon components from `/svg/` |
| `npm run build` | Build both React and Vue packages |
| `npm run build:react` | Build React package only |
| `npm run build:vue` | Build Vue package only |
| `npm run clean --workspaces` | Remove generated files and dist/ |

## License

MIT