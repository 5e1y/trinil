import { defineComponent, h } from 'vue';

export const Trophy = defineComponent({
  name: 'Trophy',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="M17 4V3H7v1m10 0v5a4.98 4.98 0 0 1-1 3m1-8a3.62 3.62 0 0 1 3.602 3.98l-.03.306c-.048.472-.18.931-.393 1.356l-.023.046A4.18 4.18 0 0 1 16.416 12H16M7 4v5c0 1.126.372 2.164 1 3M7 4a3.62 3.62 0 0 0-3.602 3.98l.03.306c.048.472.18.931.393 1.356l.023.046A4.18 4.18 0 0 0 7.584 12H8m0 0a5 5 0 0 0 4 2m0 0a5 5 0 0 0 4-2m-4 2v7m0 0h5m-5 0H7"/>`,
      }, children);
    };
  },
});
