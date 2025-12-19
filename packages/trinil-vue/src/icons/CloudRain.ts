import { defineComponent, h } from 'vue';

export const CloudRain = defineComponent({
  name: 'CloudRain',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M12.535 9a4.01 4.01 0 0 1 2.375-1.85M10 7.535a4.012 4.012 0 0 0-2.899-.434m7.809.05Q15.43 7 16 7a4 4 0 0 1 0 8H8a4 4 0 0 1-.899-7.899m7.809.05A4.001 4.001 0 0 0 7.1 7.1M6.5 17.5l.5 2m3-1.5.5 2m3-2.5.5 2m3-1.5.5 2"/>`,
        },
        children,
      );
    };
  },
});
