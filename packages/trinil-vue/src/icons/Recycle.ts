import { defineComponent, h } from 'vue';

export const Recycle = defineComponent({
  name: 'Recycle',
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
        innerHTML: `<path d="m20.625 15.375.72 1.198a1.437 1.437 0 0 1-1.233 2.177H9.75m.375-14.625.74-1.232a1.325 1.325 0 0 1 2.27 0l5.24 8.732M5.25 18.75H3.888a1.437 1.437 0 0 1-1.232-2.177l5.219-8.698M9.75 18.75l3-3m-3 3 3 3m5.625-10.125L19.5 7.5m-1.125 4.125L14.25 10.5M7.875 7.875 9 12M7.875 7.875 3.75 9"/>`,
      }, children);
    };
  },
});
