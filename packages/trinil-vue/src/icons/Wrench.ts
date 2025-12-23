import { defineComponent, h } from 'vue';

export const Wrench = defineComponent({
  name: 'Wrench',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="M3 7a4 4 0 0 0 4.352 3.985c.343-.03.695.062.938.305l4.42 4.42c.243.243.335.595.305.938Q13 16.822 13 17a4 4 0 0 0 4 4h.293a.5.5 0 0 0 .353-.854L15.54 18.04a.1.1 0 0 1-.026-.095l.471-1.887a.1.1 0 0 1 .073-.073l1.887-.471a.1.1 0 0 1 .095.026l2.106 2.107a.5.5 0 0 0 .854-.354V17a4 4 0 0 0-4.758-3.928A.27.27 0 0 1 16 13l-4.71-4.71c-.243-.243-.335-.595-.305-.938Q11 7.178 11 7a4 4 0 0 0-4-4h-.293a.5.5 0 0 0-.353.854L8.46 5.96a.1.1 0 0 1 .026.095l-.471 1.887a.1.1 0 0 1-.073.073l-1.887.471a.1.1 0 0 1-.095-.026L3.854 6.354A.5.5 0 0 0 3 6.707z"/>`,
      }, children);
    };
  },
});
