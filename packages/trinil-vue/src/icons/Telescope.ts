import { defineComponent, h } from 'vue';

export const Telescope = defineComponent({
  name: 'Telescope',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="m7.5 11-.293-.293a1 1 0 0 1 0-1.415l5.586-5.586a1 1 0 0 1 1.414 0l3.086 3.086a1 1 0 0 1 0 1.414L14.5 11m-7 0 2.5 2.5M7.5 11l-2.293 2.293a1 1 0 0 0 0 1.414l1.086 1.086a1 1 0 0 0 1.414 0L10 13.499m0 0 .5.5a.707.707 0 0 0 1 0m0 0 .5.5q.202.203.44.338M11.5 14l3-3m0 0 .5.5a2.12 2.12 0 0 1-.439 3.337m0 0 3.44 6.323m-3.44-6.323c-.327.19-.694.284-1.06.284m0 0V21.5m0-6.379c-.368 0-.735-.095-1.062-.284m0 0L9 21.16"/>`,
        },
        children,
      );
    };
  },
});
