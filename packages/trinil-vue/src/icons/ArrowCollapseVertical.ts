import { defineComponent, h } from 'vue';

export const ArrowCollapseVertical = defineComponent({
  name: 'ArrowCollapseVertical',
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
          innerHTML: `<path d="M21.5 12H15m0 0 3.5 3.5M15 12l3.5-3.5M2.5 12H9m0 0L5.5 8.5M9 12l-3.5 3.5m6.5-11v15"/>`,
        },
        children,
      );
    };
  },
});
