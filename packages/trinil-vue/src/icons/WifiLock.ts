import { defineComponent, h } from 'vue';

export const WifiLock = defineComponent({
  name: 'WifiLock',
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
          innerHTML: `<path d="M3 9c4.97-4.97 13.03-4.97 18 0M5 12c3.866-3.866 10.134-3.866 14 0m-2.5 5.5v-1a1.5 1.5 0 0 1 3 0v1m-3 0h3m-3 0a.5.5 0 0 0-.5.5v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a.5.5 0 0 0-.5-.5m-4.16-3.735a5 5 0 1 1 5.32 8.47 5 5 0 0 1-5.32-8.47Zm0 0A7.07 7.07 0 0 0 7 15m5.75 3a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"/>`,
        },
        children,
      );
    };
  },
});
