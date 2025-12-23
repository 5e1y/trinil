import { defineComponent, h } from 'vue';

export const ScaleUniform = defineComponent({
  name: 'ScaleUniform',
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
        innerHTML: `<path d="M4 4.5v-.4a.1.1 0 0 1 .1-.1h.4m15.5.5v-.4a.1.1 0 0 0-.1-.1h-.4m-3 0h-1m-8 0h1m3 0h1M4 7.5v1m0 3v1m16-5v1m-8.5 4 5-5m0 0v4m0-4h-4m4 10h-.4a.1.1 0 0 0-.1.1v2.3a.1.1 0 0 0 .1.1h3.8a.1.1 0 0 0 .1-.1v-2.3a.1.1 0 0 0-.1-.1h-.4m-3 0v-1a1.5 1.5 0 0 1 3 0v1m-3 0h3m.5-6v1M11.5 20h1M23 18a5 5 0 1 0-10 0 5 5 0 0 0 10 0ZM9.5 14.6v5.3a.1.1 0 0 1-.1.1H4.1a.1.1 0 0 1-.1-.1v-5.3a.1.1 0 0 1 .1-.1h5.3a.1.1 0 0 1 .1.1Z"/>`,
      }, children);
    };
  },
});
