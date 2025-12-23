import { defineComponent, h } from 'vue';

export const Trash = defineComponent({
  name: 'Trash',
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
        innerHTML: `<path d="M8 9V7a4 4 0 1 1 8 0v2M8 9h8M8 9H6m10 0h2M6 9l.924 11.083A1 1 0 0 0 7.92 21h8.16a1 1 0 0 0 .996-.917L18 9M6 9H4.5M18 9h1.5M15 11.5l-.5 7m-5.5-7 .5 7m2.5-7v7"/>`,
      }, children);
    };
  },
});
