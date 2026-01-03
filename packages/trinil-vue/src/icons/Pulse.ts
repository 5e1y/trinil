import { defineComponent, h } from 'vue';

export const Pulse = defineComponent({
  name: 'Pulse',
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
        innerHTML: `<path d="M2.25 12H5.7a1.5 1.5 0 0 0 1.409-.987l2.407-6.62a.977.977 0 0 1 1.88.16l2.72 14.96a.899.899 0 0 0 1.768 0l1.142-6.281A1.5 1.5 0 0 1 18.502 12h3.248"/>`,
      }, children);
    };
  },
});
