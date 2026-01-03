import { defineComponent, h } from 'vue';

export const AiNetwork = defineComponent({
  name: 'AiNetwork',
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
        innerHTML: `<path d="M14.25 19.5H21m-6.75 0a2.25 2.25 0 0 1-4.5 0m4.5 0A2.25 2.25 0 0 0 12 17.25M9.75 19.5H3m6.75 0A2.25 2.25 0 0 1 12 17.25m0 0v-3m0 0H5.25a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5zm-4.5-3V9m0 0V6.75a1.5 1.5 0 1 1 3 0V9m-3 0h3m0 0v2.25m3 0H15m0 0h1.5m-1.5 0v-6m0 0h-1.5m1.5 0h1.5"/>`,
      }, children);
    };
  },
});
