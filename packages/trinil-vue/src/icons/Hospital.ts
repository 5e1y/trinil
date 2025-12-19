import { defineComponent, h } from 'vue';

export const Hospital = defineComponent({
  name: 'Hospital',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = [];
      if (props.title) {
        children.push(h('title', {}, props.title));
      }
      return h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': 1.5,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'vector-effect': 'non-scaling-stroke',
          width: props.size,
          height: props.size,
          class: props.class,
          role: 'img',
          'aria-label': props.ariaLabel,
          innerHTML: `<path d="M9 21H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3m-6 0v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5m-6 0h3m3 0h-3m0 0v-5.89M10.4 7.5H8.6a.1.1 0 0 0-.1.1v2.8a.1.1 0 0 0 .1.1h1.8a.1.1 0 0 1 .1.1v1.8a.1.1 0 0 0 .1.1h2.8a.1.1 0 0 0 .1-.1v-1.8a.1.1 0 0 1 .1-.1h1.8a.1.1 0 0 0 .1-.1V7.6a.1.1 0 0 0-.1-.1h-1.8a.1.1 0 0 1-.1-.1V5.6a.1.1 0 0 0-.1-.1h-2.8a.1.1 0 0 0-.1.1v1.8a.1.1 0 0 1-.1.1Z"/>`,
        },
        children,
      );
    };
  },
});
