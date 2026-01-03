import { defineComponent, h } from 'vue';

export const Wrench = defineComponent({
  name: 'Wrench',
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
        innerHTML: `<path d="M8.03 5.03 6 3s3-1.5 5.25.75S12 9 12 9l9.129 9.128a2.121 2.121 0 0 1-3 3L9 12s-3 1.5-5.25-.75S3 6 3 6l2.03 2.03c.141.14.332.22.53.22H7.5a.75.75 0 0 0 .75-.75V5.56a.75.75 0 0 0-.22-.53"/>`,
      }, children);
    };
  },
});
