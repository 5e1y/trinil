import { defineComponent, h } from 'vue';

export const Ambulance = defineComponent({
  name: 'Ambulance',
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
        innerHTML: `<path d="M20.25 18a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0m4.5 0a1.5 1.5 0 0 0 1.5-1.5v-3.335a1.5 1.5 0 0 0-.214-.771l-1.599-2.666A1.5 1.5 0 0 0 18.651 9H15.75m0 9H9m6.75 0V9M9 18a2.25 2.25 0 0 1-4.5 0M9 18a2.25 2.25 0 0 0-4.5 0m0 0h-.75a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5h10.5a1.5 1.5 0 0 1 1.5 1.5V9M7.5 12.75h3v-1.5H12v-3h-1.5v-1.5h-3v1.5H6v3h1.5z"/>`,
      }, children);
    };
  },
});
