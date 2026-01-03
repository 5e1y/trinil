import { defineComponent, h } from 'vue';

export const EyeBlind = defineComponent({
  name: 'EyeBlind',
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
        innerHTML: `<path d="M13.852 7.898a4.5 4.5 0 0 0-5.955 5.955m5.955-5.955-5.954 5.954m5.954-5.954c.997.45 1.8 1.253 2.25 2.25m-8.204 3.704a4.5 4.5 0 0 0 2.25 2.25m5.954-5.954a4.5 4.5 0 0 1-5.955 5.955m5.955-5.955-5.954 5.954m11.063-4.795.539.693c-4.586 7.055-14.914 7.055-19.5 0 4.428-6.641 14.06-6.993 18.961-.693"/>`,
      }, children);
    };
  },
});
