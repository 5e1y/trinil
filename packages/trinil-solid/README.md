# trinil-solid

SVG icon library for SolidJS. Tree-shakeable, 1055 outline icons.

## Installation

```bash
npm install trinil-solid
```

## Usage

```tsx
import { ArrowDown, Check, UsersSearch } from 'trinil-solid';

function App() {
  return (
    <div>
      <ArrowDown size={24} />
      <Check size={32} color="green" strokeWidth={2} />
      <UsersSearch class="my-icon" ariaLabel="Search users" />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width/height in pixels |
| `color` | `string` | `"currentColor"` | SVG stroke color |
| `strokeWidth` | `number` | `1.5` | Stroke thickness (1-2 recommended) |
| `class` | `string` | — | CSS classes |
| `title` | `string` | — | SVG title for accessibility |
| `ariaLabel` | `string` | — | ARIA label |

## Note

`stroke-linecap` and `stroke-linejoin` are locked to `round` for visual consistency.

## License

MIT
