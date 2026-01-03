import { defineComponent, h } from 'vue';

export const GitPull = defineComponent({
  name: 'GitPull',
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
        innerHTML: `<path d="M5.25 16.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5m0 0v-9m0 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5m13.5 9V8.25a3 3 0 0 0-3-3H10.5m8.25 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M10.5 5.25l3-3m-3 3 3 3"/>`,
      }, children);
    };
  },
});
