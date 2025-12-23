import { defineComponent, h } from 'vue';

export const ZoomCamera = defineComponent({
  name: 'ZoomCamera',
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
        innerHTML: `<path d="M8 10.5V9.1a.1.1 0 0 1 .1-.1H10m4 0h1.9a.1.1 0 0 1 .1.1v1.4m0 3v1.4a.1.1 0 0 1-.1.1H14m-4 0H8.1a.1.1 0 0 1-.1-.1v-1.4m-1.5-6L3 4m0 0v3m0-3h3m12 0h3m0 0v3m0-3-3.5 3.5m0 9L21 20m0 0v-3m0 3h-3M6.5 16.5 3 20m0 0v-3m0 3h3"/>`,
      }, children);
    };
  },
});
