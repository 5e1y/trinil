import { defineComponent, h } from 'vue';

export const Store = defineComponent({
  name: 'Store',
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
          innerHTML: `<path d="M15.125 8.5c0 1.519 1.606 3 3.125 3q.392-.001.75-.104M15.125 8.5c0 1.519-1.606 3-3.125 3s-3.125-1.481-3.125-3m6.25 0-.145-.257A7.64 7.64 0 0 1 14 4.5m-5.125 4c0 1.519-1.606 3-3.125 3q-.392-.001-.75-.104M8.875 8.5l.144-.257A7.64 7.64 0 0 0 10 4.5m9 6.897a2.75 2.75 0 0 0 2-2.647.63.63 0 0 0-.174-.43 7 7 0 0 1-1.742-3.4.52.52 0 0 0-.512-.42H14m5 6.897V18.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.103m0 0A2.75 2.75 0 0 1 3 8.75c0-.16.065-.313.174-.43a7 7 0 0 0 1.742-3.4.52.52 0 0 1 .512-.42H10m4 0h-4"/>`,
        },
        children,
      );
    };
  },
});
