# Development Guide

## Project Overview

Trinil is a monorepo containing:
- `packages/trinil-react` - React 16.8+ icon components
- `packages/trinil-vue` - Vue 3 icon components
- `svg/` - ~765 source SVG icons
- `examples/` - Demo apps for each framework
- `scripts/generate-icons.mjs` - Icon generation pipeline

## Setup

```bash
# Install dependencies for root + all packages
npm install

# Generate icon components from svg/
npm run generate

# Build both packages
npm run build
```

## What Does `npm install` Do?

Since this is an npm workspace, `npm install` at the root:
1. Installs all dependencies listed in `root/package.json` (svgo, tsup, typescript)
2. Installs dependencies for each package in `packages/*/package.json`
3. Links packages together, so they can reference each other locally

After install, you can run scripts in any package or at root.

## Daily Workflow

### Adding New Icons

1. Place SVG files in `/svg/` (ensure `viewBox="0 0 24 24"`)
2. Run: `npm run generate`
3. Run: `npm run build`
4. Icons are now available in both packages

### Testing Changes

```bash
# Build both packages
npm run build

# Or build specific package
npm run build:react
npm run build:vue

# Test React example
cd examples/react && npm run dev

# Test Vue example
cd examples/vue && npm run dev
```

### Cleaning Generated Files

```bash
# Remove all generated component files and dist/
npm run clean --workspaces
```

## Icon Generation Pipeline

The `scripts/generate-icons.mjs` script:

1. **Reads** all `.svg` files from `/svg/`
2. **Validates**:
   - Each SVG has `viewBox="0 0 24 24"`
   - Filename converts to valid PascalCase component name (removes special characters)
   - Detects naming collisions and fails with clear error
3. **Optimizes** with SVGO (safe preset)
4. **Normalizes** stroke attributes:
   - Sets `fill="none"`
   - Sets `stroke="currentColor"`
   - Sets `stroke-width="1.5"`
   - Sets `stroke-linecap="round"`
   - Sets `stroke-linejoin="round"`
   - Sets `vector-effect="non-scaling-stroke"`
5. **Generates**:
   - React components (`.tsx` files) in `packages/trinil-react/src/icons/`
   - Vue components (`.ts` files) in `packages/trinil-vue/src/icons/`
   - Index exports in `packages/trinil-{react,vue}/src/index.ts`

## Component Structure

### React Component Example

```tsx
import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export const ArrowDown: React.FC<IconProps> = React.memo((props) => {
  const { size = 24, color = 'currentColor', className, title, ariaLabel } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={ariaLabel}
      dangerouslySetInnerHTML={{ __html: `<path d="..." />` }}
    >
      {title && <title>{title}</title>}
    </svg>
  );
});

ArrowDown.displayName = 'ArrowDown';
```

### Vue Component Example

```typescript
import { defineComponent, h } from 'vue';

export const ArrowDown = defineComponent({
  name: 'ArrowDown',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = [];
      if (props.title) {
        children.push(h('title', {}, props.title));
      }
      return h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': 1.5,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'vector-effect': 'non-scaling-stroke',
          width: props.size,
          height: props.size,
          class: props.class,
          role: 'img',
          'aria-label': props.ariaLabel,
          innerHTML: `<path d="..." />`,
        },
        children,
      );
    };
  },
});
```

## Build Output

### React Package

- `packages/trinil-react/dist/index.js` - ESM bundle (~870 KB)
- `packages/trinil-react/dist/index.d.ts` - TypeScript types (~146 KB)

### Vue Package

- `packages/trinil-vue/dist/index.js` - ESM bundle (~1.1 MB)
- `packages/trinil-vue/dist/index.d.ts` - TypeScript types (~963 KB)

Both are tree-shakeable and can be imported selectively:

```javascript
// Only bundles the imported icons
import { ArrowDown, Check } from 'trinil-react';
```

## File Structure

