import { defineComponent, h } from 'vue';

export const Motherboard = defineComponent({
  name: 'Motherboard',
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
        innerHTML: `<path d="M16.5 5.5V11m-2-5.5V11M5 5V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3M5 5v6.5M5 5h1.9a.1.1 0 0 1 .1.1v6.3a.1.1 0 0 1-.1.1H5m0 0V14m0 0v3m0-3h9m-9 3h9M9.6 7h2.3a.1.1 0 0 1 .1.1v2.3a.1.1 0 0 1-.1.1H9.6a.1.1 0 0 1-.1-.1V7.1a.1.1 0 0 1 .1-.1Z"/>`,
      }, children);
    };
  },
});
