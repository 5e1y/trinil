import { defineComponent, h } from 'vue';

export const CalandarDots = defineComponent({
  name: 'CalandarDots',
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
        innerHTML: `<path d="M4 9V7a2 2 0 0 1 2-2h1M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9M4 9h16m0 0V7a2 2 0 0 0-2-2h-1m0 0V3.5M17 5H7m10 0v1.5M7 5V3.5M7 5v1.5m0 6v.5m5-.5v.5m-2.5-.5v.5m5-.5v.5m2.5-.5v.5M7 16v.5m5-.5v.5M9.5 16v.5m5-.5v.5M17 16v.5"/>`,
      }, children);
    };
  },
});
