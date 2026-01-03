import { defineComponent, h } from 'vue';

export const Signpost = defineComponent({
  name: 'Signpost',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M11.25 5.25h5.379a1.5 1.5 0 0 1 1.06.44l2.25 2.25a1.5 1.5 0 0 1 0 2.12l-2.25 2.25a1.5 1.5 0 0 1-1.06.44H11.25m0-7.5h-6a1.5 1.5 0 0 0-1.5 1.5v4.5a1.5 1.5 0 0 0 1.5 1.5h6m0-7.5v-3m0 10.5v9"/>`,
      }, children);
    };
  },
});
