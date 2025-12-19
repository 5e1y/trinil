import { defineComponent, h } from 'vue';

export const HourglassEnd = defineComponent({
  name: 'HourglassEnd',
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
          innerHTML: `<path d="M7.225 19h9.184a.365.365 0 0 0 .364-.365.21.21 0 0 0-.123-.19l-1.265-.556a3.04 3.04 0 0 1-1.383-1.218 1.52 1.52 0 0 0-2.38-.293l-.402.402a3.9 3.9 0 0 1-1.699 1l-2.257.645a.364.364 0 0 0-.264.35c0 .124.1.225.225.225Z"/>`,
        },
        children,
      );
    };
  },
});
