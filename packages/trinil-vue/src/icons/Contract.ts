import { defineComponent, h } from 'vue';

export const Contract = defineComponent({
  name: 'Contract',
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
        innerHTML: `<path d="M7.5 9.75H9M7.5 13.5h9M7.5 6H9m.75 12.75s-.299-.976.75-1.5c1.5-.75 2.25 1.5 2.25 1.5s.499-.75 1.5-.75c.944 0 1.5.75 1.5.75.45-.65.765-.93 1.5-1.226m3-7.774v10.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V3.75a1.5 1.5 0 0 1 1.5-1.5h7.5m7.5 7.5h-6a1.5 1.5 0 0 1-1.5-1.5v-6m7.5 7.5-7.5-7.5"/>`,
      }, children);
    };
  },
});
