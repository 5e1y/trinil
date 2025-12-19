import { defineComponent, h } from 'vue';

export const AlignCenter = defineComponent({
  name: 'AlignCenter',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 4.5V7m0 0v3.5M12 7H5.5a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1H12M12 7h6.5a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1H12m0 0v3m0 0V17m0-3.5H8.5a1 1 0 0 0-1 1V16a1 1 0 0 0 1 1H12m0-3.5h3.5a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1H12m0 0v2.5"/>`,
        },
        children,
      );
    };
  },
});
