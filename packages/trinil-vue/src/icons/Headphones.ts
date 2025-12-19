import { defineComponent, h } from 'vue';

export const Headphones = defineComponent({
  name: 'Headphones',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="m19 12 .06.015a2 2 0 0 1 1.455 2.425l-1.03 4.12a2 2 0 0 1-2.425 1.455l-.12-.03a2 2 0 0 1-1.455-2.425l1.03-4.12a2 2 0 0 1 2.425-1.455zm0 0c1.021-4.341-2.272-8.5-6.732-8.5h-.536C7.272 3.5 3.98 7.659 5 12m0 0-.06.015a2 2 0 0 0-1.455 2.425l1.03 4.12a2 2 0 0 0 2.425 1.455l.12-.03a2 2 0 0 0 1.455-2.425l-1.03-4.12a2 2 0 0 0-2.425-1.455z"/>`,
        },
        children,
      );
    };
  },
});
