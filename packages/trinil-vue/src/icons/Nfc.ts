import { defineComponent, h } from 'vue';

export const Nfc = defineComponent({
  name: 'Nfc',
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
          innerHTML: `<path d="M7 8a5.657 5.657 0 0 1 0 8m6-14c5.523 5.523 5.523 14.477 0 20M11 4c4.418 4.418 4.418 11.582 0 16M9 6a8.485 8.485 0 0 1 0 12"/>`,
        },
        children,
      );
    };
  },
});
