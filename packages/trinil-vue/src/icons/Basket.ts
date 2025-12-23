import { defineComponent, h } from 'vue';

export const Basket = defineComponent({
  name: 'Basket',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="M7 9H4a1 1 0 0 0-1 1v.115A13 13 0 0 0 3.594 14M7 9h5M7 9v.779A20 20 0 0 0 7.45 14M7 9a4.5 4.5 0 0 1 4.5-4.5h1A4.5 4.5 0 0 1 17 9m0 0h3a1 1 0 0 1 1 1v.115A13 13 0 0 1 20.406 14M17 9h-5m5 0v.779A20 20 0 0 1 16.55 14M7 19.5l-.192-.192A13 13 0 0 1 3.594 14M7 19.5h5m-5 0h1.631c.4 0 .659-.42.48-.777A20 20 0 0 1 7.452 14M12 9v5m2.5 5.5h2.227c.174 0 .341-.07.464-.192A13 13 0 0 0 20.406 14M14.5 19.5H12m2.5 0 .389-.777A20 20 0 0 0 16.549 14M12 19.5V14m0 0h4.55M12 14H7.45m0 0H3.595m12.955 0h3.857"/>`,
      }, children);
    };
  },
});
