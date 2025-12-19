import { defineComponent, h } from 'vue';

export const FolderMinus = defineComponent({
  name: 'FolderMinus',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M21 14V8.5a1 1 0 0 0-1-1h-7.654A1.99 1.99 0 0 1 10.5 6.25 1.99 1.99 0 0 0 8.654 5H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9.1m7.9-5a4.98 4.98 0 0 0-3-1m3 1c1.214.912 2 2.364 2 4m-9.9 1a5 5 0 0 0 4.9 4m-4.9-4a5 5 0 0 1-.1-1m10 0a5 5 0 0 1-5 5m5-5a5 5 0 0 0-5-5m0 10a5 5 0 0 1-5-5m0 0a5 5 0 0 1 5-5m-2.5 5h5"/>`,
        },
        children,
      );
    };
  },
});
