import { defineComponent, h } from 'vue';

export const CashArrowDown = defineComponent({
  name: 'CashArrowDown',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M21 14a5 5 0 0 0-7.975 3.5M21 14a5 5 0 1 1-7.975 3.5M21 14V7.5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9.025m4.975-2v5m0 0-2-2m2 2 2-2m-8-9a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm6.5 2.5a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0ZM7 12a.75.75 0 1 0-1.5 0A.75.75 0 0 0 7 12Z"/>`,
        },
        children,
      );
    };
  },
});
