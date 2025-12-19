import { defineComponent, h } from 'vue';

export const Bedroom = defineComponent({
  name: 'Bedroom',
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
          innerHTML: `<path d="M3 18h10.5M3 18v-2.5M3 18v1.5M13.5 18v1.5m0-1.5v-1.5a1 1 0 0 0-1-1H3m0-4v4M16 17v1.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V17m-5 0h5m-5 0v-2.5m5 2.5v-2.5m-5 0v-7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v7m-5 0h5M8.5 7V4.6a.1.1 0 0 1 .1-.1h3.8a.1.1 0 0 1 .1.1v2.9m-4-.5v2.4a.1.1 0 0 0 .1.1h3.8a.1.1 0 0 0 .1-.1V7.5m-4-.5.156.078A5.57 5.57 0 0 0 12.5 7.5"/>`,
        },
        children,
      );
    };
  },
});
