import { defineComponent, h } from 'vue';

export const Peace = defineComponent({
  name: 'Peace',
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
          innerHTML: `<path d="M12 13 5.156 6.156M12 13l6.844-6.844M12 13v8M5.156 6.156A8.98 8.98 0 0 1 12 3a8.98 8.98 0 0 1 6.844 3.156m-13.688 0A9 9 0 0 0 12 21m6.844-14.844A9 9 0 0 1 12 21"/>`,
        },
        children,
      );
    };
  },
});
