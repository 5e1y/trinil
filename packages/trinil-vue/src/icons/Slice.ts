import { defineComponent, h } from 'vue';

export const Slice = defineComponent({
  name: 'Slice',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M6.429 9.75 2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m-11.142 0L2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m0 0L21.75 12l-4.179 2.25m-11.142 0L2.25 16.5 12 21.75l9.75-5.25-4.179-2.25m-11.142 0 5.571 3 5.571-3"/>`,
      }, children);
    };
  },
});
