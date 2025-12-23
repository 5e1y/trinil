# trinil-web

SVG icon library as Web Components with locked stroke styles. Works with any framework or vanilla JavaScript.

## Installation

```bash
npm install trinil-web
```

## Usage

### Auto-register all icons
```js
import { registerAllIcons } from 'trinil-web';

// Register all icons as custom elements
registerAllIcons();
```

```html
<trinil-arrow-down size="24"></trinil-arrow-down>
<trinil-check size="32" color="green"></trinil-check>
<trinil-users-search aria-label="Search users"></trinil-users-search>
```

### Register specific icons only (tree-shakeable)
```js
import { ArrowDown, Check, registerIcon } from 'trinil-web';

registerIcon('trinil-arrow-down', ArrowDown);
registerIcon('trinil-check', Check);
```

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `size` | `number` | `24` | Width/height in pixels |
| `color` | `string` | `"currentColor"` | SVG stroke color |
| `title` | `string` | — | SVG title for accessibility |
| `aria-label` | `string` | — | ARIA label |

## License

MIT
