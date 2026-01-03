import { defineComponent, h } from 'vue';

export const WifiOff = defineComponent({
  name: 'WifiOff',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M22.076 8.674A14.2 14.2 0 0 0 12 4.5q-1.406.002-2.737.263m-7.34 3.91a14.3 14.3 0 0 1 3.955-2.795m2.41 9.16A5.23 5.23 0 0 1 12 13.5c.642 0 1.258.115 1.826.326m-8.72-1.97A9.74 9.74 0 0 1 9.36 9.36m9.533 2.495a9.73 9.73 0 0 0-5.257-2.72M2.25 2.25l3.628 3.628M21.75 21.75l-7.924-7.924M5.878 5.878l3.483 3.483m0 0 4.465 4.465M12.75 18.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"/>`,
      }, children);
    };
  },
});
