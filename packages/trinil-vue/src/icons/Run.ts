import { defineComponent, h } from 'vue';

export const Run = defineComponent({
  name: 'Run',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="m10.5 14.5 3.064 1.149a1 1 0 0 1 .585 1.287l-.961 2.564m-2.688-5-1.424 3.323a1 1 0 0 1-.212.313L6.5 20.5m4-6 2.582-6.174m0 0 .98 3.23a1 1 0 0 0 1.597.478L17 10.917m-3.918-2.59a2.5 2.5 0 1 1 1.837-4.653 2.5 2.5 0 0 1-1.837 4.652Zm0 0-3.168.595a1 1 0 0 0-.648.428L7.833 11.5"/>`,
        },
        children,
      );
    };
  },
});
