import { defineComponent, h } from 'vue';

export const Megaphone = defineComponent({
  name: 'Megaphone',
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
        innerHTML: `<path d="M11.25 15h4.046a1.5 1.5 0 0 1 .832.252l3.977 2.651a.575.575 0 0 0 .895-.479V3.576a.576.576 0 0 0-.895-.48l-3.977 2.652a1.5 1.5 0 0 1-.832.252H6a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h1.5m3.75 0 1.078 3.956a1.5 1.5 0 0 1-1.153 1.865l-.759.152a1.5 1.5 0 0 1-1.753-1.121L7.5 15m3.75 0H7.5"/>`,
      }, children);
    };
  },
});
