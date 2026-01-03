import { defineComponent, h } from 'vue';

export const Scale = defineComponent({
  name: 'Scale',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: Number, default: 1.5 },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': props.strokeWidth, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="M3 6V4.5A1.5 1.5 0 0 1 4.5 3H6m4.5 0h3M18 3h1.5A1.5 1.5 0 0 1 21 4.5V6m0 12v1.5a1.5 1.5 0 0 1-1.5 1.5H18m-6 0h1.5M21 10.5v3m-18-3V12m8.25.75 6-6m0 0v4.5m0-4.5h-4.5M3 21v-6h6v6z"/>`,
      }, children);
    };
  },
});
