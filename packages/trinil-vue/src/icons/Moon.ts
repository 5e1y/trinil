import { defineComponent, h } from 'vue';

export const Moon = defineComponent({
  name: 'Moon',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M10.5 21.75c5.385 0 9.75-4.365 9.75-9.75s-4.365-9.75-9.75-9.75a9.7 9.7 0 0 0-5.778 1.896c-.478.352-.065 1.104.528 1.104a6.75 6.75 0 1 1 0 13.5c-.593 0-1.006.752-.528 1.104A9.7 9.7 0 0 0 10.5 21.75"/>`,
      }, children);
    };
  },
});
