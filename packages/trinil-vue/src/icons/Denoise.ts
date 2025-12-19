import { defineComponent, h } from 'vue';

export const Denoise = defineComponent({
  name: 'Denoise',
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
          innerHTML: `<path d="M18.364 5.636A9 9 0 1 0 5.636 18.364M18.364 5.636a9 9 0 0 1 2.485 4.713m-2.485-4.713L20 4m-1.636 1.636L5.636 18.364m15.213-8.015q.15.804.151 1.651a9 9 0 0 1-10.651 8.849m10.5-10.5L20.5 10m.349.349.001.001M13 17.5l.5.5m-2 1 .5.5m4-5 .5.5m-2 1 .5.5m4-5 .5.5m-2 1 .5.5m-2.5 5 .5.5m-2 1 .5.5m4-5 .5.5m-2 1 .5.5M20 14l.5.5M12 15l.5.5m-2 1 .5.5m4-5 .5.5m-2 1 .5.5m2.5-3.5.5.5m-8 7 .5.5m-2 1 .5.5M18 9l.5.5m1-2 .5.5M5.636 18.364 4 20m1.636-1.636a9 9 0 0 0 4.713 2.485M10 20.5l.349.349"/>`,
        },
        children,
      );
    };
  },
});
