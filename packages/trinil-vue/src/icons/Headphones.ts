import { defineComponent, h } from 'vue';

export const Headphones = defineComponent({
  name: 'Headphones',
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
        innerHTML: `<path d="M20.049 13.5a2.386 2.386 0 0 1 1.513 3.004l-.973 2.978a2.372 2.372 0 1 1-4.508-1.473l.981-3.005A2.36 2.36 0 0 1 20.05 13.5m0 0C21.456 8.25 18.75 3 12 3S2.544 8.25 3.951 13.5m0 0a2.386 2.386 0 0 0-1.513 3.004l.973 2.978A2.372 2.372 0 0 0 7.92 18.01l-.982-3.005A2.36 2.36 0 0 0 3.95 13.5"/>`,
      }, children);
    };
  },
});
