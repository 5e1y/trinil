import { defineComponent, h } from 'vue';

export const Euro = defineComponent({
  name: 'Euro',
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
        innerHTML: `<path d="M18 7.5v-.375a4.875 4.875 0 1 0-9.75 0V9.75m0 0v4.5m0-4.5H6m2.25 0h6m-6 4.5v2.625a4.875 4.875 0 1 0 9.75 0V16.5m-9.75-2.25H6m2.25 0h6"/>`,
      }, children);
    };
  },
});
