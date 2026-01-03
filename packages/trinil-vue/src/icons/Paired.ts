import { defineComponent, h } from 'vue';

export const Paired = defineComponent({
  name: 'Paired',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M4.5 10.516A4.875 4.875 0 0 0 7.125 19.5h4.5a4.875 4.875 0 1 0 0-9.75h-.375m1.5 4.5h-.375A4.876 4.876 0 0 1 7.5 9.375 4.875 4.875 0 0 1 12.375 4.5h4.5a4.875 4.875 0 0 1 2.625 8.984"/>`,
      }, children);
    };
  },
});
