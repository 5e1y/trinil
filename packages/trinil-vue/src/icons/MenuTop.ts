import { defineComponent, h } from 'vue';

export const MenuTop = defineComponent({
  name: 'MenuTop',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M2.25 9.75V7.5a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v2.25m-19.5 0v6.75a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V9.75m-19.5 0h19.5"/>`,
      }, children);
    };
  },
});
