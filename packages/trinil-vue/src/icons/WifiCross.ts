import { defineComponent, h } from 'vue';

export const WifiCross = defineComponent({
  name: 'WifiCross',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M5 12c3.866-3.866 10.134-3.866 14 0M7 15a7.07 7.07 0 0 1 8.34-1.235M3 9c4.97-4.97 13.03-4.97 18 0m-3 9 1.5-1.5M18 18l1.5 1.5M18 18l-1.5 1.5M18 18l-1.5-1.5m-1.16-2.735a5 5 0 1 0 5.32 8.47 5 5 0 0 0-5.32-8.47ZM12.75 18a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>`,
        },
        children,
      );
    };
  },
});
