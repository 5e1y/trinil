import { defineComponent, h } from 'vue';

export const Stand = defineComponent({
  name: 'Stand',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M12 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0 0V15m0-6.5 1.868 3.27a1 1 0 0 1 .132.496V14.5m-2-6-1.868 3.27a1 1 0 0 0-.132.496V14.5m2 .5-.949 2.846a1 1 0 0 0-.051.316V21.5m1-6.5.949 2.846a1 1 0 0 1 .051.316V21.5"/>`,
        },
        children,
      );
    };
  },
});
