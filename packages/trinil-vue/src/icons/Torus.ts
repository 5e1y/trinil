import { defineComponent, h } from 'vue';

export const Torus = defineComponent({
  name: 'Torus',
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
        innerHTML: `<path d="M16.244 12c-.618 1.31-2.285 2.25-4.244 2.25-1.96 0-3.626-.94-4.244-2.25m8.488 0c.166-.352.256-.73.256-1.125M16.244 12c-.618-1.31-2.285-2.25-4.244-2.25-1.96 0-3.626.94-4.244 2.25M7.5 10.875c0 .395.09.773.256 1.125m13.994 0c0-4.556-4.365-8.25-9.75-8.25S2.25 7.444 2.25 12s4.365 8.25 9.75 8.25 9.75-3.694 9.75-8.25"/>`,
      }, children);
    };
  },
});
