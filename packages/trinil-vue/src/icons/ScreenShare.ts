import { defineComponent, h } from 'vue';

export const ScreenShare = defineComponent({
  name: 'ScreenShare',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M12 8.25 8.25 12M12 8.25 15.75 12M12 8.25v7.5m9.75-8.25v9a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3"/>`,
      }, children);
    };
  },
});
