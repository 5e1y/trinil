# Trinil Quick Reference

## Installation & Setup

```bash
# Clone the repo
git clone https://github.com/5e1y/trinil.git
cd trinil

# Install all dependencies
npm install

# Build both packages (React + Vue)
npm run build
```

That's it! You now have:
- `packages/trinil-react/dist/` - Ready-to-use React icon library (870 KB)
- `packages/trinil-vue/dist/` - Ready-to-use Vue 3 icon library (1.1 MB)

## Daily Commands

| Command | What It Does |
|---------|-------------|
| `npm install` | Install root + all package dependencies |
| `npm run generate` | Regenerate 765 icon components from `/svg/` |
| `npm run build` | Build both React and Vue packages |
| `npm run build:react` | Build React package only |
| `npm run build:vue` | Build Vue package only |

## Using the Icons

### In a React Project

```bash
# Option 1: During development, point to local repo
npm install /path/to/trinil/packages/trinil-react

# Or in package.json:
# "dependencies": { "trinil-react": "file:../trinil/packages/trinil-react" }
```

```tsx
import { ArrowDown, Check, UsersSearch } from 'trinil-react';

export function App() {
  return (
    <div>
      <ArrowDown size={24} />
      <Check size={32} color="green" />
      <UsersSearch className="my-icon" ariaLabel="Search" />
    </div>
  );
}
```

### In a Vue 3 Project

```bash
# Option 1: During development
npm install /path/to/trinil/packages/trinil-vue

# Or in package.json:
# "dependencies": { "trinil-vue": "file:../trinil/packages/trinil-vue" }
```

```vue
<script setup>
import { ArrowDown, Check, UsersSearch } from 'trinil-vue';
</script>

<template>
  <div>
    <ArrowDown :size="24" />
    <Check :size="32" color="green" />
    <UsersSearch class="my-icon" aria-label="Search" />
  </div>
</template>
```

## Icon Component Props

```typescript
// Same props for both React and Vue
interface IconProps {
  size?: number;        // Default: 24 (pixels)
  color?: string;       // Default: "currentColor" (inherits CSS)
  className?: string;   // React: CSS classes
  class?: string;       // Vue: CSS classes
  title?: string;       // SVG title (accessibility)
  ariaLabel?: string;   // aria-label attribute
}
```

## Adding New Icons

1. **Add SVGs to `/svg/` folder**  
   - Must have `viewBox="0 0 24 24"`
   - Use strokes, no fills
   - Filename becomes component name (e.g., `arrow-down.svg` → `ArrowDown`)

2. **Regenerate and build**
   ```bash
   npm run generate
   npm run build
   ```

3. **Done!** Icons available in both packages immediately

## Testing

```bash
# Build packages first
npm run build

# Run React example (opens http://localhost:3000)
cd examples/react
npm install
npm run dev

# OR run Vue example
cd examples/vue
npm install
npm run dev
```

## Project Files

- **[README.md](README.md)** - Full documentation
- **[DEVELOPMENT.md](DEVELOPMENT.md)** - Development guide
- **[LICENSE](LICENSE)** - MIT license

- **packages/trinil-react/**
  - `src/icons/` - Generated React components
  - `dist/` - Compiled ESM bundle + types
  - `README.md` - React-specific docs

- **packages/trinil-vue/**
  - `src/icons/` - Generated Vue components
  - `dist/` - Compiled ESM bundle + types
  - `README.md` - Vue-specific docs

- **svg/** - 765 source SVG icons

- **scripts/generate-icons.mjs** - Icon generator pipeline

## Troubleshooting

### Bundle size warning in build?

The bundles are large (870 KB React, 1.1 MB Vue) because they include all 765 icons. This is fine because:
- ✅ They're ESM, so tree-shakeable
- ✅ When imported selectively, only used icons are bundled
- ✅ Both bundles are gzipped in production (~126 KB React, ~25 KB Vue)

### How do I use only specific icons?

Named imports automatically tree-shake:

```tsx
// ✓ Only ArrowDown and Check are bundled
import { ArrowDown, Check } from 'trinil-react';
```

### Can I change stroke width or style?

No, stroke properties are intentionally locked for design consistency:
- `stroke-width: 1.5` (fixed)
- `stroke-linecap: round` (fixed)
- `stroke-linejoin: round` (fixed)

Only `size`, `color`, and `className`/`class` can be changed.

### Will you publish to npm?

Not yet. Current status: **Development-only**.

To publish later:
```bash
npm publish -w packages/trinil-react
npm publish -w packages/trinil-vue
```

Then users can: `npm install trinil-react trinil-vue`

## Stats

| Metric | Value |
|--------|-------|
| Total Icons | 765 |
| React Bundle | 870 KB (minified), ~126 KB (gzipped) |
| Vue Bundle | 1.1 MB (minified), ~25 KB (gzipped) |
| Dependencies | 0 (peer: React 16.8+, Vue 3+) |
| TypeScript | ✓ Full types included |
| Tree-shakeable | ✓ ESM with named exports |
| License | MIT |

## What's Special About Trinil?

✅ **Standalone** - No Iconify, no external runtime  
✅ **Locked Design** - Consistent stroke style across all icons  
✅ **Tree-shakeable** - Only bundle icons you use  
✅ **Accessible** - Built-in ARIA and title support  
✅ **Zero Config** - Use immediately after build  
✅ **Dual Packages** - React AND Vue 3 support  

## Next Steps

1. ✅ Build: `npm run build`
2. ✅ Test: `cd examples/react && npm run dev`
3. 🎨 Add icons: Place SVGs in `/svg/`, run `npm run generate`
4. 📦 Publish: `npm publish -w packages/trinil-react` (when ready)

---

**Questions?** See [README.md](README.md) or [DEVELOPMENT.md](DEVELOPMENT.md)
