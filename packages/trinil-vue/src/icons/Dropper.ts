import { defineComponent, h } from 'vue';

export const Dropper = defineComponent({
  name: 'Dropper',
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
        innerHTML: `<path d="m9 18-6 3 3-6 6-6-.164-.491a3 3 0 0 1 .725-3.07l2.325-2.325a3 3 0 0 1 4.243 0l1.757 1.758a3 3 0 0 1 0 4.242L18.56 11.44a3 3 0 0 1-3.07.725L15 12l-1.5 1.5M9 18l-.75-.75M9 18l2.25-2.25m0 0L10.5 15m.75.75 2.25-2.25m0 0-.75-.75"/>`,
      }, children);
    };
  },
});
