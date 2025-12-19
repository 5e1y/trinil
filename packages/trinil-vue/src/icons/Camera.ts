import { defineComponent, h } from 'vue';

export const Camera = defineComponent({
  name: 'Camera',
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
          innerHTML: `<path d="M20 19H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2.882c.685 0 1.312-.387 1.618-1s.933-1 1.618-1h3.764c.685 0 1.312.387 1.618 1s.933 1 1.618 1H20a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1Z"/><path d="M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>`,
        },
        children,
      );
    };
  },
});
