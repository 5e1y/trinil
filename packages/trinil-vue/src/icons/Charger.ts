import { defineComponent, h } from 'vue';

export const Charger = defineComponent({
  name: 'Charger',
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
          innerHTML: `<path d="M16.5 15H18a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v8a1 1 0 0 0 1 1h1.5m9 0v4.75a1.25 1.25 0 1 1-2.5 0V15m2.5 0H14m0 0h-4m-2.5 0v4.75a1.25 1.25 0 1 0 2.5 0V15m-2.5 0H10m3-9-1.54 1.848A.703.703 0 0 0 12 9c.596 0 .921.695.54 1.152L11 12"/>`,
        },
        children,
      );
    };
  },
});
