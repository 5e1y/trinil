import { defineComponent, h } from 'vue';

export const PerspectiveView = defineComponent({
  name: 'PerspectiveView',
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
        innerHTML: `<path d="M9 19.5H3.992a1.5 1.5 0 0 1-1.484-1.723l.53-3.527M9 19.5l.262-5.25M9 19.5h6m-5.25-15H5.792a1.5 1.5 0 0 0-1.484 1.277L3.825 9M9.75 4.5 9.525 9m.225-4.5h4.5m-4.988 9.75L9.525 9m-.263 5.25H3.037m6.225 0h5.476M9.525 9h-5.7m5.7 0h4.95m-.225-4.5h3.958a1.5 1.5 0 0 1 1.484 1.277L20.175 9M14.25 4.5l.225 4.5M15 19.5h5.008a1.5 1.5 0 0 0 1.484-1.723l-.53-3.527M15 19.5l-.262-5.25M14.475 9l.263 5.25M14.475 9h5.7m-5.437 5.25h6.224m-17.925 0L3.825 9m17.138 5.25L20.175 9"/>`,
      }, children);
    };
  },
});
