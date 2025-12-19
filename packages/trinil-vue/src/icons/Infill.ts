import { defineComponent, h } from 'vue';

export const Infill = defineComponent({
  name: 'Infill',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M4 10V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5M4 10v4m0-4 3.293-3.293a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586a1 1 0 0 1 1.414 0L20 10M4 14v4m0-4 3.293-3.293a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586a1 1 0 0 1 1.414 0L20 14M4 18v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1M4 18l3.293-3.293a1 1 0 0 1 1.414 0l2.586 2.586a1 1 0 0 0 1.414 0l2.586-2.586a1 1 0 0 1 1.414 0L20 18m0 0v-4m0 0v-4"/>`,
        },
        children,
      );
    };
  },
});
