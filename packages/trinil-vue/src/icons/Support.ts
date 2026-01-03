import { defineComponent, h } from 'vue';

export const Support = defineComponent({
  name: 'Support',
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
        innerHTML: `<path d="M8.25 20.25h3m9 0h-3m-6 0v-3m0 3h3m0 0v-6m0 6h3m0 0v-9M4.5 3h12.879c1.336 0 2.005 1.616 1.06 2.56L5.561 18.44C4.616 19.383 3 18.714 3 17.378V4.5A1.5 1.5 0 0 1 4.5 3"/>`,
      }, children);
    };
  },
});
