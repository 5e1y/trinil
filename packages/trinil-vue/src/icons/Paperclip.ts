import { defineComponent, h } from 'vue';

export const Paperclip = defineComponent({
  name: 'Paperclip',
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
        innerHTML: `<path d="m21.75 11.25-8.89 8.814a5.836 5.836 0 0 1-8.22-8.286l8.354-8.294a4.241 4.241 0 1 1 5.974 6.022l-8.361 8.29a2.65 2.65 0 1 1-3.729-3.765L15 6"/>`,
      }, children);
    };
  },
});
