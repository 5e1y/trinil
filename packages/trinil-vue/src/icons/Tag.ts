import { defineComponent, h } from 'vue';

export const Tag = defineComponent({
  name: 'Tag',
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
          innerHTML: `<path d="m19.793 13.207-6.586 6.586a1 1 0 0 1-1.414 0l-7.5-7.5A1 1 0 0 1 4 11.586V7a3 3 0 0 1 3-3h4.586a1 1 0 0 1 .707.293l7.5 7.5a1 1 0 0 1 0 1.414ZM8.5 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" clip-rule="evenodd"/><path d="M10 8.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>`,
        },
        children,
      );
    };
  },
});
