import { defineComponent, h } from 'vue';

export const Barcode = defineComponent({
  name: 'Barcode',
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
        innerHTML: `<path d="M3 7.5v-3A1.5 1.5 0 0 1 4.5 3h3m9 0h3A1.5 1.5 0 0 1 21 4.5v3m0 9v3a1.5 1.5 0 0 1-1.5 1.5h-3m-9 0h-3A1.5 1.5 0 0 1 3 19.5v-3m3-9v9m1.5 0v-9m3 0v9m3-9v9m3-9v9m1.5 0v-9"/>`,
      }, children);
    };
  },
});
