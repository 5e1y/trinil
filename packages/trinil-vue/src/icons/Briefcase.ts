import { defineComponent, h } from 'vue';

export const Briefcase = defineComponent({
  name: 'Briefcase',
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
        innerHTML: `<path d="M6.75 6.75h-3a1.5 1.5 0 0 0-1.5 1.5V12m4.5-5.25.746-1.864A3 3 0 0 1 10.28 3h3.438a3 3 0 0 1 2.785 1.886l.746 1.864m-10.5 0h10.5m0 0h3a1.5 1.5 0 0 1 1.5 1.5V12m-8.25.75V12a1.5 1.5 0 0 0-3 0v.75m3 0v.75a1.5 1.5 0 0 1-3 0v-.75m3 0 8.25-.75m0 0v6.75a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V12m8.25.75L2.25 12"/>`,
      }, children);
    };
  },
});
