import { defineComponent, h } from 'vue';

export const CloudSun = defineComponent({
  name: 'CloudSun',
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
          innerHTML: `<path d="M12.535 14a4 4 0 0 1 2.375-1.85m-4.91.385a4.013 4.013 0 0 0-2.899-.434m7.809.05Q15.43 12 16 12a4 4 0 0 1 0 8H8a4 4 0 0 1-.899-7.899m7.809.05A4.001 4.001 0 0 0 7.1 12.1M18.5 9.5V11m-4-5.5H13m2.5 3-1 1m2-4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"/>`,
        },
        children,
      );
    };
  },
});
