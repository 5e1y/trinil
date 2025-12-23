import { defineComponent, h } from 'vue';

export const AlignMiddle = defineComponent({
  name: 'AlignMiddle',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="M4.5 12H7m0 0h3.5M7 12v6.5a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1V12M7 12V5.5a1 1 0 0 1 1-1h1.5a1 1 0 0 1 1 1V12m0 0h3m0 0H17m-3.5 0v3.5a1 1 0 0 0 1 1H16a1 1 0 0 0 1-1V12m-3.5 0V8.5a1 1 0 0 1 1-1H16a1 1 0 0 1 1 1V12m0 0h2.5"/>`,
      }, children);
    };
  },
});
