import { defineComponent, h } from 'vue';

export const Analytics = defineComponent({
  name: 'Analytics',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M9.75 12.75h.75m0 0h3m-3 0V7.5h3V9m0 3.75V9m0 3.75h3M13.5 9h3v3.75m0 0h.75m-9.053 3.053A7.5 7.5 0 1 0 18.804 5.196 7.5 7.5 0 0 0 8.196 15.804m0 0L3 21"/>`,
      }, children);
    };
  },
});
