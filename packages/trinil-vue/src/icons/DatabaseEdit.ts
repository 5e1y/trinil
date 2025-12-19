import { defineComponent, h } from 'vue';

export const DatabaseEdit = defineComponent({
  name: 'DatabaseEdit',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M20 9c0 2.761-3.582 5-8 5s-8-2.239-8-5m16 0c0-2.761-3.582-5-8-5S4 6.239 4 9m16 0v3M4 9v3m0 0c0 2.761 3.582 5 8 5q.566 0 1.11-.048M4 12v3c0 2.761 3.582 5 8 5q.71 0 1.384-.075M20 12v1.416M20 12c0 .452-.096.89-.275 1.305M23 18a5 5 0 0 1-5 5m5-5a5 5 0 0 0-3-4.584M23 18c0-.866-.22-1.681-.608-2.392M18 23a5 5 0 0 1-4.616-3.075M18 23a5 5 0 0 1-5-5m7-4.584a5 5 0 0 0-.275-.11M18 13c.606 0 1.187.108 1.725.305M18 13a5 5 0 0 0-4.89 3.952M18 13a5 5 0 0 0-5 5m5-5c.866 0 1.681.22 2.392.608m-7.282 3.344Q13.001 17.46 13 18m0 0c0 .682.137 1.333.384 1.925m7.008-6.317a5.03 5.03 0 0 1 2 2m-2-2-4.1 4.1a1 1 0 0 0-.292.706V19.9a.1.1 0 0 0 .1.1h1.486a1 1 0 0 0 .707-.293l4.099-4.099"/>`,
        },
        children,
      );
    };
  },
});
