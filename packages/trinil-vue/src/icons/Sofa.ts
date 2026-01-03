import { defineComponent, h } from 'vue';

export const Sofa = defineComponent({
  name: 'Sofa',
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
        innerHTML: `<path d="M6 17.25h12m-12 0V13.5m0 3.75H3.75m14.25 0V13.5m0 3.75h2.25M6 13.5V9.75a1.5 1.5 0 0 0-1.5-1.5M6 13.5h12m0 0V9.75a1.5 1.5 0 0 1 1.5-1.5m-15.75 9v1.5m0-1.5a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h.75m15.75 9v1.5m0-1.5a1.5 1.5 0 0 0 1.5-1.5v-6a1.5 1.5 0 0 0-1.5-1.5h-.75m0 0v-1.5a1.5 1.5 0 0 0-1.5-1.5H6a1.5 1.5 0 0 0-1.5 1.5v1.5"/>`,
      }, children);
    };
  },
});
