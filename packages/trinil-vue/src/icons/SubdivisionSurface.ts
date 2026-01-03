import { defineComponent, h } from 'vue';

export const SubdivisionSurface = defineComponent({
  name: 'SubdivisionSurface',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="m14.25 11.437 3.375-1.968M9.8 11.466 6.5 9.541M12 15v3.375M3 9.223v5.554a3 3 0 0 0 1.488 2.591l6 3.5a3 3 0 0 0 3.024 0l6-3.5A3 3 0 0 0 21 14.777V9.223a3 3 0 0 0-1.488-2.591l-6-3.5a3 3 0 0 0-3.024 0l-6 3.5A3 3 0 0 0 3 9.223"/>`,
      }, children);
    };
  },
});
