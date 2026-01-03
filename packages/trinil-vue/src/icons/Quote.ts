import { defineComponent, h } from 'vue';

export const Quote = defineComponent({
  name: 'Quote',
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
        innerHTML: `<path d="M21 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0m0 0v1.5S21 18 14.25 21M10.5 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0m0 0v1.5S10.5 18 3.75 21"/>`,
      }, children);
    };
  },
});
