import { defineComponent, h } from 'vue';

export const Elevator = defineComponent({
  name: 'Elevator',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M15.75 6v12m0-12L13.5 8.25M15.75 6 18 8.25M15.75 18 18 15.75M15.75 18l-2.25-2.25m-5.25-3a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5m0 0A2.25 2.25 0 0 0 6 15v.75m2.25-3A2.25 2.25 0 0 1 10.5 15v.75M21 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-15A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5"/>`,
      }, children);
    };
  },
});
