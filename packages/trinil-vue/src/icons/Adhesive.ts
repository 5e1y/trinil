import { defineComponent, h } from 'vue';

export const Adhesive = defineComponent({
  name: 'Adhesive',
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
          innerHTML: `<path d="M15 9.5c0 1.38-2.686 2.5-6 2.5s-6-1.12-6-2.5m12 0C15 8.12 12.314 7 9 7m6 2.5v5M9 7C5.686 7 3 8.12 3 9.5M9 7h10.698a1 1 0 0 1 .967 1.258l-1.467 5.5a1 1 0 0 1-.966.742H15m-12-5v5C3 15.88 5.686 17 9 17s6-1.12 6-2.5M9 10c.828 0 1.5-.224 1.5-.5S9.828 9 9 9s-1.5.224-1.5.5.672.5 1.5.5Z"/>`,
        },
        children,
      );
    };
  },
});
