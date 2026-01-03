import { defineComponent, h } from 'vue';

export const Bottle = defineComponent({
  name: 'Bottle',
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
        innerHTML: `<path d="m15 5.25 1.81 1.81a1.5 1.5 0 0 1 .44 1.061V9.88a1.5 1.5 0 0 1-.44 1.06 1.5 1.5 0 0 0 0 2.122 1.5 1.5 0 0 1 .44 1.06v6.129a1.5 1.5 0 0 1-1.5 1.5h-7.5a1.5 1.5 0 0 1-1.5-1.5v-6.129c0-.398.158-.779.44-1.06a1.5 1.5 0 0 0 0-2.122 1.5 1.5 0 0 1-.44-1.06V8.12c0-.398.158-.779.44-1.06L9 5.25m6 0v-3H9v3m6 0H9"/>`,
      }, children);
    };
  },
});
