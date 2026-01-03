import { defineComponent, h } from 'vue';

export const Location = defineComponent({
  name: 'Location',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M17.602 16.54 12 21.75l-5.602-5.21C.914 11.44 4.517 2.25 12 2.25s11.086 9.19 5.602 14.29"/><path stroke-miterlimit="1.788" d="M8.256 10.5A3.747 3.747 0 0 0 12 14.25a3.747 3.747 0 0 0 3.744-3.75A3.747 3.747 0 0 0 12 6.75a3.747 3.747 0 0 0-3.744 3.75"/>`,
      }, children);
    };
  },
});
