import { defineComponent, h } from 'vue';

export const Roughness = defineComponent({
  name: 'Roughness',
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
        innerHTML: `<path d="M18.894 18.894 12 12m6.894 6.894a9.75 9.75 0 0 0 2.315-3.685m-2.315 3.685a9.75 9.75 0 0 1-3.685 2.315m6-6c.35-1.005.541-2.085.541-3.209 0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12s4.365 9.75 9.75 9.75c1.124 0 2.204-.19 3.21-.54m6-6L15 9m.21 12.21L9 15"/>`,
      }, children);
    };
  },
});
