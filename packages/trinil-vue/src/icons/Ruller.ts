import { defineComponent, h } from 'vue';

export const Ruller = defineComponent({
  name: 'Ruller',
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
        innerHTML: `<path d="M18.75 20.25h3v-3m-3 3-3-3m3 3h-6m3-3L2.25 3.75v6m13.5 7.5V3.75h6v3m-16.5 13.5h-3v-3m3 3v-1.5m0 1.5H9m0 0v-1.5m0 1.5h3.75m0 0v-1.5m-10.5-9v3.75m0-3.75h1.5m-1.5 3.75v3.75m0-3.75h1.5m-1.5 3.75h1.5m16.5 0h1.5m0 0V13.5m-1.5 0h1.5m0 0V9.75m-1.5 0h1.5m0 0v-3m0 0h-1.5m-13.5 9V13.5L9 15.75z"/>`,
      }, children);
    };
  },
});
