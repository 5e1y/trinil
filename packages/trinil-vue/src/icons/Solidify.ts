import { defineComponent, h } from 'vue';

export const Solidify = defineComponent({
  name: 'Solidify',
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
        innerHTML: `<path d="M21.75 10.5 15 6.75 8.113 10.5m13.637 0L15 14.25m6.75-3.75V18L15 21.75m0-7.5L8.113 10.5M15 14.25v7.5M8.113 10.5V18L15 21.75M4.5 2.25 2.638 5.278a2.186 2.186 0 1 0 3.724 0z"/>`,
      }, children);
    };
  },
});
