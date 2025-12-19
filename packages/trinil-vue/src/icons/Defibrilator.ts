import { defineComponent, h } from 'vue';

export const Defibrilator = defineComponent({
  name: 'Defibrilator',
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
          innerHTML: `<path  stroke-linecap="round" stroke-width="1.5" d="m13.5 9.5-2.858 3.335a.1.1 0 0 0 .075.165h2.566a.1.1 0 0 1 .075.165L10.5 16.5m2.018 3.688c12.872-7.892 8.669-15.61 3.983-15.609-2.576 0-4.045 1.784-4.41 2.289a.113.113 0 0 1-.18 0c-.365-.505-1.835-2.289-4.41-2.289-4.686 0-8.89 7.717 3.984 15.61.311.19.722.19 1.033 0Z"/>`,
        },
        children,
      );
    };
  },
});
