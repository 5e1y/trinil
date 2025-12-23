import { defineComponent, h } from 'vue';

export const SafeFrame = defineComponent({
  name: 'SafeFrame',
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
        innerHTML: `<path d="M3 9V5.1a.1.1 0 0 1 .1-.1H7m10 0h3.9a.1.1 0 0 1 .1.1V9m0 6v3.9a.1.1 0 0 1-.1.1H17M7 19H3.1a.1.1 0 0 1-.1-.1V15m9-5v4m-2-2h4"/>`,
      }, children);
    };
  },
});
