import { defineComponent, h } from 'vue';

export const Peace = defineComponent({
  name: 'Peace',
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
        innerHTML: `<path d="M12 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.776.475-3.442 1.305-4.876M12 21.75c5.385 0 9.75-4.365 9.75-9.75a9.7 9.7 0 0 0-1.305-4.876M12 21.75V12m8.445-4.876A9.75 9.75 0 0 0 12 2.25a9.75 9.75 0 0 0-8.445 4.874m16.89 0L12 12m0 0L3.555 7.124"/>`,
      }, children);
    };
  },
});
