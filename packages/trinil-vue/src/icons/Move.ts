import { defineComponent, h } from 'vue';

export const Move = defineComponent({
  name: 'Move',
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
        innerHTML: `<path d="M16 12h4.5m0 0-2-2m2 2-2 2M12 8V3.5m0 0 2 2m-2-2-2 2M8 12H3.5m0 0 2 2m-2-2 2-2m6.5 6v4.5m0 0 2-2m-2 2-2-2m3.5-6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>`,
      }, children);
    };
  },
});
