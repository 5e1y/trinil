import { defineComponent, h } from 'vue';

export const SnapGrid = defineComponent({
  name: 'SnapGrid',
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
        innerHTML: `<path d="M2.25 17.25v4.5h4.5m-4.5-4.5v-4.5h4.5m-4.5 4.5h4.5m4.5 0v-4.5h-4.5m4.5 4.5v4.5h-4.5m4.5-4.5h-4.5m0 0v-4.5m0 4.5v4.5M16.875 9.375 14.25 12l2.625 2.625L19.5 12m-2.625-2.625a1.591 1.591 0 0 0-2.25-2.25m2.25 2.25L19.5 12m-4.875-4.875L12 9.75 9.375 7.125 12 4.5m2.625 2.625L12 4.5m7.5 7.5.697-.697a5.303 5.303 0 1 0-7.5-7.5L12 4.5"/>`,
      }, children);
    };
  },
});
