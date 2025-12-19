import { defineComponent, h } from 'vue';

export const WifiOff = defineComponent({
  name: 'WifiOff',
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
          innerHTML: `<path d="M5 12a9.86 9.86 0 0 1 5.5-2.786M19 12a9.85 9.85 0 0 0-5.179-2.732M7.001 15c.387-.388.808-.721 1.254-1M17 15a7.06 7.06 0 0 0-5.638-2.042M3 9a12.7 12.7 0 0 1 10-3.689M21 9a12.7 12.7 0 0 0-4.953-3.07M18 3l-1.953 2.93M6 21l5.362-8.042m0 0 2.46-3.69m0 0 2.225-3.338M12.75 18a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>`,
        },
        children,
      );
    };
  },
});
