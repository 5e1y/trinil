import { defineComponent, h } from 'vue';

export const BakeAnimation = defineComponent({
  name: 'BakeAnimation',
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
        innerHTML: `<path d="M3 7V4a1 1 0 0 1 1-1h3m10 0h3a1 1 0 0 1 1 1v3M3 17v3a1 1 0 0 0 1 1h3m9-14.293V5.35a.1.1 0 0 1 .1-.1h2.3a.1.1 0 0 1 .1.1v2.3a.1.1 0 0 1-.1.1h-2.3a.1.1 0 0 1-.1-.1zm0 0a5.51 5.51 0 0 0-3.857 4.043m0 0h1.007a.1.1 0 0 1 .1.1v2.3a.1.1 0 0 1-.1.1h-1.293m.286-2.5H10.85a.1.1 0 0 0-.1.1v2.3a.1.1 0 0 0 .1.1h1.007m0 0A5.51 5.51 0 0 1 8 17.293m0 0v1.357a.1.1 0 0 1-.1.1H5.6a.1.1 0 0 1-.1-.1v-2.3a.1.1 0 0 1 .1-.1h2.3a.1.1 0 0 1 .1.1zM18 18v-2.501M18 18h2.502M18 18v2.495M18 18h-2.503M23 18a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"/>`,
      }, children);
    };
  },
});
