import { defineComponent, h } from 'vue';

export const Denoise = defineComponent({
  name: 'Denoise',
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
        innerHTML: `<path d="M5.106 18.894A9.72 9.72 0 0 0 12 21.75c5.385 0 9.75-4.365 9.75-9.75a9.72 9.72 0 0 0-2.856-6.894M5.106 18.894A9.72 9.72 0 0 1 2.25 12c0-5.385 4.365-9.75 9.75-9.75a9.72 9.72 0 0 1 6.894 2.856M5.106 18.894 3 21m2.106-2.106L18.894 5.106m0 0L21 3m-4.5 9 .75.75m1.5-3 .75.75m-5.25 3.75L15 15m-3 1.5.75.75m-3 1.5.75.75m7.5-3.75.75.75m-3 1.5.75.75m-3 1.5.75.75m6-7.5.75.75"/>`,
      }, children);
    };
  },
});
