import { defineComponent, h } from 'vue';

export const SignpostAlt = defineComponent({
  name: 'SignpostAlt',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M12 9.75h5.379a1.5 1.5 0 0 0 1.06-.44l1.5-1.5a1.5 1.5 0 0 0 0-2.12l-1.5-1.5a1.5 1.5 0 0 0-1.06-.44H12m0 6H6.75a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5H12m0 6v3m0-10.5v1.5m0 9h5.25a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5H12m0-6H6.621a1.5 1.5 0 0 0-1.06.44l-1.5 1.5a1.5 1.5 0 0 0 0 2.12l1.5 1.5a1.5 1.5 0 0 0 1.06.44H12m0 0v3"/>`,
      }, children);
    };
  },
});
