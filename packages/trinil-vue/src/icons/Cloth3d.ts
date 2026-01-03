import { defineComponent, h } from 'vue';

export const Cloth3d = defineComponent({
  name: 'Cloth3d',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M15.431 13.124h.002c.433.234.746.689.746 1.249a1.27 1.27 0 0 0 1.872 1.119L21.75 13.5 12 8.25 9.19 9.763m6.241 3.361a1.4 1.4 0 0 0-1.342.001q-.39.212-.718.495m2.06-.496L9.19 9.764m4.181 3.856A3.97 3.97 0 0 0 12 16.623v2.127L2.25 13.5v-2.127c0-1.462.802-2.805 2.09-3.498a1.4 1.4 0 0 1 1.35.003l3.5 1.885m4.181 3.857 3.476 1.872"/>`,
      }, children);
    };
  },
});
