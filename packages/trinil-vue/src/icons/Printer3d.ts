import { defineComponent, h } from 'vue';

export const Printer3d = defineComponent({
  name: 'Printer3d',
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
          innerHTML: `<path d="M4 8.5h3m-3 0V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8.5m-16 0V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3.5m-13 0v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1m-4 0v1a1 1 0 0 0 1 1h1m2-2v1a1 1 0 0 1-1 1H9m2-2h9m-11 2v1M6.5 17H8m0 0v1m0-1h8m0 0h1.5M16 17v1"/>`,
        },
        children,
      );
    };
  },
});
