import { defineComponent, h } from 'vue';

export const MessageBubble = defineComponent({
  name: 'MessageBubble',
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
        innerHTML: `<path d="M2.25 18.75a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M15 3.75H9a6.75 6.75 0 0 0-4.49 11.79q-.01.105-.01.21a2.25 2.25 0 0 0 3.947 1.478q.274.021.553.022h6a6.75 6.75 0 0 0 0-13.5"/>`,
      }, children);
    };
  },
});
