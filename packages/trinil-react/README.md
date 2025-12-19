# trinil-react

React 16.8+ icon components from the Trinil icon library. Tree-shakeable, zero dependencies, 765 beautifully designed outline icons.

**Now available on npm!** → https://www.npmjs.com/package/trinil-react

## Installation

```bash
npm install trinil-react
```

## Quick Start

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

## Props

All icon components accept:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width/height in pixels |
| `color` | `string` | `"currentColor"` | Stroke color |
| `className` | `string` | - | CSS classes |
| `title` | `string` | - | SVG `<title>` (accessibility) |
| `ariaLabel` | `string` | - | `aria-label` attribute |

## Styling

Icons inherit color from CSS:

```tsx
<div style={{ color: 'blue' }}>
  <ArrowDown /> {/* Renders in blue */}
</div>
```

Or set directly:

```tsx
<ArrowDown color="#ff5733" size={40} className="my-icon" />
```

## Design

⚠️ **Stroke properties are locked** (stroke-width, stroke-linecap, stroke-linejoin). This ensures visual consistency.

Only `size`, `color`, `className`, `title`, and `ariaLabel` can be customized.

## Accessibility

Always provide `ariaLabel` or `title` for standalone icons:

```tsx
<button>
  <ArrowDown ariaLabel="Scroll down" />
</button>

<ArrowDown title="Download" />
```

## All Available Icons

765 icons including:
- Navigation: ArrowDown, ArrowUp, ChevronLeft, etc.
- UI: Check, Cross, AlertCircle, etc.
- Media: Play, Pause, Volume, etc.
- Social: Heart, Share, etc.
- And many more...

See the repository for a complete list.

## License

MIT
