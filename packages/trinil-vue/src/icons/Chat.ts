import { defineComponent, h } from 'vue';

export const Chat = defineComponent({
  name: 'Chat',
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
        innerHTML: `<path d="M16.5 13.5A4.5 4.5 0 0 0 12 9H7.756m8.744 4.5q0 .43-.078.84A4.5 4.5 0 0 1 12 18H9a7.5 7.5 0 0 1-6 3l.448-.673A6.26 6.26 0 0 0 4.5 16.854 4.5 4.5 0 0 1 7.5 9h.256m8.744 4.5c1.302 1.011 2.815 1.5 4.5 1.5l-.448-.673a6.26 6.26 0 0 1-1.052-3.473A4.5 4.5 0 0 0 16.5 3H12a4.5 4.5 0 0 0-4.244 6"/>`,
      }, children);
    };
  },
});
