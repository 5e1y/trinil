import { defineComponent, h } from 'vue';

export const Hammer = defineComponent({
  name: 'Hammer',
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
        innerHTML: `<path d="m9 11.25 9.129 9.129a2.121 2.121 0 0 0 3-3L12 8.25m-3 3 3-3m-3 3L7.5 12l-.75 1.5L2.25 9l1.5-.75.75-1.5L8.25 3h9v3h-3A2.25 2.25 0 0 0 12 8.25"/>`,
      }, children);
    };
  },
});
