import { defineComponent, h } from 'vue';

export const Signpost = defineComponent({
  name: 'Signpost',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M11 21v-9m0 0h5.586a1 1 0 0 0 .707-.293l2-2a1 1 0 0 0 0-1.414l-2-2A1 1 0 0 0 16.586 6H11m0 6H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5m0 0V3"/>`,
        },
        children,
      );
    };
  },
});
