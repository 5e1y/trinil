import { defineComponent, h } from 'vue';

export const Coffee = defineComponent({
  name: 'Coffee',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="m17.684 9 .306-1.454A.453.453 0 0 0 17.547 7H3.453a.453.453 0 0 0-.443.546l1.489 7.072A3 3 0 0 0 7.434 17h6.522c1.191 0 2.22-.834 2.465-2m1.263-6H18a3 3 0 1 1 0 6h-1.579m1.263-6-1.263 6"/>`,
        },
        children,
      );
    };
  },
});
