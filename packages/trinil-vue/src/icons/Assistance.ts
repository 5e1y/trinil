import { defineComponent, h } from 'vue';

export const Assistance = defineComponent({
  name: 'Assistance',
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
        innerHTML: `<path d="M12 14H9a5 5 0 0 0-5 5v1a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1a5 5 0 0 0-5-5zm0 0a4.5 4.5 0 0 1-4.244-3M12 14a4.5 4.5 0 1 0-4.244-3m0 0H6.5a1 1 0 0 1-1-1v-.5a6.5 6.5 0 1 1 13 0v2M7.756 11H11"/>`,
      }, children);
    };
  },
});
