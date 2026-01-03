import { defineComponent, h } from 'vue';

export const MenuLeft = defineComponent({
  name: 'MenuLeft',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M8.25 4.5h-3a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h3m0-15h10.5a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H8.25m0-15v15"/>`,
      }, children);
    };
  },
});
