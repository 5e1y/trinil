import { defineComponent, h } from 'vue';

export const WaterDrop = defineComponent({
  name: 'WaterDrop',
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
          innerHTML: `<path d="m7.041 10.525 4.877-6.91a.1.1 0 0 1 .164 0l4.877 6.91a6.33 6.33 0 0 1 1.147 3.277l.012.21a6.129 6.129 0 1 1-12.236 0l.012-.21a6.33 6.33 0 0 1 1.147-3.277Z"/>`,
        },
        children,
      );
    };
  },
});
