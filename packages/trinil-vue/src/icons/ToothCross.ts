import { defineComponent, h } from 'vue';

export const ToothCross = defineComponent({
  name: 'ToothCross',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M13.663 2.705c2.842-1.57 6.041 1.266 5.27 4.673l-1.197 3.654-.073.226m-4-8.553a3.4 3.4 0 0 1-3.326 0c-2.842-1.57-6.042 1.266-5.27 4.673l1.003 4.439c.437 1.448.988 5.582.988 5.582l.21 3.408c.11 1.273 1.776 1.316 1.94.05.212-1.639 1.16-3.969 1.954-5.373a.97.97 0 0 1 .804-.513m1.697-12.266c-1.047.578-3.147 2.262-3.147 4.821M15.75 22.5l3.375-3.375m0 0L22.5 15.75m-3.375 3.375L22.5 22.5m-3.375-3.375L15.75 15.75"/>`,
      }, children);
    };
  },
});
