import { defineComponent, h } from 'vue';

export const Heart = defineComponent({
  name: 'Heart',
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
          innerHTML: `<path d="M16.501 4.58c4.686 0 8.889 7.716-3.983 15.609a1 1 0 0 1-1.033 0c-12.875-7.893-8.67-15.61-3.983-15.61 2.574 0 4.044 1.784 4.41 2.29.042.06.136.06.18 0 .364-.506 1.833-2.29 4.41-2.29Z"/>`,
        },
        children,
      );
    };
  },
});
