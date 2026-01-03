import { defineComponent, h } from 'vue';

export const Route = defineComponent({
  name: 'Route',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M7.5 18.75h10.125a3.375 3.375 0 1 0 0-6.75h-10.5a3.375 3.375 0 1 1 0-6.75h8.625M7.5 18.75a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0m8.25-13.5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"/>`,
      }, children);
    };
  },
});
