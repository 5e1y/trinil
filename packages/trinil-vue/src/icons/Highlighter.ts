import { defineComponent, h } from 'vue';

export const Highlighter = defineComponent({
  name: 'Highlighter',
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
          innerHTML: `<path d="M17 12v5.18a1 1 0 0 1-.804.98l-8 1.6A1 1 0 0 1 7 18.78V12m10 0H7m10 0a3 3 0 0 0 3-3V3.5M7 12a3 3 0 0 1-3-3V3.5"/>`,
        },
        children,
      );
    };
  },
});
