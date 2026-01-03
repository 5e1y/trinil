import { defineComponent, h } from 'vue';

export const Cylinder = defineComponent({
  name: 'Cylinder',
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
        innerHTML: `<path d="M21 7.5c0-2.9-4.03-5.25-9-5.25S3 4.6 3 7.5m18 0c0 2.9-4.03 5.25-9 5.25S3 10.4 3 7.5m18 0v9c0 2.9-4.03 5.25-9 5.25S3 19.4 3 16.5v-9"/>`,
      }, children);
    };
  },
});
