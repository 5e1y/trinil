import { defineComponent, h } from 'vue';

export const Key = defineComponent({
  name: 'Key',
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
        innerHTML: `<path d="M15 11.5V15m0-3.5h2.5m-2.5 0h-5m7.5 0V14m0-2.5H20m0 0h1.5m-1.5 0V15m-10-3.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z"/>`,
      }, children);
    };
  },
});
