import { defineComponent, h } from 'vue';

export const AirplaneModeOff = defineComponent({
  name: 'AirplaneModeOff',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M9.75 9.75H6l-.61-.914A3 3 0 0 0 2.895 7.5H2.25L3 11.25l-.75.75.75.75-.75 3.75h.644a3 3 0 0 0 2.497-1.336L6 14.25h3.75l-2.25 7.5h1.295a3 3 0 0 0 2.578-1.465L14.7 14.7M9.75 9.75l-7.5-7.5m7.5 7.5 4.95 4.95m3.937-.563a4.5 4.5 0 0 0 2.181-1.205L21.75 12l-.932-.932a4.5 4.5 0 0 0-3.182-1.318H15l-3.626-6.043A3 3 0 0 0 8.8 2.25H7.5l.321 1.071M14.7 14.7l7.05 7.05"/>`,
      }, children);
    };
  },
});
