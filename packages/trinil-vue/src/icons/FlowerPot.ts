import { defineComponent, h } from 'vue';

export const FlowerPot = defineComponent({
  name: 'FlowerPot',
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
        innerHTML: `<path d="M12 14.25H6.75l.75 1.5a5 5 0 0 0 0 6h9a5 5 0 0 0 0-6l.75-1.5zm0 0V9m0 0a2.25 2.25 0 1 1-2.25-2.25M12 9a2.25 2.25 0 1 0 2.25-2.25M12 9a2.25 2.25 0 0 1-2.25-2.25M12 9a2.25 2.25 0 0 0 2.25-2.25M12 4.5a2.25 2.25 0 1 0-2.25 2.25M12 4.5a2.25 2.25 0 1 1 2.25 2.25M12 4.5a2.25 2.25 0 0 0-2.25 2.25M12 4.5a2.25 2.25 0 0 1 2.25 2.25"/>`,
      }, children);
    };
  },
});
