import { defineComponent, h } from 'vue';

export const Heart = defineComponent({
  name: 'Heart',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M12.696 20.054c2.23-1.351 9.054-5.898 9.054-10.975 0-6.605-7.72-6.821-9.582-2.021-.055.142-.281.142-.336 0-1.862-4.8-9.582-4.585-9.582 2.02 0 5.078 6.823 9.625 9.054 10.976.432.262.96.262 1.392 0"/>`,
      }, children);
    };
  },
});
