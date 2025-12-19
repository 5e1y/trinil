import { defineComponent, h } from 'vue';

export const ShoppingBag = defineComponent({
  name: 'ShoppingBag',
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
          innerHTML: `<path d="M8 8H5.926a1 1 0 0 0-.997.923l-.846 11A1 1 0 0 0 5.08 21h13.84a1 1 0 0 0 .997-1.077l-.846-11A1 1 0 0 0 18.074 8H16M8 8V7a4 4 0 0 1 8 0v1M8 8h8m-8 2.5v.5a4 4 0 0 0 8 0v-.5"/>`,
        },
        children,
      );
    };
  },
});