```
trinil/
├── README.md                           # Main documentation
├── DEVELOPMENT.md                      # This file
├── LICENSE                             # MIT license
├── package.json                        # Root workspace config
├── tsconfig.json                       # Shared TypeScript config
│
├── svg/
│   ├── arrow-down.svg
│   ├── check.svg
│   ├── users-search.svg
│   └── ... (765 total)
│
├── packages/
│   ├── trinil-react/
│   │   ├── package.json                # React package config
│   │   ├── tsconfig.json               # React TypeScript config
│   │   ├── README.md                   # React documentation
│   │   ├── src/
│   │   │   ├── index.ts                # Generated exports
│   │   │   └── icons/                  # Generated components
│   │   │       ├── ArrowDown.tsx
│   │   │       ├── Check.tsx
│   │   │       └── ... (765 total)
│   │   └── dist/                       # Built output
│   │       ├── index.js                # ESM bundle
│   │       └── index.d.ts              # Types
│   │
│   └── trinil-vue/
│       ├── package.json                # Vue package config
│       ├── tsconfig.json               # Vue TypeScript config
│       ├── README.md                   # Vue documentation
│       ├── src/
│       │   ├── index.ts                # Generated exports
│       │   └── icons/                  # Generated components
│       │       ├── ArrowDown.ts
│       │       ├── Check.ts
│       │       └── ... (765 total)
│       └── dist/                       # Built output
│           ├── index.js                # ESM bundle
│           └── index.d.ts              # Types
│
├── examples/
│   ├── react/
│   │   ├── package.json
│   │   ├── src/
│   │   │   ├── main.tsx
│   │   │   ├── App.tsx
│   │   │   └── App.css
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   └── tsconfig.json
│   │
│   └── vue/
│       ├── package.json
│       ├── src/
│       │   ├── main.ts
│       │   ├── App.vue
│       │   └── style.css
│       ├── index.html
│       ├── vite.config.ts
│       └── tsconfig.json
│
└── scripts/
    └── generate-icons.mjs              # Icon generator script
```

## Troubleshooting

### Build Fails with "Cannot find module"

```bash
# Ensure all dependencies are installed
npm install

# Rebuild packages
npm run build
```

### Icons Not Updating After Adding SVGs

```bash
# Regenerate components
npm run generate

# Then rebuild
npm run build
```

### Examples Won't Run

```bash
# Make sure packages are built first
npm run build

# Then install example dependencies
cd examples/react
npm install
npm run dev
```

### TypeScript Errors

```bash
# Clear any cached build artifacts
npm run clean --workspaces

# Reinstall and rebuild
npm install
npm run build
```

## Publishing to npm (Future)

When ready to publish:

```bash
# Update version in both packages
npm version patch -w packages/trinil-react
npm version patch -w packages/trinil-vue

# Publish to npm
npm publish -w packages/trinil-react
npm publish -w packages/trinil-vue
```

Users can then install normally:

```bash
npm install trinil-react trinil-vue
```

## Design Constraints

All icons are intentionally generated with locked stroke attributes to ensure consistent visual weight:

- `fill="none"` - Outline style only
- `stroke="currentColor"` - Inherits color
- `stroke-width="1.5"` - Fixed weight
- `stroke-linecap="round"` - Rounded line endings
- `stroke-linejoin="round"` - Rounded corners
- `vector-effect="non-scaling-stroke"` - Stroke doesn't scale with SVG

These attributes **cannot be overridden** via component props. This ensures:
✅ Predictable appearance at any size  
✅ Consistent visual style across all icons  
✅ No accidental distortion of icon design  

If you need different stroke properties, use CSS filters or wrap icons in a styled container.

## Contributing

1. Add SVGs to `/svg/` (ensure proper format)
2. Run `npm run generate && npm run build`
3. Test with examples: `cd examples/react && npm run dev`
4. Commit changes

## Support

For issues or questions:
- Check the main [README.md](../README.md)
- Review example apps in `/examples/`
- Inspect generated components in `packages/trinil-{react,vue}/src/icons/`
