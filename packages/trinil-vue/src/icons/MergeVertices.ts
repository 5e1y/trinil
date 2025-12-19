import { defineComponent, h } from 'vue';

export const MergeVertices = defineComponent({
  name: 'MergeVertices',
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
          innerHTML: `<path d="M14.475 5.99a1.5 1.5 0 1 0 2.121-2.122 1.5 1.5 0 0 0-2.121 2.121Zm0 0L5.99 14.474m0 0a1.5 1.5 0 1 1-2.12 2.12 1.5 1.5 0 0 1 2.12-2.12Zm12.02-4.95a1.5 1.5 0 1 0 2.122-2.121 1.5 1.5 0 0 0-2.122 2.12Zm0 0L9.525 18.01m0 0a1.5 1.5 0 1 1-2.119 2.121 1.5 1.5 0 0 1 2.12-2.12ZM20.5 20.5 16 16m0 0h3m-3 0v3M3.5 3.5 8 8m0 0V5m0 3H5"/>`,
        },
        children,
      );
    };
  },
});
