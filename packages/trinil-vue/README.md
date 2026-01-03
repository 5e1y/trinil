# trinil-vue

Vue 3 icon components. Tree-shakeable, zero dependencies, 1055 outline icons.

## Installation

```bash
npm install trinil-vue
```

## Quick Start

```vue
<script setup>
import { ArrowDown, Check, UsersSearch } from 'trinil-vue';
</script>

<template>
  <div>
    <ArrowDown :size="24" />
    <Check :size="32" color="green" :stroke-width="2" />
    <UsersSearch aria-label="Search users" />
  </div>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width/height in pixels |
| `color` | `string` | `"currentColor"` | Stroke color (inherits from CSS) |
| `strokeWidth` | `number` | `1.5` | Stroke thickness (1-2 recommended) |
| `class` | `string` | — | CSS classes |
| `title` | `string` | — | SVG `<title>` (accessibility) |
| `ariaLabel` | `string` | — | `aria-label` attribute |

## Styling

Inherit color from CSS:

```vue
<div :style="{ color: 'blue' }">
  <ArrowDown /> <!-- Blue -->
</div>
```

Or set directly:

```vue
<ArrowDown color="#ff5733" :size="40" :stroke-width="2" class="my-icon" />
```

## Accessibility

Add `aria-label` or `title` for standalone icons:

```vue
<button>
  <ArrowDown aria-label="Scroll down" />
</button>
```

## Note

`stroke-linecap` and `stroke-linejoin` are locked to `round` for visual consistency.

## License

MIT
