import { defineComponent, h } from 'vue';

export const Corsor = defineComponent({
  name: 'Corsor',
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
          innerHTML: `<path d="M12 6v12m0-12a2.64 2.64 0 0 1 2.562-2H16m-4 2a2.64 2.64 0 0 0-2.562-2H8m4 14a2.64 2.64 0 0 1-2.562 2H8m4-2a2.64 2.64 0 0 0 2.562 2H16"/>`,
        },
        children,
      );
    };
  },
});
