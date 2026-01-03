import { defineComponent, h } from 'vue';

export const PlantPot = defineComponent({
  name: 'PlantPot',
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
        innerHTML: `<path d="M12 14.25H6.75l.75 1.5a5 5 0 0 0 0 6h9a5 5 0 0 0 0-6l.75-1.5zm0 0v-4.5m0 0c2.877 2.057 6.838-.23 6.495-3.75a4.05 4.05 0 0 0-4.1-.4M12 9.75C9.123 11.807 5.162 9.52 5.505 6a4.05 4.05 0 0 1 4.1-.4M12 9.75c-1.752-.796-2.55-2.514-2.396-4.15M12 9.75c-.186-1.916.902-3.466 2.396-4.15m-4.792 0A4.05 4.05 0 0 1 12 2.25a4.05 4.05 0 0 1 2.396 3.35"/>`,
      }, children);
    };
  },
});
