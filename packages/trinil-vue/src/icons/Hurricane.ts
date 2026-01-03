import { defineComponent, h } from 'vue';

export const Hurricane = defineComponent({
  name: 'Hurricane',
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
        innerHTML: `<path d="M18.75 12A6.75 6.75 0 0 0 12 5.25M18.75 12A6.75 6.75 0 0 1 12 18.75M18.75 12s.75 9.75-13.5 9.75M12 5.25A6.75 6.75 0 0 0 5.25 12M12 5.25s9.75-.75 9.75 13.5m-9.75 0A6.75 6.75 0 0 1 5.25 12M12 18.75s-9.75.75-9.75-13.5m3 6.75s-.75-9.75 13.5-9.75m-6 9.75a.75.75 0 0 0-.664-.745m.664.745a1 1 0 0 1-.005.086M12.75 12q.001.002-.005.086m-.659-.831A1 1 0 0 0 12 11.25m.086.005q-.084-.006-.086-.005m0 0a.75.75 0 0 0-.745.664m.745.836a.75.75 0 0 0 .745-.664M12 12.75a1 1 0 0 1-.086-.005m.086.005q-.002.001-.086-.005M11.25 12c0 .385.29.703.664.745M11.25 12a1 1 0 0 1 .005-.086M11.25 12s0-.031.005-.086"/>`,
      }, children);
    };
  },
});
