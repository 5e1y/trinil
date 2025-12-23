import { defineComponent, h } from 'vue';

export const Analytics = defineComponent({
  name: 'Analytics',
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
        innerHTML: `<path d="M8.904 15.096 4 20m4.904-4.904a6.5 6.5 0 1 1 9.192-9.192 6.5 6.5 0 0 1-9.192 9.192ZM16 13v-2.9a.1.1 0 0 0-.1-.1h-2.3a.1.1 0 0 0-.1.1M16 13h-2.5m2.5 0h1m-3.5-2.9V13m0-2.9V7.6a.1.1 0 0 0-.1-.1h-2.3a.1.1 0 0 0-.1.1V13m2.5 0H11m0 0h-1"/>`,
      }, children);
    };
  },
});
