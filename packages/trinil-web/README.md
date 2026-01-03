# trinil-web

SVG icon library as Web Components. Works with any framework or vanilla JavaScript. 1055 outline icons.

## Installation

```bash
npm install trinil-web
```

## Usage

### Register specific icons (tree-shakeable)
```js
import { registerArrowDown, registerCheck } from 'trinil-web';

registerArrowDown();
registerCheck();
```

```html
<trinil-arrow-down size="24"></trinil-arrow-down>
<trinil-check size="32" color="green" stroke-width="2"></trinil-check>
<trinil-users-search aria-label="Search users"></trinil-users-search>
```

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `size` | `number` | `24` | Width/height in pixels |
| `color` | `string` | `"currentColor"` | SVG stroke color |
| `stroke-width` | `number` | `1.5` | Stroke thickness (1-2 recommended) |
| `title` | `string` | — | SVG title for accessibility |
| `aria-label` | `string` | — | ARIA label |

## Note

`stroke-linecap` and `stroke-linejoin` are locked to `round` for visual consistency.

## License

MIT
