import { defineComponent, h } from 'vue';

export const Book = defineComponent({
  name: 'Book',
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
          innerHTML: `<path d="m12 6 .439-.195a10 10 0 0 1 8.122 0A.74.74 0 0 1 21 6.48v12.116a.404.404 0 0 1-.586.362 9.48 9.48 0 0 0-8-.141L12 19m0-13-.439-.195a10 10 0 0 0-8.122 0A.74.74 0 0 0 3 6.48v12.116a.405.405 0 0 0 .586.362 9.48 9.48 0 0 1 8-.141L12 19m0-13v13"/>`,
        },
        children,
      );
    };
  },
});
