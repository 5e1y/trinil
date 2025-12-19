import { defineComponent, h } from 'vue';

export const DatabaseSettings = defineComponent({
  name: 'DatabaseSettings',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M20 9c0 2.761-3.582 5-8 5s-8-2.239-8-5m16 0c0-2.761-3.582-5-8-5S4 6.239 4 9m16 0v3M4 9v3m0 0c0 2.761 3.582 5 8 5q.566 0 1.11-.048M4 12v3c0 2.761 3.582 5 8 5q.71 0 1.384-.075M20 12v1.416M20 12c0 .452-.096.89-.275 1.305m.275.111a5.001 5.001 0 1 1-6.616 6.51M20 13.415a5 5 0 0 0-.275-.11m0 0a5.002 5.002 0 0 0-6.615 3.647m0 0a5 5 0 0 0 .274 2.972M18 16c.552 0 1.052.224 1.414.586M18 16v-1m0 1c-.552 0-1.052.224-1.414.586m2.828 0c.362.362.586.862.586 1.414m-.586-1.414L20 16m0 2h1m-1 0c0 .552-.224 1.052-.586 1.414M18 20v1m0-1c.552 0 1.052-.224 1.414-.586M18 20a2 2 0 0 1-1.414-.586M16 18h-1m1 0c0-.552.224-1.052.586-1.414M16 18c0 .552.224 1.052.586 1.414m0-2.828L16 16m3.414 3.414L20 20m-3.414-.586L16 20"/>`,
        },
        children,
      );
    };
  },
});
