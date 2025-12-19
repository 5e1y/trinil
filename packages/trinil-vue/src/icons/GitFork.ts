import { defineComponent, h } from 'vue';

export const GitFork = defineComponent({
  name: 'GitFork',
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
          innerHTML: `<path d="M12 17v-3m0 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-3a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2V7m-5 7a2 2 0 0 0-2-2H9a2 2 0 0 1-2-2V7m10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>`,
        },
        children,
      );
    };
  },
});
