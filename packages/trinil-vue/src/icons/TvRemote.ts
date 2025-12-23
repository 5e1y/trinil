import { defineComponent, h } from 'vue';

export const TvRemote = defineComponent({
  name: 'TvRemote',
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
        innerHTML: `<path d="M12 6.5V8m0 0v1.5M12 8h-1.5M12 8h1.5m-3 4.5v.5m3-.5v.5m-3 3v.5m3-.5v.5m-6-11.7v11.7a4.5 4.5 0 1 0 9 0V4.8A1.8 1.8 0 0 0 14.7 3H9.3a1.8 1.8 0 0 0-1.8 1.8Z"/>`,
      }, children);
    };
  },
});
