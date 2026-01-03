import { defineComponent, h } from 'vue';

export const Epipen = defineComponent({
  name: 'Epipen',
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
        innerHTML: `<path d="M10.5 18 9 19.5a3.18 3.18 0 0 1-4.5 0m6-1.5L6 13.5m4.5 4.5a1.06 1.06 0 0 0 1.5 0l1.5-1.5m-7.5-3L4.5 15a3.18 3.18 0 0 0 0 4.5m1.5-6-.75-.75L15.44 2.56a1.5 1.5 0 0 1 2.12 0l3.88 3.88a1.5 1.5 0 0 1 0 2.12L18 12M4.5 19.5l-2.25 2.25M13.5 16.5l-2.25-2.25m2.25 2.25 2.25-2.25m0 0L13.5 12m2.25 2.25L18 12m0 0-2.25-2.25"/>`,
      }, children);
    };
  },
});
