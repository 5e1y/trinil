import { defineComponent, h } from 'vue';

export const Gpu = defineComponent({
  name: 'Gpu',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M3 16v4m0-4V6m0 10h2M3 4v2m0 0h17a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-5M5 16v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1M5 16h10m-4.5-5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm5.5 2.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>`,
        },
        children,
      );
    };
  },
});
