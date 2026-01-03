import { defineComponent, h } from 'vue';

export const AxisX = defineComponent({
  name: 'AxisX',
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
        innerHTML: `<path d="m7.5 16.5.75-.75m0 0v-1.492m0 1.492L21.75 18m-16.5.75.375-.375M3 21l.375-.375m4.875-9.367V10.5m0-3v-.75m0-3V3m13.5 15-1.104-1.582M21.75 18l-1.565 1.195"/>`,
      }, children);
    };
  },
});
