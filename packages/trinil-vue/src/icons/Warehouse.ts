import { defineComponent, h } from 'vue';

export const Warehouse = defineComponent({
  name: 'Warehouse',
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
        innerHTML: `<path d="M6 20.25H3.75a1.5 1.5 0 0 1-1.5-1.5V9.21a1.5 1.5 0 0 1 .871-1.362l8.25-3.808a1.5 1.5 0 0 1 1.258 0l8.25 3.808a1.5 1.5 0 0 1 .871 1.362v9.54a1.5 1.5 0 0 1-1.5 1.5H18m-12 0v-4.5m0 4.5h4.5m7.5 0v-9H6v4.5m12 4.5h-3.75M6 15.75h4.5v.75m0 3.75V16.5m0 3.75h3.75M10.5 16.5h3.75v3.75m-4.5-12h4.5"/>`,
      }, children);
    };
  },
});
