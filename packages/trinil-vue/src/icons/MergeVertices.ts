import { defineComponent, h } from 'vue';

export const MergeVertices = defineComponent({
  name: 'MergeVertices',
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
        innerHTML: `<path d="M20.25 20.25 16.5 16.5m0 0h3m-3 0v3M3.75 3.75 7.5 7.5m0 0h-3m3 0v-3m5.91 1.591a2.25 2.25 0 1 1 3.182-3.182 2.25 2.25 0 0 1-3.183 3.182m0 0L6.09 13.409m11.818-2.818a2.25 2.25 0 1 1 3.182-3.182 2.25 2.25 0 0 1-3.182 3.182m0 0-7.318 7.318m-4.5-4.5a2.25 2.25 0 1 1-3.182 3.182 2.25 2.25 0 0 1 3.182-3.182m4.5 4.5a2.25 2.25 0 1 1-3.182 3.182 2.25 2.25 0 0 1 3.182-3.182"/>`,
      }, children);
    };
  },
});
