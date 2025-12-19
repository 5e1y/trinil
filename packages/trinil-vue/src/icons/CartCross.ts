import { defineComponent, h } from 'vue';

export const CartCross = defineComponent({
  name: 'CartCross',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M5.667 6.5h13.986a1 1 0 0 1 .986 1.164l-.938 5.633M5.667 6.5l-.194-1.164a1 1 0 0 0-.987-.836H2.5m3.167 2L7 14.5m0 0 .36 2.164a1 1 0 0 0 .987.836h4.678M7 14.5h7.43m5.27-1.203A5 5 0 0 0 18 13a4.99 4.99 0 0 0-3.57 1.5m5.27-1.203A5.002 5.002 0 0 1 18 23a5 5 0 0 1-4.975-5.5m1.404-3a4.98 4.98 0 0 0-1.404 3M18 18l1.5-1.5M18 18l1.5 1.5M18 18l-1.5 1.5M18 18l-1.5-1.5M6.5 19a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"/>`,
        },
        children,
      );
    };
  },
});
