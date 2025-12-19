import { defineComponent, h } from 'vue';

export const Scissors = defineComponent({
  name: 'Scissors',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M19.5 4.5 9.121 14.879m0 0a3 3 0 1 0-4.243 4.243 3 3 0 0 0 4.243-4.243ZM19.5 19.5 9.121 9.121m0 0a3 3 0 1 0-4.243-4.243 3 3 0 0 0 4.243 4.243Z"/>`,
        },
        children,
      );
    };
  },
});
