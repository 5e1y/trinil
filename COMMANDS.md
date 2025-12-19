# Trinil - Quick Commands Reference

## Initial Setup

```bash
# Install all dependencies
npm install
```

## Building

```bash
# Build both packages (React + Vue)
npm run build

# Or build individually
cd packages/trinil-react && npm run build
cd packages/trinil-vue && npm run build
```

## Working with Icons

### Generate Icons (after adding new SVGs to `/svg/`)
```bash
npm run generate
```

This will:
1. Scan `/svg/` for new `.svg` files
2. Optimize with SVGO
3. Generate React components: `packages/trinil-react/src/icons/<Name>.tsx`
4. Generate Vue components: `packages/trinil-vue/src/icons/<Name>.ts`
5. Update exports in both `src/index.ts` files
6. Report any naming collisions as errors

### Clean Generated Files
```bash
npm run clean --workspaces
```

Removes all generated icon component files (not the built dist/).

## Running Examples

### React Example
```bash
cd examples/react
npm install
npm run dev
# Opens on http://localhost:3000
```

### Vue Example
```bash
cd examples/vue
npm install
npm run dev
# Opens on http://localhost:3001
```

## Testing/Validation

### Verify Build
```bash
# Check that packages built correctly
ls packages/trinil-react/dist/
ls packages/trinil-vue/dist/

# Verify exports exist
head -20 packages/trinil-react/dist/index.js
head -20 packages/trinil-vue/dist/index.js
```

### Check Icon Count
```bash
find packages/trinil-react/src/icons -name "*.tsx" | wc -l
find packages/trinil-vue/src/icons -name "*.ts" | wc -l
```

## Publishing (Future)

When ready to publish to npm:

```bash
# From root
cd packages/trinil-react
npm publish

cd ../trinil-vue
npm publish
```

Or with npm workspaces:
```bash
npm publish -w packages/trinil-react
npm publish -w packages/trinil-vue
```

## Troubleshooting

### Build Fails with "Expected '}' but found '@'"
- An SVG filename contains invalid JavaScript characters
- Run `npm run generate` to see detailed error
- Rename the SVG file to use only alphanumeric characters and hyphens

### Icons not appearing in examples
```bash
# Rebuild packages first
npm run build

# Then reinstall examples
cd examples/react && rm -rf node_modules && npm install
cd examples/vue && rm -rf node_modules && npm install
```

### TypeScript errors in editor
```bash
# Regenerate type definitions
npm run build
```

## File Organization

```
trinil/
├── package.json              # Root workspace config
├── README.md                 # Main documentation
├── BUILD_SUMMARY.md          # Build details
├── LICENSE                   # MIT
├── scripts/
│   └── generate-icons.mjs   # Icon generator (run: npm run generate)
├── svg/                      # Source SVG files (765 files)
├── packages/
│   ├── trinil-react/        # React package
│   │   ├── src/
│   │   │   ├── index.ts     # All icon exports
│   │   │   └── icons/       # Component files
│   │   ├── dist/            # Built output (ESM + types)
│   │   └── package.json
│   └── trinil-vue/          # Vue package
│       ├── src/
│       │   ├── index.ts     # All icon exports
│       │   └── icons/       # Component files
│       ├── dist/            # Built output (ESM + types)
│       └── package.json
└── examples/
    ├── react/               # React demo app
    └── vue/                 # Vue demo app
```

## Key Design Decisions

1. **No Icon Spread Props** - Only `size`, `color`, `className/class`, `title`, `ariaLabel` accepted
2. **Locked Stroke Attributes** - `stroke-width`, `stroke-linecap`, `stroke-linejoin` are hardcoded, not overrideable
3. **One File Per Icon** - ESM tree-shaking friendly
4. **HTML dangerouslySetInnerHTML** (React) / `innerHTML` (Vue) - Fastest way to render SVG content
5. **Memo in React** - Performance optimization for frequently re-rendered icons
6. **Vue h() render function** - No SFC files, simpler dependency tree
7. **SVGO Optimization** - Safe defaults, no destructive stroke flattening

## Adding Custom CSS

Icons inherit `currentColor`, so:

```css
/* Global color */
.my-icon-red {
  color: red;
}

/* Inherits from parent */
.toolbar {
  color: blue;
}
```

```tsx
// React
<ArrowDown className="my-icon-red" /> // Will be red
<div className="toolbar"><ArrowDown /></div> // Will be blue
```

```vue
<!-- Vue -->
<ArrowDown class="my-icon-red" /> <!-- Red -->
<div class="toolbar"><ArrowDown /></div> <!-- Blue -->
```

---

**Questions?** See [README.md](./README.md) for full documentation.
