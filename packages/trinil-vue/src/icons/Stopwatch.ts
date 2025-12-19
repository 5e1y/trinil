import { defineComponent, h } from 'vue';

export const Stopwatch = defineComponent({
  name: 'Stopwatch',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 6V3m0 3a7.5 7.5 0 1 0 3.75 1.004M12 6c1.366 0 2.647.365 3.75 1.004M12 3h2m-2 0h-2m5.75 4.004L16.5 5.5m0 5.5-4.441 3.454a.1.1 0 0 1-.12.003L8.5 12"/>`,
        },
        children,
      );
    };
  },
});
