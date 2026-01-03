import { defineComponent, h } from 'vue';

export const Extrude = defineComponent({
  name: 'Extrude',
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
        innerHTML: `<path d="m12 6.75 6.75 3.75M12 6.75 5.113 10.5M12 6.75v3.75m0-3.75v-4.5m6.75 8.25L12 14.25m6.75-3.75V18L12 21.75m0-7.5L5.113 10.5M12 14.25v7.5M5.113 10.5V18L12 21.75m0-19.5 2.25 2.25M12 2.25 9.75 4.5"/>`,
      }, children);
    };
  },
});
