import { defineComponent, h } from 'vue';

export const Contrast = defineComponent({
  name: 'Contrast',
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
        innerHTML: `<path d="M19.036 5.25a9.72 9.72 0 0 0-7.036-3c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75a9.72 9.72 0 0 0 7.036-3m0-13.5H12m7.036 0a9.73 9.73 0 0 1 2.453 4.5m0 0c.17.722.261 1.476.261 2.25s-.09 1.528-.26 2.25m0-4.5H12m9.49 4.5H12m9.49 0a9.73 9.73 0 0 1-2.454 4.5m0 0H12"/>`,
      }, children);
    };
  },
});
