import { defineComponent, h } from 'vue';

export const Dislike = defineComponent({
  name: 'Dislike',
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
        innerHTML: `<path d="M16.437 14.25h3.75a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5h-3.75m0 10.5L9.687 21l-.72-.721a3 3 0 0 1-.563-3.463l1.283-2.566h-6c-.828 0-1.507-.673-1.431-1.498a16.4 16.4 0 0 1 2.983-8.024l.25-.35a1.5 1.5 0 0 1 1.22-.628h9.728m0 10.5V3.75"/>`,
      }, children);
    };
  },
});
