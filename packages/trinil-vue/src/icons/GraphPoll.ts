import { defineComponent, h } from 'vue';

export const GraphPoll = defineComponent({
  name: 'GraphPoll',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M3 4.5V18a1 1 0 0 0 1 1h3m0 0h4m-4 0v-6.9a.1.1 0 0 1 .1-.1h3.8a.1.1 0 0 1 .1.1V19m0 0h3m0 0h4m-4 0V7.1a.1.1 0 0 1 .1-.1h3.8a.1.1 0 0 1 .1.1V19m3.5 0H18"/>`,
        },
        children,
      );
    };
  },
});
