import { defineComponent, h } from 'vue';

export const Stethoscope = defineComponent({
  name: 'Stethoscope',
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
          innerHTML: `<path d="m10 5 1.445-.964A1 1 0 0 1 13 4.868V11a5 5 0 0 1-5 5M6 5l-1.445-.964A1 1 0 0 0 3 4.868V11a5 5 0 0 0 5 5m0 0v.236A3.764 3.764 0 0 0 11.764 20a6.736 6.736 0 0 0 6.736-6.736V12m0 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>`,
        },
        children,
      );
    };
  },
});
