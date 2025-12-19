import { defineComponent, h } from 'vue';

export const SubdivisionSurface = defineComponent({
  name: 'SubdivisionSurface',
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
          innerHTML: `<path d="M12 13.5v3.75M14.25 10l3.375-1.5M9.75 10 6.375 8.5m4.407-4.959-6 2.667A3 3 0 0 0 3 8.949v6.101a3 3 0 0 0 1.782 2.742l6 2.666a3 3 0 0 0 2.436 0l6-2.666A3 3 0 0 0 21 15.05v-6.1a3 3 0 0 0-1.782-2.742l-6-2.667a3 3 0 0 0-2.436 0Z"/>`,
        },
        children,
      );
    };
  },
});
