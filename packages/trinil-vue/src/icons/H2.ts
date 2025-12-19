import { defineComponent, h } from 'vue';

export const H2 = defineComponent({
  name: 'H2',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M5 4v8m0 0v7.5M5 12h9m0 0V4m0 8v7.5m6 0h-2.9c-.055 0-.1-.045-.095-.1a.93.93 0 0 1 .413-.674l2.029-1.331A1.32 1.32 0 0 0 18.68 15h-.18a1.5 1.5 0 0 0-1.5 1.5"/>`,
        },
        children,
      );
    };
  },
});
