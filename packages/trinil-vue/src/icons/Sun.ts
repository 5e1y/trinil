import { defineComponent, h } from 'vue';

export const Sun = defineComponent({
  name: 'Sun',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M12 2.25V4.5m0 17.25V19.5m6.897-14.4-1.591 1.591M5.107 18.89l1.59-1.591m15.06-5.305h-2.25m-17.25 0h2.25m14.4 6.896-1.592-1.59M5.12 5.1l1.59 1.59M7.5 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0"/>`,
      }, children);
    };
  },
});
