import { defineComponent, h } from 'vue';

export const StickyNote = defineComponent({
  name: 'StickyNote',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M10 19.91a1 1 0 0 0 .414.09H19a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8.586a1 1 0 0 0 .09.414M10 19.91a1 1 0 0 1-.293-.203l-5.414-5.414A1 1 0 0 1 4.09 14M10 19.91V15a1 1 0 0 0-1-1H4.09"/>`,
        },
        children,
      );
    };
  },
});
