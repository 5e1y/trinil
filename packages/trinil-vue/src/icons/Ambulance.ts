import { defineComponent, h } from 'vue';

export const Ambulance = defineComponent({
  name: 'Ambulance',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="M9.5 17.25a1.75 1.75 0 1 1-3.5 0m3.5 0a1.75 1.75 0 1 0-3.5 0m3.5 0h7m-10.5 0H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1.4a.1.1 0 0 0 .1.1h2.41a1 1 0 0 1 .79.386l2.99 3.843a1 1 0 0 1 .21.614v3.907a1 1 0 0 1-1 1H20m0 0a1.75 1.75 0 1 1-3.5 0m3.5 0a1.75 1.75 0 1 0-3.5 0M8.1 7.5h2.3a.1.1 0 0 1 .1.1v1.3a.1.1 0 0 0 .1.1h1.3a.1.1 0 0 1 .1.1v2.3a.1.1 0 0 1-.1.1h-1.3a.1.1 0 0 0-.1.1v1.3a.1.1 0 0 1-.1.1H8.1a.1.1 0 0 1-.1-.1v-1.3a.1.1 0 0 0-.1-.1H6.6a.1.1 0 0 1-.1-.1V9.1a.1.1 0 0 1 .1-.1h1.3a.1.1 0 0 0 .1-.1V7.6a.1.1 0 0 1 .1-.1Z"/>`,
      }, children);
    };
  },
});
