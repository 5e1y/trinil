import { defineComponent, h } from 'vue';

export const Hexagon = defineComponent({
  name: 'Hexagon',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="m3.744 7.066 7.5-4.375a1.5 1.5 0 0 1 1.512 0l7.5 4.375A1.5 1.5 0 0 1 21 8.362v7.277a1.5 1.5 0 0 1-.744 1.295l-7.5 4.375a1.5 1.5 0 0 1-1.512 0l-7.5-4.375A1.5 1.5 0 0 1 3 15.638V8.363a1.5 1.5 0 0 1 .744-1.296"/>`,
      }, children);
    };
  },
});
