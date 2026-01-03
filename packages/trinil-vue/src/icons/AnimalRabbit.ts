import { defineComponent, h } from 'vue';

export const AnimalRabbit = defineComponent({
  name: 'AnimalRabbit',
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
        innerHTML: `<path d="M18.75 18a6 6 0 0 0-6-6h-4.5m10.5 6v2.25m0-2.25.284-.284a1.591 1.591 0 0 1 2.716 1.125v.568a1.591 1.591 0 0 1-2.716 1.125l-.284-.284M8.25 10.5h-4.5m4.5 0V6a3 3 0 0 1 3-3v4.5a3 3 0 0 1-3 3m0 0V12m-4.5-1.5V6a3 3 0 0 1 3-3v4.5a3 3 0 0 1-3 3m0 0v3.531M8.25 12v2.25a2.25 2.25 0 0 1-4.5 0v-.219m0 0A5.98 5.98 0 0 0 2.25 18v3h3m13.5-.75V21h-7.5m0 0v-.75A2.25 2.25 0 0 1 13.5 18H15m-3.75 3h-3m-3 0v-1.5m0 1.5h3m0 0v-1.5"/>`,
      }, children);
    };
  },
});
