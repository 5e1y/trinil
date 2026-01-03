import { defineComponent, h } from 'vue';

export const ForceField = defineComponent({
  name: 'ForceField',
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
        innerHTML: `<path d="M9.699 20.25A9.74 9.74 0 0 0 14.25 12a9.74 9.74 0 0 0-4.551-8.25M2.25 17.564a6 6 0 1 0 0-11.128M15.187 20.25A13.44 13.44 0 0 0 18 12c0-3.107-1.05-5.969-2.813-8.25m4.466 16.5A17.2 17.2 0 0 0 21.75 12c0-2.988-.76-5.8-2.097-8.25M6.75 12a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0"/>`,
      }, children);
    };
  },
});
