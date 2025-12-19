import { defineComponent, h } from 'vue';

export const Car = defineComponent({
  name: 'Car',
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
          innerHTML: `<path d="M15 16.5H9m6 0a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m-10 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m14 0h1a1 1 0 0 0 1-1v-3.059a2 2 0 0 0-1.367-1.897l-1.24-.413a1 1 0 0 1-.578-.501l-1.539-3.077A1 1 0 0 0 15.382 6H5.618a1 1 0 0 0-.894.553l-.035.069A16 16 0 0 0 3 13.777V15.5a1 1 0 0 0 1 1h1"/>`,
        },
        children,
      );
    };
  },
});
