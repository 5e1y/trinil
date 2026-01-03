import { defineComponent, h } from 'vue';

export const BoxReturn = defineComponent({
  name: 'BoxReturn',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="m12 12 3.75-2.25M12 12 8.25 9.75M12 12v4.5m3.75-6.75L12 7.5 8.25 9.75m7.5 0v4.5L12 16.5M8.25 9.75v4.5L12 16.5M3 3v4.5m0 0h3.75M3 7.5c1.84-3.221 5.29-5.25 9-5.25 5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"/>`,
      }, children);
    };
  },
});
