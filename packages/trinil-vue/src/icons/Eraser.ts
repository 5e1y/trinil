import { defineComponent, h } from 'vue';

export const Eraser = defineComponent({
  name: 'Eraser',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="m15.75 17.75 4.543-4.543a1 1 0 0 0 0-1.414l-6.586-6.586a1 1 0 0 0-1.414 0L7.75 9.75m8 8-1.457 1.457a1 1 0 0 1-.707.293H8.414a1 1 0 0 1-.707-.293l-2.586-2.586a3 3 0 0 1 0-4.242l2.629-2.63m8 8-8-8"/>`,
        },
        children,
      );
    };
  },
});
