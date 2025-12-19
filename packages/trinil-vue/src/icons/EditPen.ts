import { defineComponent, h } from 'vue';

export const EditPen = defineComponent({
  name: 'EditPen',
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
          innerHTML: `<path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5m.293 10.707 8.5-8.5a1 1 0 0 0 0-1.414l-1.586-1.586a1 1 0 0 0-1.414 0l-8.5 8.5a1 1 0 0 0-.293.707V15a1 1 0 0 0 1 1h1.586a1 1 0 0 0 .707-.293Z"/>`,
        },
        children,
      );
    };
  },
});
