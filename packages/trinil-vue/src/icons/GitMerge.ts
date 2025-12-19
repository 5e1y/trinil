import { defineComponent, h } from 'vue';

export const GitMerge = defineComponent({
  name: 'GitMerge',
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
          innerHTML: `<path d="M7 7v3m0-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 3v7m0-7a2 2 0 0 0 2 2h6a2 2 0 0 1 2 2v3m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM7 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/>`,
        },
        children,
      );
    };
  },
});
