# trinil-react

React components for the Trinil icon library.

## Installation

```bash
npm install trinil-react
```

## Usage

```tsx
import { ArrowDown, UsersSearch } from 'trinil-react';

export function App() {
  return (
    <>
      <ArrowDown size={32} color="blue" />
      <UsersSearch className="my-icon" />
    </>
  );
}
```

## Props

All icon components accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width and height in pixels |
| `color` | `string` | `"currentColor"` | SVG stroke color |
| `className` | `string` | - | CSS class names |
| `title` | `string` | - | SVG `<title>` element (accessibility) |
| `ariaLabel` | `string` | - | `aria-label` attribute |

## Styling

Icons are designed to inherit color from CSS:

```tsx
<div style={{ color: 'red' }}>
  <ArrowDown /> {/* Will be red */}
</div>
```

Or set color directly:

```tsx
<ArrowDown color="blue" />
```

## Locked Attributes

Stroke width, linecap, linejoin, and other stroke properties are **intentionally locked** and cannot be overridden. This ensures visual consistency across the entire icon set.

If you need different stroke properties, consider using CSS filters or SVG filters.

## Accessibility

Icons are rendered with `role="img"` by default. Provide a meaningful `ariaLabel` or `title` when icons are used without accompanying text:

```tsx
<ArrowDown ariaLabel="Scroll down" />
<UsersSearch title="Search for users" />
```

## License

MIT
