# trinil-vue

Vue 3 components for the Trinil icon library.

## Installation

```bash
npm install trinil-vue
```

## Usage

```vue
<script setup>
import { ArrowDown, UsersSearch } from 'trinil-vue';
</script>

<template>
  <div>
    <ArrowDown :size="32" color="blue" />
    <UsersSearch class="my-icon" />
  </div>
</template>
```

## Props

All icon components accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `24` | Width and height in pixels |
| `color` | `string` | `"currentColor"` | SVG stroke color |
| `class` | `string` | - | CSS class names |
| `title` | `string` | - | SVG `<title>` element (accessibility) |
| `ariaLabel` | `string` | - | `aria-label` attribute |

## Styling

Icons are designed to inherit color from CSS:

```vue
<div :style="{ color: 'red' }">
  <ArrowDown /> <!-- Will be red -->
</div>
```

Or set color directly:

```vue
<ArrowDown color="blue" />
```

## Locked Attributes

Stroke width, linecap, linejoin, and other stroke properties are **intentionally locked** and cannot be overridden. This ensures visual consistency across the entire icon set.

If you need different stroke properties, consider using CSS filters or SVG filters.

## Accessibility

Icons are rendered with `role="img"` by default. Provide a meaningful `ariaLabel` or `title` when icons are used without accompanying text:

```vue
<ArrowDown aria-label="Scroll down" />
<UsersSearch title="Search for users" />
```

## License

MIT
