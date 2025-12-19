import { defineComponent, h } from 'vue';

export const BoundingBox = defineComponent({
  name: 'BoundingBox',
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
          innerHTML: `<path d="M19 6.5A1.5 1.5 0 1 0 17.5 5M19 6.5A1.5 1.5 0 0 1 17.5 5M19 6.5v11M17.5 5h-11m0 0A1.5 1.5 0 0 1 5 6.5M6.5 5A1.5 1.5 0 1 0 5 6.5m0 0v11M6.5 19A1.5 1.5 0 1 1 5 17.5M6.5 19A1.5 1.5 0 0 0 5 17.5M6.5 19h11m0 0a1.5 1.5 0 1 0 1.5-1.5M17.5 19a1.5 1.5 0 0 1 1.5-1.5"/>`,
        },
        children,
      );
    };
  },
});
