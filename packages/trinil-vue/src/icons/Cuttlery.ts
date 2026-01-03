import { defineComponent, h } from 'vue';

export const Cuttlery = defineComponent({
  name: 'Cuttlery',
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
        innerHTML: `<path d="M2.25 3.75v4.5a1.5 1.5 0 0 0 1.5 1.5m1.5-6v4.5a1.5 1.5 0 0 1-1.5 1.5m0 0v10.5m18-6V3.75a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5m0 0v6m-4.5-7.125a4.875 4.875 0 1 0-9.75 0 4.875 4.875 0 0 0 9.75 0"/>`,
      }, children);
    };
  },
});
