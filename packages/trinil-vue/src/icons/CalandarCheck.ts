import { defineComponent, h } from 'vue';

export const CalandarCheck = defineComponent({
  name: 'CalandarCheck',
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
          innerHTML: `<path d="M4 9V7a2 2 0 0 1 2-2h1M4 9v9a2 2 0 0 0 2 2h7.416M4 9h16m0 0V7a2 2 0 0 0-2-2h-1m3 4v4.416M17 5V3.5M17 5H7m10 0v1.5M7 5V3.5M7 5v1.5m13 6.916A5 5 0 0 0 13.416 20M20 13.416A5.001 5.001 0 1 1 13.416 20M16 18l1.43 1.43a.1.1 0 0 0 .14 0L20 17"/>`,
        },
        children,
      );
    };
  },
});
