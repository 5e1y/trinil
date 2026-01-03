import { defineComponent, h } from 'vue';

export const VolumeLow = defineComponent({
  name: 'VolumeLow',
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
        innerHTML: `<path d="M17.652 9.348A3.74 3.74 0 0 1 18.75 12c0 1.036-.42 1.973-1.098 2.652M5.25 9.75v4.5a3 3 0 0 0 3 3h1.5l4.5 3V3.75l-4.5 3h-1.5a3 3 0 0 0-3 3"/>`,
      }, children);
    };
  },
});
