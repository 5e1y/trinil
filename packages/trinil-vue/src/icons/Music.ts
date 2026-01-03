import { defineComponent, h } from 'vue';

export const Music = defineComponent({
  name: 'Music',
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
        innerHTML: `<path d="M21 15v2.25A2.25 2.25 0 1 1 18.75 15zm0 0V6.75M7.5 16.5v2.25a2.25 2.25 0 1 1-2.25-2.25zm0 0V8.25m0 0V4.5c4.486 0 8.96-.491 13.34-1.464L21 3v3.75M7.5 8.25c4.486 0 8.96-.491 13.34-1.464L21 6.75"/>`,
      }, children);
    };
  },
});
