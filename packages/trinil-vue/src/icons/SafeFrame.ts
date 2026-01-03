import { defineComponent, h } from 'vue';

export const SafeFrame = defineComponent({
  name: 'SafeFrame',
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
        innerHTML: `<path d="M21.75 8.25v-3a1.5 1.5 0 0 0-1.5-1.5H16.5m5.25 12v3a1.5 1.5 0 0 1-1.5 1.5H16.5m-14.25-12v-3a1.5 1.5 0 0 1 1.5-1.5H7.5m0 16.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-3M12 9v3m0 0v3m0-3H9m3 0h3"/>`,
      }, children);
    };
  },
});
