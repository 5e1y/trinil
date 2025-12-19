import { defineComponent, h } from 'vue';

export const Elevator = defineComponent({
  name: 'Elevator',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M8.5 10.5v.5m0-.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0 .5v3.5m0-3.5a3.62 3.62 0 0 1 1.992 3M8.5 11a3.62 3.62 0 0 0-1.992 3m1.992.5-.3.4c-.711.948-1.124 1.916-1.19 3.6m1.49-4 .227.338c.662.99 1.043 1.975 1.104 3.662M15.5 6v12m0-12-2 2m2-2 2 2m-2 10 2-2m-2 2-2-2m-9-12.5h15a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1Z"/>`,
        },
        children,
      );
    };
  },
});
