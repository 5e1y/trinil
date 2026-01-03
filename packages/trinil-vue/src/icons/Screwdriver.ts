import { defineComponent, h } from 'vue';

export const Screwdriver = defineComponent({
  name: 'Screwdriver',
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
        innerHTML: `<path d="M10.875 11.625 9.75 12.75a14.23 14.23 0 0 0 9 9l3-3a14.23 14.23 0 0 0-9-9l-1.125 1.125m-.75.75.75-.75m-.75.75L6.75 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v2.25l4.125 4.125"/>`,
      }, children);
    };
  },
});
