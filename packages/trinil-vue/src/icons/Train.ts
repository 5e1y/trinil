import { defineComponent, h } from 'vue';

export const Train = defineComponent({
  name: 'Train',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M2.25 20.25h3m0 0h6m-6 0A2.25 2.25 0 0 1 3 18v-.75m2.25 3A2.25 2.25 0 0 0 7.5 18v-.75m3.75 3h10.5m-10.5 0A2.25 2.25 0 0 0 13.5 18v-.75m-2.25 3A2.25 2.25 0 0 1 9 18v-.75m4.5 0h5.397c1.576 0 2.853-.75 2.853-2.25 0-.552 0-1.5-1.426-2.324L14.889 9.54a15.7 15.7 0 0 0-7.841-2.101H6m7.5 9.812H9m0 0H7.5m0 0H3m0 0h-.75M6 7.438H2.25m3.75 0V3.75m0 0H4.987a3 3 0 0 0-.949.154L2.25 4.5M6 3.75h1.013a3 3 0 0 1 .949.154L9.75 4.5m-7.5 6h5.437a10.5 10.5 0 0 1 5.25 1.407l2.813 1.624H2.25"/>`,
      }, children);
    };
  },
});
