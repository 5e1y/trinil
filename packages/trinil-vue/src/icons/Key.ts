import { defineComponent, h } from 'vue';

export const Key = defineComponent({
  name: 'Key',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M2.25 16.5a5.25 5.25 0 0 1 7.147-4.897L18.75 2.25 21 4.5 19.5 6l2.25 2.25-2.25 2.25-2.25-2.25-5.364 5.364A5.25 5.25 0 1 1 2.25 16.5"/>`,
      }, children);
    };
  },
});
