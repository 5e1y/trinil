import { defineComponent, h } from 'vue';

export const LightPoint = defineComponent({
  name: 'LightPoint',
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
        innerHTML: `<path d="M21.75 12h-4.5m-10.5 0h-4.5m9.758 9.758v-4.5m0-10.5v-4.5M18.9 18.896l-3.182-3.182M8.293 8.29 5.11 5.108m0 13.799 3.182-3.182M15.718 8.3 18.9 5.118M14.25 12a2.25 2.25 0 1 0-4.5 0 2.25 2.25 0 0 0 4.5 0"/>`,
      }, children);
    };
  },
});
