import { defineComponent, h } from 'vue';

export const Question = defineComponent({
  name: 'Question',
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
          innerHTML: `<path d="M9 10.5V10a3 3 0 0 1 3-3h.394a2.606 2.606 0 0 1 1.446 4.774L13.5 12c-.937.625-1.5 1.374-1.5 2.5m0 2v.5m0 4a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"/>`,
        },
        children,
      );
    };
  },
});
