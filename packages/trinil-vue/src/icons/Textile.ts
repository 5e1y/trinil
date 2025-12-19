import { defineComponent, h } from 'vue';

export const Textile = defineComponent({
  name: 'Textile',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M9.5 18c0-1-1-2-3-2s-3 1-3 2m6 0c0 1-1 2-3 2m3-2V8m-3 12c-2 0-3-1-3-2m3 2h13a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-10m-6 10V6c0-1 1-2 3-2s3 1 3 2v2"/>`,
        },
        children,
      );
    };
  },
});
