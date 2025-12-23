import { defineComponent, h } from 'vue';

export const CameraRangefinder = defineComponent({
  name: 'CameraRangefinder',
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
        innerHTML: `<path d="M21 9v8.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h5a1 1 0 0 0 1-1 1 1 0 0 1 1-1h5M21 9V6.5a1 1 0 0 0-1-1h-4M21 9h-4.9a.1.1 0 0 1-.1-.1V5.5m-8.5 0H4m8.25 11a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5Z"/>`,
      }, children);
    };
  },
});
