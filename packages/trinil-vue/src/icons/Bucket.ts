import { defineComponent, h } from 'vue';

export const Bucket = defineComponent({
  name: 'Bucket',
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
        innerHTML: `<path d="M9 12.75s-.153-2.147.025-4.5M9 12.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5m.025-4.5c.217-2.85.92-6 2.975-6 2.054 0 2.758 3.15 2.975 6m-5.95 0H5.521a1.5 1.5 0 0 0-1.48 1.747l1.75 10.5a1.5 1.5 0 0 0 1.48 1.253h9.458a1.5 1.5 0 0 0 1.48-1.253l1.75-10.5a1.5 1.5 0 0 0-1.48-1.747h-3.504m-5.95 0h5.95"/>`,
      }, children);
    };
  },
});
