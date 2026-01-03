import { defineComponent, h } from 'vue';

export const Navigation = defineComponent({
  name: 'Navigation',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="m3.847 19.692 6.765-16.495c.51-1.241 2.267-1.241 2.776 0L20.151 19.7c.521 1.273-.803 2.518-2.042 1.919l-5.456-2.64a1.5 1.5 0 0 0-1.305-.001l-5.461 2.635c-1.24.598-2.562-.648-2.04-1.92"/>`,
      }, children);
    };
  },
});
