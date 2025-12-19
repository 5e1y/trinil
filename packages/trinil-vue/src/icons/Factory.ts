import { defineComponent, h } from 'vue';

export const Factory = defineComponent({
  name: 'Factory',
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
          innerHTML: `<path d="M3 18.9V4.1a.1.1 0 0 1 .1-.1h2.8a.1.1 0 0 1 .1.1v7.223a.1.1 0 0 0 .151.086l4.723-2.833a.1.1 0 0 1 .15.069l.45 2.702a.1.1 0 0 0 .155.067l4.242-2.828a.1.1 0 0 1 .154.067l.45 2.694a.1.1 0 0 0 .154.067l4.215-2.81a.1.1 0 0 1 .156.083V18.9a.1.1 0 0 1-.1.1H3.1a.1.1 0 0 1-.1-.1Z"/>`,
        },
        children,
      );
    };
  },
});
