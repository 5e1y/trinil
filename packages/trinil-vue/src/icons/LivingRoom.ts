import { defineComponent, h } from 'vue';

export const LivingRoom = defineComponent({
  name: 'LivingRoom',
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
        innerHTML: `<path d="M5.25 20.25V9.75m0 0h3L7.092 6.276A1.5 1.5 0 0 0 5.669 5.25H4.83a1.5 1.5 0 0 0-1.423 1.026L2.25 9.75zm15 4.5a1.5 1.5 0 0 0-1.5 1.5v1.5H12v-1.5a1.5 1.5 0 0 0-1.5-1.5m9.75 0a1.5 1.5 0 0 1 1.5 1.5v4.5H9v-4.5a1.5 1.5 0 0 1 1.5-1.5m9.75 0v-1.5a1.5 1.5 0 0 0-1.5-1.5H12a1.5 1.5 0 0 0-1.5 1.5v1.5m2.25-10.5v4.5h7.5v-4.5z"/>`,
      }, children);
    };
  },
});
