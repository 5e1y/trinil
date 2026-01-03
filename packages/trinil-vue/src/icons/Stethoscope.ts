import { defineComponent, h } from 'vue';

export const Stethoscope = defineComponent({
  name: 'Stethoscope',
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
        innerHTML: `<path d="m9.75 5.25 1.8-1.35a.75.75 0 0 1 1.2.6v6c0 2.9-2.35 5.25-5.25 5.25M5.25 5.25 3.45 3.9a.75.75 0 0 0-1.2.6v6c0 2.9 2.35 5.25 5.25 5.25m0 0c-.75 4.5 10.5 9 12-4.5m0 0a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5"/>`,
      }, children);
    };
  },
});
