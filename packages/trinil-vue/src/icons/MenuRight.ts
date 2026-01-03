import { defineComponent, h } from 'vue';

export const MenuRight = defineComponent({
  name: 'MenuRight',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M15.75 4.5h3a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-3m0-15H5.25a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h10.5m0-15v15"/>`,
      }, children);
    };
  },
});
