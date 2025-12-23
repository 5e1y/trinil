import { defineComponent, h } from 'vue';

export const BedLeveling = defineComponent({
  name: 'BedLeveling',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="M3 15h3m0 0h12M6 15v3m12-3h3m-3 0v3m0 0h2m-2 0h-2M6 18H4m2 0h2m-5-5.5h.5m2 0h1m2 0h1m5 0h1m2 0h1m2 0h.5m-9.5 0h1m-.58-2.607L9.12 6.16A.1.1 0 0 1 9.2 6h5.6a.1.1 0 0 1 .08.16l-2.8 3.733a.1.1 0 0 1-.16 0Z"/>`,
      }, children);
    };
  },
});
