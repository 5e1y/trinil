import { defineComponent, h } from 'vue';

export const Eraser = defineComponent({
  name: 'Eraser',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: Number, default: 1.5 },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': props.strokeWidth, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="m17.25 17.25 4.19-4.19a1.5 1.5 0 0 0 0-2.12l-7.61-7.61a1.5 1.5 0 0 0-2.14.018L7.606 7.606m9.644 9.644-2.56 2.56a1.5 1.5 0 0 1-1.061.44H6.312a1.5 1.5 0 0 1-1.06-.44l-1.685-1.683a4.5 4.5 0 0 1-.055-6.308l4.094-4.214m9.644 9.645L7.606 7.606"/>`,
      }, children);
    };
  },
});
