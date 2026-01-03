import { defineComponent, h } from 'vue';

export const Nfc = defineComponent({
  name: 'Nfc',
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
        innerHTML: `<path d="M13.088 2.25A13.46 13.46 0 0 1 17.25 12c0 3.833-1.597 7.293-4.162 9.75M11.013 4.417A10.47 10.47 0 0 1 14.25 12a10.47 10.47 0 0 1-3.238 7.583m-2.074-13A7.48 7.48 0 0 1 11.25 12c0 2.13-.887 4.052-2.312 5.417M6.863 8.75A4.49 4.49 0 0 1 8.25 12c0 1.278-.532 2.43-1.387 3.25"/>`,
      }, children);
    };
  },
});
