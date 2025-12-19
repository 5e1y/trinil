import { defineComponent, h } from 'vue';

export const Pen = defineComponent({
  name: 'Pen',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="m17.5 11.5 2.293-2.293a1 1 0 0 0 0-1.414l-3.586-3.586a1 1 0 0 0-1.414 0L12.5 6.5m5 5-5-5m5 5c1.29 2.838-.353 6.144-3.393 6.83l-9.07 2.048a1 1 0 0 1-.927-.268L4 20m8.5-13.5c-2.838-1.29-6.144.352-6.83 3.393l-2.049 9.07a1 1 0 0 0 .269.927L4 20m0 0 5.586-5.586m0 0a2 2 0 1 1 2.829-2.829 2 2 0 0 1-2.83 2.83Z"/>`,
        },
        children,
      );
    };
  },
});
