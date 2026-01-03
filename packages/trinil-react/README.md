# trinil-react

React 16.8+ icon components. Tree-shakeable, zero dependencies, 1055 outline icons.

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
      <Check size={32} color="green" strokeWidth={2} />
      <UsersSearch ariaLabel="Search users" />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width/height in pixels |
| `color` | `string` | `"currentColor"` | Stroke color (inherits from CSS) |
| `strokeWidth` | `number` | `1.5` | Stroke thickness (1-2 recommended) |
| `className` | `string` | — | CSS classes |
| `title` | `string` | — | SVG `<title>` (accessibility) |
| `ariaLabel` | `string` | — | `aria-label` attribute |

## Styling

Inherit color from CSS:

```tsx
<div style={{ color: 'blue' }}>
  <ArrowDown /> {/* Blue */}
</div>
```

Or set directly:

```tsx
<ArrowDown color="#ff5733" size={40} strokeWidth={2} className="my-icon" />
```

## Accessibility

Add `ariaLabel` or `title` for standalone icons:

```tsx
<button>
  <ArrowDown ariaLabel="Scroll down" />
</button>
```

## Note

`stroke-linecap` and `stroke-linejoin` are locked to `round` for visual consistency.

## License

MIT
