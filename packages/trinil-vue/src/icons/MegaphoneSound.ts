import { defineComponent, h } from 'vue';

export const MegaphoneSound = defineComponent({
  name: 'MegaphoneSound',
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
        innerHTML: `<path d="M9 14.25h2.546a1.5 1.5 0 0 1 .832.252l3.977 2.651a.575.575 0 0 0 .895-.479V4.326a.576.576 0 0 0-.895-.48l-3.977 2.652a1.5 1.5 0 0 1-.832.252H5.25a3 3 0 0 0-3 3v1.5a3 3 0 0 0 3 3m3.75 0 1.078 3.956a1.5 1.5 0 0 1-1.153 1.865l-.759.152a1.5 1.5 0 0 1-1.753-1.121L5.25 14.25m3.75 0H5.25m15-3.75h1.5m-1.5-3.75.976-.976m-.976 8.476.976.976"/>`,
      }, children);
    };
  },
});
