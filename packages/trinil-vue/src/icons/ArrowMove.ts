import { defineComponent, h } from 'vue';

export const ArrowMove = defineComponent({
  name: 'ArrowMove',
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
          innerHTML: `<path d="m21 12-3-3m3 3-3 3m3-3h-6.5M12 21l3-3m-3 3-3-3m3 3v-6.5M3 12l3 3m-3-3 3-3m-3 3h6.5M12 3 9 6m3-3 3 3m-3-3v6.5"/>`,
        },
        children,
      );
    };
  },
});
