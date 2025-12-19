import { defineComponent, h } from 'vue';

export const Spinner = defineComponent({
  name: 'Spinner',
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
          innerHTML: `<path d="M12 2v4m10 6h-4m-6 10v-4M2 12h4m11-8.66-2 3.464M20.66 17l-3.464-2M7 20.66l2-3.464M3.34 7l3.464 2M20.66 7l-3.464 2M17 20.66l-2-3.464M3.34 17l3.464-2M7 3.34l2 3.464"/>`,
        },
        children,
      );
    };
  },
});
