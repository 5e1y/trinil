import { defineComponent, h } from 'vue';

export const Capsule = defineComponent({
  name: 'Capsule',
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
        innerHTML: `<path d="m8.25 8.25-4.5 4.5a5.303 5.303 0 1 0 7.5 7.5l4.5-4.5m-7.5-7.5 4.5-4.5a5.303 5.303 0 1 1 7.5 7.5l-4.5 4.5m-7.5-7.5 7.5 7.5"/>`,
      }, children);
    };
  },
});
