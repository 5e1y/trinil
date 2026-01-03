import { defineComponent, h } from 'vue';

export const Coffee = defineComponent({
  name: 'Coffee',
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
        innerHTML: `<path d="m16.883 9 .161-1.318A1.5 1.5 0 0 0 15.555 6H3.95a1.5 1.5 0 0 0-1.488 1.686l1.125 9A1.5 1.5 0 0 0 5.074 18h9.353a1.5 1.5 0 0 0 1.488-1.313L16.128 15m.755-6h1.867a3 3 0 1 1 0 6h-2.622m.755-6-.755 6"/>`,
      }, children);
    };
  },
});
