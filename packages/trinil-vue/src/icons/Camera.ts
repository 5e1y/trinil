import { defineComponent, h } from 'vue';

export const Camera = defineComponent({
  name: 'Camera',
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
        innerHTML: `<path d="M20.25 20.25H3.75a1.5 1.5 0 0 1-1.5-1.5V7.5A1.5 1.5 0 0 1 3.75 6h2.379a1.5 1.5 0 0 0 1.06-.44l1.372-1.37a1.5 1.5 0 0 1 1.06-.44h4.758a1.5 1.5 0 0 1 1.06.44l1.372 1.37a1.5 1.5 0 0 0 1.06.44h2.379a1.5 1.5 0 0 1 1.5 1.5v11.25a1.5 1.5 0 0 1-1.5 1.5"/><path d="M12 8.25a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9"/>`,
      }, children);
    };
  },
});
