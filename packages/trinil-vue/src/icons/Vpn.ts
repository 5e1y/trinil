import { defineComponent, h } from 'vue';

export const Vpn = defineComponent({
  name: 'Vpn',
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
        innerHTML: `<path d="M14.25 19.5H21m-6.75 0A2.25 2.25 0 0 0 12 17.25m2.25 2.25a2.25 2.25 0 0 1-4.5 0m0 0H3m6.75 0A2.25 2.25 0 0 1 12 17.25m0 0v-3m0 0a6 6 0 0 0 6-6m-6 6a6 6 0 0 1-6-6m6 6c1.243 0 2.25-2.686 2.25-6m-2.25 6c-1.243 0-2.25-2.686-2.25-6m8.25 0a6 6 0 0 0-6-6m6 6h-3.75m-2.25-6a6 6 0 0 0-6 6m6-6c1.243 0 2.25 2.686 2.25 6m-2.25-6c-1.243 0-2.25 2.686-2.25 6M6 8.25h3.75m4.5 0h-4.5"/>`,
      }, children);
    };
  },
});
