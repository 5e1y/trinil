import { defineComponent, h } from 'vue';

export const Shield = defineComponent({
  name: 'Shield',
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
        innerHTML: `<path d="M19 4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v8.065a9 9 0 0 0 5.455 8.273l1.151.493a1 1 0 0 0 .788 0l1.151-.493A9 9 0 0 0 19 12.065z"/>`,
      }, children);
    };
  },
});
