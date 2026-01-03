import { defineComponent, h } from 'vue';

export const Truck = defineComponent({
  name: 'Truck',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M20.25 18a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0m4.5 0a1.5 1.5 0 0 0 1.5-1.5v-3.335a1.5 1.5 0 0 0-.214-.771l-1.599-2.666A1.5 1.5 0 0 0 18.651 9H14.25m1.5 9h-1.5M9 18a2.25 2.25 0 0 1-4.5 0M9 18a2.25 2.25 0 0 0-4.5 0M9 18h5.25M4.5 18h-.75a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5V9m0 0v9"/>`,
      }, children);
    };
  },
});
