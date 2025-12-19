import { defineComponent, h } from 'vue';

export const Home = defineComponent({
  name: 'Home',
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
          innerHTML: `<path d="M19.53 8.206a1 1 0 0 1 .47.848V19a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9.054a1 1 0 0 1 .47-.848l7-4.375a1 1 0 0 1 1.06 0z"/>`,
        },
        children,
      );
    };
  },
});
