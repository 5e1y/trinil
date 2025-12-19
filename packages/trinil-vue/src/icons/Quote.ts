import { defineComponent, h } from 'vue';

export const Quote = defineComponent({
  name: 'Quote',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M10 7c0 9-5.5 13-5.5 13M10 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm10 0c0 9-5.5 13-5.5 13M20 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"/>`,
        },
        children,
      );
    };
  },
});
