import { defineComponent, h } from 'vue';

export const Map = defineComponent({
  name: 'Map',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M8.25 3.75 2.333 6.709a.15.15 0 0 0-.083.134v13.164a.15.15 0 0 0 .217.134L8.25 17.25m0-13.5v13.5m0-13.5 7.5 3m-7.5 10.5 7.5 3m0-13.5 5.783-2.891a.15.15 0 0 1 .217.134v13.164a.15.15 0 0 1-.083.134L15.75 20.25m0-13.5v13.5"/>`,
      }, children);
    };
  },
});
