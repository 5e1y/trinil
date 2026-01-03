import { defineComponent, h } from 'vue';

export const CameraRangefinder = defineComponent({
  name: 'CameraRangefinder',
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
        innerHTML: `<path d="M3 4.5h3m10.5 0h5.25v3.75M16.5 4.5H9v3H3.75A1.5 1.5 0 0 0 2.25 9v9a1.5 1.5 0 0 0 1.5 1.5h16.5a1.5 1.5 0 0 0 1.5-1.5V8.25M16.5 4.5v3.75h5.25M9 13.125a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0"/>`,
      }, children);
    };
  },
});
