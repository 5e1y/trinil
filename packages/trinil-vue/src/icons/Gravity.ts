import { defineComponent, h } from 'vue';

export const Gravity = defineComponent({
  name: 'Gravity',
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
        innerHTML: `<path d="M12 2.25V4.5M15.75 3v2.25M8.25 3v2.25m4.5 10.5h.75v.75a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 3 0m5.25 1.5a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0"/>`,
      }, children);
    };
  },
});
