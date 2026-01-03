import { defineComponent, h } from 'vue';

export const BedLeveling = defineComponent({
  name: 'BedLeveling',
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
        innerHTML: `<path d="M2.25 13.5H3m3 0h.75m3 0h.75m3 0h.75m3 0H18m3 0h.75m-19.5 3.75H6m0 0h12m-12 0v3m12-3h3.75m-3.75 0v3m-12 0h2.25m-2.25 0H3.75m14.25 0h2.25m-2.25 0h-2.25M12 9.75l3.75-6h-7.5z"/>`,
      }, children);
    };
  },
});
