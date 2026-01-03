import { defineComponent, h } from 'vue';

export const Credit = defineComponent({
  name: 'Credit',
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
        innerHTML: `<path d="M3 3v4.5m0 0h4.5M3 7.5c1.84-3.221 5.29-5.25 9-5.25 5.385 0 9.75 4.365 9.75 9.75m-5.25 4.5H21m0 0V21m0-4.5c-1.84 3.221-5.29 5.25-9 5.25-5.385 0-9.75-4.365-9.75-9.75m9-1.5h-1.5m0 0H9m.75 0v-.75a2.25 2.25 0 0 1 4.5 0v.75m-4.5 0v3m1.5 0h-1.5m0 0H9m.75 0v.75a2.25 2.25 0 0 0 4.5 0v-.75"/>`,
      }, children);
    };
  },
});
