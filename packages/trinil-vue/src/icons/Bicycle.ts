import { defineComponent, h } from 'vue';

export const Bicycle = defineComponent({
  name: 'Bicycle',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="m18.75 16.5-1.5-6.75m-5.25 6L9 10.5m3 5.25-6.75.75 3.75-6m3 5.25 5.25-6M9 10.5l8.25-.75M9 10.5l-1.732-3m9.982 2.25-.667-3m0 0h.49c1.103 0 2.19-.257 3.177-.75m-3.667.75h-.656A7.1 7.1 0 0 1 12.75 6M7.268 7.5H9.75m-2.482 0H6m9.75 9a3 3 0 1 0 6 0 3 3 0 0 0-6 0m-13.5 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0"/>`,
      }, children);
    };
  },
});
