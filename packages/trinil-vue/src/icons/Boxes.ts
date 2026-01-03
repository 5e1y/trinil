import { defineComponent, h } from 'vue';

export const Boxes = defineComponent({
  name: 'Boxes',
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
        innerHTML: `<path d="M16.5 20.25 21 18v-5.25m-4.5 7.5V15m0 5.25L12 18m9-5.25L16.5 15m4.5-2.25-4.5-2.25m0 4.5L12 12.75M12 18v-5.25M12 18l-4.5 2.25m4.5-7.5 4.5-2.25M12 12.75 7.5 15m4.5-2.25L7.5 10.5m4.5 2.25V7.5m4.5 3V5.25m-9 15V15m0 5.25L3 18v-5.25M7.5 15 3 12.75m0 0 4.5-2.25m0 0V5.25m9 0L12 7.5m4.5-2.25L12 3 7.5 5.25M12 7.5 7.5 5.25"/>`,
      }, children);
    };
  },
});
