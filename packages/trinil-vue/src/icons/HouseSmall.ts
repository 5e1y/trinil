import { defineComponent, h } from 'vue';

export const HouseSmall = defineComponent({
  name: 'HouseSmall',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M10.5 21H9a1 1 0 0 1-1-1V7m2.5 14v-6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2.5m-3 3.5h3m0 0H15a1 1 0 0 0 1-1V7m-2.5 14v-3.5M8 7l3.293-3.293a1 1 0 0 1 1.414 0L15 6M8 7 6 9m10-2 2 2m-2-2-1-1m-1.5 11.5h-1M15 6V3.5m-3 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>`,
        },
        children,
      );
    };
  },
});
