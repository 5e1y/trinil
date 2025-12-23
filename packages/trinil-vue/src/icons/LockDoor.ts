import { defineComponent, h } from 'vue';

export const LockDoor = defineComponent({
  name: 'LockDoor',
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
        innerHTML: `<path d="M14 12h-2m5 1.1V4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6m3-7.9q.485-.1 1-.1a5 5 0 1 1-4 8m3-7.9a5.002 5.002 0 0 0-3 7.9m2.5-3.5v-1a1.5 1.5 0 0 1 3 0v1m-3 0h3m-3 0a.5.5 0 0 0-.5.5v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1a.5.5 0 0 0-.5-.5"/>`,
      }, children);
    };
  },
});
