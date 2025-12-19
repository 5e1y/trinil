import { defineComponent, h } from 'vue';

export const Cone = defineComponent({
  name: 'Cone',
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
          innerHTML: `<path d="M12 21c4.97 0 9-1.79 9-4 0-.383-.121-.754-.348-1.105L12.083 3.124a.1.1 0 0 0-.166 0l-8.569 12.77A2.02 2.02 0 0 0 3 17c0 2.21 4.03 4 9 4Z"/>`,
        },
        children,
      );
    };
  },
});
