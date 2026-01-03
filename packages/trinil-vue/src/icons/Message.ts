import { defineComponent, h } from 'vue';

export const Message = defineComponent({
  name: 'Message',
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
        innerHTML: `<path d="M15 3.75H9a6.75 6.75 0 0 0-2.58 12.99 3.97 3.97 0 0 1-1.11 3.45l-.06.06a7.5 7.5 0 0 0 6-3H15a6.75 6.75 0 0 0 0-13.5"/>`,
      }, children);
    };
  },
});
