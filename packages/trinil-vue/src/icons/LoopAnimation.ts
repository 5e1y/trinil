import { defineComponent, h } from 'vue';

export const LoopAnimation = defineComponent({
  name: 'LoopAnimation',
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
          innerHTML: `<path d="M7.23 18.423A8 8 0 1 1 12 20m-4.77-1.577L3 18.5m4.23-.077V14M11 10.75v2.5M9 11.5v1m6.4 1.25h-2.3a.1.1 0 0 1-.1-.1v-3.3a.1.1 0 0 1 .1-.1h2.3a.1.1 0 0 1 .1.1v3.3a.1.1 0 0 1-.1.1Z"/>`,
        },
        children,
      );
    };
  },
});
