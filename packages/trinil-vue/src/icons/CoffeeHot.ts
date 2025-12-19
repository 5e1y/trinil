import { defineComponent, h } from 'vue';

export const CoffeeHot = defineComponent({
  name: 'CoffeeHot',
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
          innerHTML: `<path d="m17.684 12 .306-1.454a.453.453 0 0 0-.443-.546H3.453a.453.453 0 0 0-.443.546l1.489 7.072A3 3 0 0 0 7.434 20h6.522c1.191 0 2.22-.835 2.465-2m1.263-6H18a3 3 0 1 1 0 6h-1.579m1.263-6-1.263 6M4.364 3.756l.536.376c.3.21.436.544.415.868-.02.304-.18.599-.474.776a.98.98 0 0 0-.477.848c.002.28.122.561.367.757l.584.47m5 0-.584-.47a.98.98 0 0 1 .11-1.605.97.97 0 0 0 .474-.776.97.97 0 0 0-.415-.868l-.536-.376m5.95 4.095-.583-.47a.97.97 0 0 1-.367-.757.98.98 0 0 1 .477-.848.97.97 0 0 0 .474-.776.97.97 0 0 0-.415-.868l-.536-.376"/>`,
        },
        children,
      );
    };
  },
});
