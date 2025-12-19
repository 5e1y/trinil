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
          innerHTML: `<path d="M11.793 19.793a1 1 0 0 0 1.414 0l6.586-6.586a1 1 0 0 0 0-1.414l-7.5-7.5A1 1 0 0 0 11.586 4H7a3 3 0 0 0-3 3v4.586a1 1 0 0 0 .293.707z"/>`,
        },
        children,
      );
    };
  },
});
