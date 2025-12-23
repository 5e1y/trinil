import { defineComponent, h } from 'vue';

export const Vpn = defineComponent({
  name: 'Vpn',
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
        innerHTML: `<path d="M18 9a6 6 0 0 0-6-6m6 6a6 6 0 0 1-6 6m6-6h-3.666M12 3a6 6 0 0 0-6 6m6-6a8.86 8.86 0 0 1 2.334 6M12 3a8.86 8.86 0 0 0-2.334 6M12 15a6 6 0 0 1-6-6m6 6a8.86 8.86 0 0 0 2.334-6M12 15a8.86 8.86 0 0 1-2.334-6M12 15v2M6 9h3.666m4.668 0H9.666M10 19a2 2 0 1 0 4 0m-4 0a2 2 0 0 1 2-2m-2 2H4m10 0a2 2 0 0 0-2-2m2 2h6"/>`,
      }, children);
    };
  },
});
