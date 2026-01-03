import { defineComponent, h } from 'vue';

export const Hdri = defineComponent({
  name: 'Hdri',
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
        innerHTML: `<path d="M21 16.5c0 2.9-4.029 5.25-9 5.25-4.97 0-9-2.35-9-5.25m18 0c0-2.286-2.503-4.23-5.998-4.951M21 16.5a9 9 0 0 0-18 0m0 0c0-2.286 2.504-4.23 6-4.951m3-7.799v-1.5m5.249 3 .75-1.5M6.75 5.25 6 3.75m-3 4.5-.75-.75M21 8.25l.75-.75"/>`,
      }, children);
    };
  },
});
