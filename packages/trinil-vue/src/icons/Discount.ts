import { defineComponent, h } from 'vue';

export const Discount = defineComponent({
  name: 'Discount',
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
        innerHTML: `<path d="m8.25 15.75 7.5-7.5m3.144-3.144a3.75 3.75 0 0 0-3.638-.967A3.75 3.75 0 0 0 12 2.25c-1.394 0-2.61.76-3.256 1.889a3.75 3.75 0 0 0-3.638.967 3.75 3.75 0 0 0-.967 3.638A3.75 3.75 0 0 0 2.25 12c0 1.394.76 2.61 1.889 3.256a3.75 3.75 0 0 0 .967 3.638 3.75 3.75 0 0 0 3.638.967A3.75 3.75 0 0 0 12 21.75c1.394 0 2.61-.76 3.256-1.889a3.75 3.75 0 0 0 3.638-.967 3.75 3.75 0 0 0 .967-3.638A3.75 3.75 0 0 0 21.75 12c0-1.394-.76-2.61-1.889-3.256a3.75 3.75 0 0 0-.967-3.638M13.5 15a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m-3-6a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>`,
      }, children);
    };
  },
});
