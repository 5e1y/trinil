# trinil-svelte

SVG icon library for Svelte with locked stroke styles.

## Installation

```bash
npm install trinil-svelte
```

## Usage

```svelte
<script>
  import { ArrowDown, Check, UsersSearch } from 'trinil-svelte';
</script>

<ArrowDown size={24} />
<Check size={32} color="green" />
<UsersSearch class="my-icon" ariaLabel="Search users" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width/height in pixels |
| `color` | `string` | `"currentColor"` | SVG stroke color |
| `class` | `string` | — | CSS classes |
| `title` | `string` | — | SVG title for accessibility |
| `ariaLabel` | `string` | — | ARIA label |

## License

MIT
