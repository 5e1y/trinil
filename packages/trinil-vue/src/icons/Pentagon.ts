import { defineComponent, h } from 'vue';

export const Pentagon = defineComponent({
  name: 'Pentagon',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="m3.096 9.1 7.99-6.146a1.5 1.5 0 0 1 1.829 0l7.989 6.145a1.5 1.5 0 0 1 .509 1.663l-3.071 9.212A1.5 1.5 0 0 1 16.919 21H7.08a1.5 1.5 0 0 1-1.423-1.026l-3.07-9.211a1.5 1.5 0 0 1 .508-1.664"/>`,
      }, children);
    };
  },
});
