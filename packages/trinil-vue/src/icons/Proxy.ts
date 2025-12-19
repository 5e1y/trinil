import { defineComponent, h } from 'vue';

export const Proxy = defineComponent({
  name: 'Proxy',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M10 17.5a2 2 0 1 0 4 0m-4 0a2 2 0 0 1 2-2m-2 2H2.5m11.5 0a2 2 0 0 0-2-2m2 2h7.5m-9.5-2V11m0 0h8a1 1 0 0 0 1-1V6.5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1V10a1 1 0 0 0 1 1zM6 7.5V9m3-1.5V9"/>`,
        },
        children,
      );
    };
  },
});
