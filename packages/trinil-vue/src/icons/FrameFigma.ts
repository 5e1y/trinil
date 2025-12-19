import { defineComponent, h } from 'vue';

export const FrameFigma = defineComponent({
  name: 'FrameFigma',
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
          innerHTML: `<path d="M9.5 5H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5.5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM20 7h-5.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1H20a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Z"/>`,
        },
        children,
      );
    };
  },
});
