import { defineComponent, h } from 'vue';

export const Bus = defineComponent({
  name: 'Bus',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M21.75 11.25v-4.5a1.5 1.5 0 0 0-1.5-1.5h-1.5m0 0v12a1.5 1.5 0 0 1-1.5 1.5h-1.5m3-13.5a1.5 1.5 0 0 0-1.5-1.5h-15m13.5 15v-12h-4.5m4.5 12h-4.5m0-12v12m0-12v6h-9m9-6h-9m9 12H9.622m0 0a2.25 2.25 0 0 1-4.244 0m4.244 0q.126-.354.128-.75a2.25 2.25 0 1 0-4.372.75m0 0H2.25"/>`,
      }, children);
    };
  },
});
