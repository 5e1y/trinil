import { defineComponent, h } from 'vue';

export const Bone = defineComponent({
  name: 'Bone',
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
        innerHTML: `<path d="M18.719 5.281q.199-.03.406-.031a2.625 2.625 0 1 1-1.856 4.481L9.73 17.27a2.625 2.625 0 1 1-4.45 1.45M18.72 5.28q.03-.198.031-.406a2.625 2.625 0 1 0-4.481 1.856L6.73 14.27a2.625 2.625 0 1 0-1.45 4.45M18.72 5.28a2.63 2.63 0 0 0-1.775 1.132M5.281 18.72a2.63 2.63 0 0 0 1.775-1.132"/>`,
      }, children);
    };
  },
});
