import { defineComponent, h } from 'vue';

export const Warehouse = defineComponent({
  name: 'Warehouse',
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
          innerHTML: `<path d="M6 20H3.1a.1.1 0 0 1-.1-.1V8.065a.1.1 0 0 1 .06-.091l8.9-3.956a.1.1 0 0 1 .08 0l8.9 3.956a.1.1 0 0 1 .06.091V19.9a.1.1 0 0 1-.1.1H18M6 20v-5m0 5h4m8 0h-3m3 0v-4M6 15v-4.9a.1.1 0 0 1 .1-.1h11.8a.1.1 0 0 1 .1.1V16M6 15h3.9a.1.1 0 0 1 .1.1v2.4m0 2.5v-2.5m0 2.5h2.5M10 17.5h2.4a.1.1 0 0 1 .1.1V20m0 0H15m0 0v-3.9a.1.1 0 0 1 .1-.1H18"/>`,
        },
        children,
      );
    };
  },
});
