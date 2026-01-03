import { defineComponent, h } from 'vue';

export const Motorbike = defineComponent({
  name: 'Motorbike',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M2.25 10.5h3m0 0h2.823c1.028 0 1.967-.58 2.427-1.5s1.4-1.5 2.427-1.5h.263a3.14 3.14 0 0 1 2.717 1.566l.998 1.723M5.25 10.5c1.657 0 3.157.672 4.243 1.757M15.75 4.5a6 6 0 0 1 6 6v.803a6 6 0 0 0-3-.803c-.644 0-1.264.101-1.845.29m0 0a6 6 0 0 0-4.155 5.71h-1.5a5.98 5.98 0 0 0-1.757-4.243M18.75 9v7.5m-13.5 0 4.243-4.243M15.75 16.5a3 3 0 1 0 6 0 3 3 0 0 0-6 0m-13.5 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0"/>`,
      }, children);
    };
  },
});
