import { defineComponent, h } from 'vue';

export const Bevel = defineComponent({
  name: 'Bevel',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M3 10.5v4.389a1.5 1.5 0 0 0 .744 1.295l7.5 4.375a1.5 1.5 0 0 0 .756.204M3 10.5l9 5.25M3 10.5l3.368-3.75M12 20.764c.261 0 .522-.069.756-.205l7.5-4.375A1.5 1.5 0 0 0 21 14.888V10.5m-9 10.264V15.75m0 0 9-5.25m-9 5.25v-5.723m9 .473-3.368-3.75M12 10.027l5.632-3.277M12 10.027 6.368 6.75m11.264 0L12 3.473 6.368 6.75"/>`,
      }, children);
    };
  },
});
