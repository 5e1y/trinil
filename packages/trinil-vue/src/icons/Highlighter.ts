import { defineComponent, h } from 'vue';

export const Highlighter = defineComponent({
  name: 'Highlighter',
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
        innerHTML: `<path d="M20.25 2.25v7.5a3 3 0 0 1-3 3M3.75 2.25v7.5a3 3 0 0 0 3 3m10.5 0v5.355a1.5 1.5 0 0 1-1.088 1.442l-7.5 2.143a1.5 1.5 0 0 1-1.912-1.442V12.75m10.5 0H6.75"/>`,
      }, children);
    };
  },
});
