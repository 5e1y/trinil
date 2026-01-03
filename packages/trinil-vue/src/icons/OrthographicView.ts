import { defineComponent, h } from 'vue';

export const OrthographicView = defineComponent({
  name: 'OrthographicView',
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
        innerHTML: `<path d="M9 21H4.5A1.5 1.5 0 0 1 3 19.5V15m6 6v-6m0 6h6M9 3H4.5A1.5 1.5 0 0 0 3 4.5V9m6-6v6m0-6h6M9 15V9m0 6h6m-6 0H3m6-6H3m6 0h6m0-6h4.5A1.5 1.5 0 0 1 21 4.5V9m-6-6v6m0 12h4.5a1.5 1.5 0 0 0 1.5-1.5V15m-6 6v-6m0-6v6m0-6h6m-6 6h6m0 0V9M3 15V9"/>`,
      }, children);
    };
  },
});
