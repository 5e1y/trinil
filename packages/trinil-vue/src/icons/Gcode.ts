import { defineComponent, h } from 'vue';

export const Gcode = defineComponent({
  name: 'Gcode',
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
        innerHTML: `<path d="M20.25 9.75h-6a1.5 1.5 0 0 1-1.5-1.5v-6m7.5 7.5-7.5-7.5m7.5 7.5v3m-7.5-10.5h-7.5a1.5 1.5 0 0 0-1.5 1.5v9m6.75 3.75-3 3 3 3m3 0 3-6m3 0 3 3-3 3M3.75 20.25h.75V21a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 3 0"/>`,
      }, children);
    };
  },
});
