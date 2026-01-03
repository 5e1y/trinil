import { defineComponent, h } from 'vue';

export const Curve = defineComponent({
  name: 'Curve',
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
        innerHTML: `<path d="M3 21c0-4.162 1.413-7.994 3.784-11.043m0 0a2.25 2.25 0 1 1 3.173-3.173M6.784 9.957a2.25 2.25 0 0 0 3.173-3.173m0 0A17.92 17.92 0 0 1 21 3"/>`,
      }, children);
    };
  },
});
