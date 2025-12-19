import { defineComponent, h } from 'vue';

export const BasketPlus = defineComponent({
  name: 'BasketPlus',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M7 9H4a1 1 0 0 0-1 1v.115A13 13 0 0 0 3.594 14M7 9h5M7 9v.779A20 20 0 0 0 7.45 14M7 9a4.5 4.5 0 0 1 4.5-4.5h1A4.5 4.5 0 0 1 17 9m0 0h3a1 1 0 0 1 1 1v.115a13 13 0 0 1-.496 3.556M17 9h-5m5 0v.779a20 20 0 0 1-.29 3.389M12 9v5m-2.5 5.5-.388-.777A20 20 0 0 1 7.45 14m2.05 5.5H12m-2.5 0H7.271a.66.66 0 0 1-.464-.192A13 13 0 0 1 3.594 14m3.857 0H12m-4.55 0H3.594M12 14v5.5m0-5.5h3m3 4v-2.5m0 2.5h2.504M18 18v2.5m0-2.5h-2.5M12 19.5h1.229m7.275-5.829A5 5 0 0 0 18 13q-.67.002-1.29.168m3.794.503A5 5 0 1 1 13.23 19.5m3.482-6.332A5 5 0 0 0 15 14m0 0a5 5 0 0 0-2 4c0 .523.08 1.026.229 1.5"/>`,
        },
        children,
      );
    };
  },
});
