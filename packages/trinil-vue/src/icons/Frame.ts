import { defineComponent, h } from 'vue';

export const Frame = defineComponent({
  name: 'Frame',
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
          innerHTML: `<path d="M17 3.5V7m0 0v10m0-10h3.5M17 7H7m10 10v3.5m0-3.5h3.5M17 17H7m0 0H3.5M7 17V7m0 10v3.5M7 7H3.5M7 7V3.5"/>`,
        },
        children,
      );
    };
  },
});
