import { defineComponent, h } from 'vue';

export const ParticleSystem = defineComponent({
  name: 'ParticleSystem',
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
        innerHTML: `<path d="M6 18V9m0 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0-9a3 3 0 1 1 3-3M6 9a3 3 0 0 0 2.121-.879M9 6h9M9 6a3 3 0 0 1-.879 2.121M18 6a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0m-2.121 9.879a3 3 0 1 0 4.242 4.243 3 3 0 0 0-4.242-4.243m0 0L8.12 8.12"/>`,
      }, children);
    };
  },
});
