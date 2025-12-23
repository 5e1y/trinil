import { defineComponent, h } from 'vue';

export const ToiletPaper = defineComponent({
  name: 'ToiletPaper',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="M7 16c1.38 0 2.5-2.686 2.5-6S8.38 4 7 4m0 12c-1.38 0-2.5-2.686-2.5-6M7 16h10.5m-13-6c0-3.314 1.12-6 2.5-6m-2.5 6v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-3M7 4h10.5c1.38 0 2.5 2.686 2.5 6s-1.12 6-2.5 6m-10-6c0 .828-.224 1.5-.5 1.5s-.5-.672-.5-1.5.224-1.5.5-1.5.5.672.5 1.5Z"/>`,
      }, children);
    };
  },
});
