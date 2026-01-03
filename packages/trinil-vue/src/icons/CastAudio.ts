import { defineComponent, h } from 'vue';

export const CastAudio = defineComponent({
  name: 'CastAudio',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M14.652 14.652a3.75 3.75 0 1 0-5.303 0m9.545 4.242A9.72 9.72 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.72 9.72 0 0 0 2.856 6.894m11.667-2.121a6.75 6.75 0 1 0-9.546 0M7.5 21l4.5-4.5 4.5 4.5z"/>`,
      }, children);
    };
  },
});
