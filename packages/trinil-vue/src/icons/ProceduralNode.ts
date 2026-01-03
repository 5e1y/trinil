import { defineComponent, h } from 'vue';

export const ProceduralNode = defineComponent({
  name: 'ProceduralNode',
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
        innerHTML: `<path d="m7.381 17.724 2.488-3.198M7.38 17.724a2.25 2.25 0 1 1-2.763 3.552 2.25 2.25 0 0 1 2.763-3.552m2.488-3.198a2.246 2.246 0 0 1-.395-3.157m.395 3.157a2.25 2.25 0 1 0-.395-3.157m0 0L6.276 8.88m0 0a2.25 2.25 0 1 1 .388-2m-.388 2a2.24 2.24 0 0 0 .388-2m0 0 6.172-1.763m0 0A2.252 2.252 0 0 1 15 2.25a2.25 2.25 0 0 1 .886 4.319m-3.05-1.45a2.25 2.25 0 0 0 3.05 1.45m0 0 2.727 6.362m0 0a2.25 2.25 0 1 0 1.775 4.137 2.25 2.25 0 0 0-1.775-4.137"/>`,
      }, children);
    };
  },
});
