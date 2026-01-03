import { defineComponent, h } from 'vue';

export const TestTube = defineComponent({
  name: 'TestTube',
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
        innerHTML: `<path d="M16.5 17.25a4.5 4.5 0 1 1-9 0V6.089c0-.552-.128-1.096-.375-1.589a3.55 3.55 0 0 1-.375-1.589V2.25h10.5v.661c0 .552-.128 1.096-.375 1.589a3.55 3.55 0 0 0-.375 1.589V9.75m0 7.5h-3m3 0V13.5m0 0h-3m3 0V9.75m0 0h-3"/>`,
      }, children);
    };
  },
});
