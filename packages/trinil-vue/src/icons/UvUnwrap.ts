import { defineComponent, h } from 'vue';

export const UvUnwrap = defineComponent({
  name: 'UvUnwrap',
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
          innerHTML: `<path d="M16.5 8.5V11m0-2.5a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1V11a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1m0-2.5a1 1 0 0 0-1-1H13a1 1 0 0 0-1 1m4.5 2.5a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1m0-2.5V11m0-2.5a1 1 0 0 0-1-1m1 3.5a1 1 0 0 1-1 1M7.5 8.5V11m0-2.5a1 1 0 0 1 1-1m-1 1a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1V11a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1m0 0a1 1 0 0 0 1 1m0-4.5H11m-2.5 0a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1m0 4.5H8.5m2.5 0a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1M8.5 12a1 1 0 0 0-1 1v2.5a1 1 0 0 0 1 1m0 0H11m-2.5 0a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1H11a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1m3.5-2c.833.167 2.5.9 2.5 2.5s-1.333 2.667-2 3m0 0v-2m0 2h2"/>`,
        },
        children,
      );
    };
  },
});
