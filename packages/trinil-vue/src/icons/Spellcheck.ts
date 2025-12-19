import { defineComponent, h } from 'vue';

export const Spellcheck = defineComponent({
  name: 'Spellcheck',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="m7.667 13 3.017-9.051a1.388 1.388 0 0 1 2.632 0L16.333 13m-8.666 0h8.666m-8.666 0-1.5 4.5M16.333 13l1.5 4.5m2.581 2.586L20 20.5a1.414 1.414 0 0 1-2 0 1.41 1.41 0 0 0-2 0 1.414 1.414 0 0 1-2 0 1.414 1.414 0 0 0-2 0 1.414 1.414 0 0 1-2 0 1.414 1.414 0 0 0-2 0 1.4 1.4 0 0 1-1 .414 1.4 1.4 0 0 1-1-.414 1.414 1.414 0 0 0-2 0l-.414.414"/>`,
        },
        children,
      );
    };
  },
});
