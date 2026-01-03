import { defineComponent, h } from 'vue';

export const ZoomIn = defineComponent({
  name: 'ZoomIn',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M8.197 15.803A7.5 7.5 0 1 0 18.804 5.196 7.5 7.5 0 0 0 8.196 15.804m0 0L3 21M13.5 6.75v3.75m0 0v3.75m0-3.75h3.75m-3.75 0H9.75"/>`,
      }, children);
    };
  },
});
