import { defineComponent, h } from 'vue';

export const WindowsLogo = defineComponent({
  name: 'WindowsLogo',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M3 12V18a1.5 1.5 0 0 0 1.345 1.492l6.905.717M3 12V5.999a1.5 1.5 0 0 1 1.345-1.492l6.905-.717M3 12h8.25M21 12V4.44a1.5 1.5 0 0 0-1.655-1.492l-8.095.84M21 12v7.56a1.5 1.5 0 0 1-1.655 1.492l-8.095-.84M21 12h-9.75m0 0V3.79m0 8.21v8.21"/>`,
      }, children);
    };
  },
});
