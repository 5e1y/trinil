import { defineComponent, h } from 'vue';

export const Deform = defineComponent({
  name: 'Deform',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M6 11V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m0 14v-1a6 6 0 0 1 6-6h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1C11.373 7 6 12.373 6 19v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1Z"/>`,
        },
        children,
      );
    };
  },
});
