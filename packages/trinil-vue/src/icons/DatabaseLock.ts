import { defineComponent, h } from 'vue';

export const DatabaseLock = defineComponent({
  name: 'DatabaseLock',
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
          innerHTML: `<path d="M20 9c0 2.761-3.582 5-8 5s-8-2.239-8-5m16 0c0-2.761-3.582-5-8-5S4 6.239 4 9m16 0v3M4 9v3m0 0c0 2.761 3.582 5 8 5q.566 0 1.11-.048M4 12v3c0 2.761 3.582 5 8 5q.71 0 1.384-.075M20 12v1.416M20 12c0 .452-.096.89-.275 1.305m.275.111a5.001 5.001 0 1 1-6.616 6.51M20 13.415a5 5 0 0 0-.275-.11m0 0a5.002 5.002 0 0 0-6.615 3.647m0 0a5 5 0 0 0 .274 2.972M16.5 17.5h-.4a.1.1 0 0 0-.1.1v2.3a.1.1 0 0 0 .1.1h3.8a.1.1 0 0 0 .1-.1v-2.3a.1.1 0 0 0-.1-.1h-.4m-3 0v-1a1.5 1.5 0 0 1 3 0v1m-3 0h3"/>`,
        },
        children,
      );
    };
  },
});
