import { defineComponent, h } from 'vue';

export const Barcode = defineComponent({
  name: 'Barcode',
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
          innerHTML: `<path d="M6 7.5v9m2-9v9m1-9v9m2.5-9v9m2.5-9v9m1-9v9m1-9v9m2-9v9M20.5 7V4.5a1 1 0 0 0-1-1h-2m-11 0h-2a1 1 0 0 0-1 1V7m17 10.5v2a1 1 0 0 1-1 1h-2m-11 0h-2a1 1 0 0 1-1-1v-2"/>`,
        },
        children,
      );
    };
  },
});
