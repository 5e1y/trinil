import { defineComponent, h } from 'vue';

export const Equalizer = defineComponent({
  name: 'Equalizer',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M16.5 6h1.724c.34 0 .67.116.937.329l1.875 1.5a1.5 1.5 0 0 1 0 2.342l-1.875 1.5a1.5 1.5 0 0 1-.937.329H16.5m0-6h-.75a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h.75m0-6V3.75m0 8.25v8.25M4.5 12h1.724c.34 0 .67.116.937.329l1.875 1.5a1.5 1.5 0 0 1 0 2.342l-1.875 1.5a1.5 1.5 0 0 1-.937.329H4.5m0-6h-.75a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h.75m0-6V3.75M4.5 18v2.25M7.5 9H9M7.5 5.25H9m10.5 13.5H21M19.5 15H21"/>`,
      }, children);
    };
  },
});
