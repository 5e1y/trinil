import { defineComponent, h } from 'vue';

export const MenuLeft = defineComponent({
  name: 'MenuLeft',
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
          innerHTML: `<path d="M8 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3M8 5h11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8M8 5v14"/>`,
        },
        children,
      );
    };
  },
});
