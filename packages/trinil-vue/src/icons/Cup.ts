import { defineComponent, h } from 'vue';

export const Cup = defineComponent({
  name: 'Cup',
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
          innerHTML: `<path d="M7.117 3h9.766a1 1 0 0 1 .994 1.11l-1.778 16a1 1 0 0 1-.994.89h-6.21a1 1 0 0 1-.994-.89l-1.778-16A1 1 0 0 1 7.117 3Z"/>`,
        },
        children,
      );
    };
  },
});
