import { defineComponent, h } from 'vue';

export const Shader = defineComponent({
  name: 'Shader',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M12.382 21.743q-.19.007-.382.007c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25s9.75 4.365 9.75 9.75q0 .192-.007.382M6 12a6 6 0 0 1 6-6m6.374 14.85a2.475 2.475 0 0 1 0-4.95m0 4.95a2.475 2.475 0 0 0 0-4.95m0 4.95v1.65m0-6.6v-1.65m4.134 4.117h-1.65m-4.95 0h-1.65m7.047 2.92-1.167-1.168m-3.5-3.5-1.167-1.166m0 5.845 1.167-1.167m3.5-3.5 1.167-1.167"/>`,
      }, children);
    };
  },
});
