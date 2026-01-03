import { defineComponent, h } from 'vue';

export const Stomach = defineComponent({
  name: 'Stomach',
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
        innerHTML: `<path d="m11.271 3-.007 1.036c0 .875.348 1.714.966 2.333.667.666.575 1.78-.275 2.188-1.564.75-2.78 1.12-5.153.995-2.86-.15-5.14 2.487-4.484 5.275l.092.394a4.6 4.6 0 0 0 1.011 1.97c.201.23.334.518.334.823v2.997M15.02 3.001l-.007.391c0 .583.232 1.143.645 1.555.602.602 1.487.784 2.335.86.849.077 2.025.68 2.73 1.7l.265.383c1.208 1.743.97 4.126-.53 5.626-3.235 3.234-7.258 5.136-11.806 5.268-.622.018-1.14.514-1.14 1.136v1.091"/>`,
      }, children);
    };
  },
});
