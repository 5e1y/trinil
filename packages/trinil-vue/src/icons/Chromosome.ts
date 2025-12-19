import { defineComponent, h } from 'vue';

export const Chromosome = defineComponent({
  name: 'Chromosome',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="M17 6v.665c0 1.495-.594 2.929-1.651 3.986l-.067.067a.4.4 0 0 0 0 .564A5.86 5.86 0 0 1 17 15.43V16m0-10V4.75a1.75 1.75 0 0 0-3.5 0V6M17 6h-3.5m0 0v1.5a1.5 1.5 0 0 1-3 0V4.75a1.75 1.75 0 1 0-3.5 0v1.915c0 1.495.594 2.929 1.651 3.986l.067.067a.4.4 0 0 1 0 .564A5.86 5.86 0 0 0 7 15.43v3.821a1.75 1.75 0 1 0 3.5 0V14.5a1.5 1.5 0 0 1 3 0V16m3.5 0h-3.5m3.5 0v2m-3.5-2v2m3.5 0v1.25a1.75 1.75 0 1 1-3.5 0V18m3.5 0h-3.5"/>`,
        },
        children,
      );
    };
  },
});
