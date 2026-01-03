import { defineComponent, h } from 'vue';

export const Book = defineComponent({
  name: 'Book',
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
        innerHTML: `<path d="m12 19.5.554-.317a8.75 8.75 0 0 1 9.196.317V6a8.75 8.75 0 0 0-9.196-.316L12 6m0 13.5-.554-.317a8.75 8.75 0 0 0-9.196.317V6a8.75 8.75 0 0 1 9.196-.316L12 6m0 13.5V6"/>`,
      }, children);
    };
  },
});
