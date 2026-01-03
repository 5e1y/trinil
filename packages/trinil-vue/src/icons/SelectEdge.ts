import { defineComponent, h } from 'vue';

export const SelectEdge = defineComponent({
  name: 'SelectEdge',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M3.75 7.063 3 7.5m0 0v.75m0-.75 1.5.875m3-3.5-.75.438m3.75-2.188L12 2.25l1.5.875M3 11.25V12m0 3v1.5l1.5.875M21 15v1.5l-1.5.875M21 12v-.75m0-3V7.5m0 0-.75-.437M21 7.5l-1.5.875m-2.25-3.062-.75-.438m-.75 14.688.75-.438m-9 0 .75.438m5.25-8.313v9a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 1 3 0"/>`,
      }, children);
    };
  },
});
