import { defineComponent, h } from 'vue';

export const Physics = defineComponent({
  name: 'Physics',
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
          innerHTML: `<path d="M21 12a9 9 0 1 1-3.78-7.333m0 0a1.5 1.5 0 1 0 2.289 1.938 1.5 1.5 0 0 0-2.29-1.939ZM14.12 14.12A3 3 0 1 1 9.88 9.88a3 3 0 0 1 4.242 4.242Z"/>`,
        },
        children,
      );
    };
  },
});
