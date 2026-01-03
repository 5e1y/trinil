import { defineComponent, h } from 'vue';

export const PhoneDown = defineComponent({
  name: 'PhoneDown',
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
        innerHTML: `<path d="m14.25 9.75 6-6m-6 6h5.25m-5.25 0V4.5M2.679 8.872c2.887 5.831 7.282 10.21 12.587 12.545 1.654.727 3.55.213 4.829-1.054.702-.696 1.216-1.528 1.536-2.137.257-.49.081-1.072-.37-1.395l-2.825-2.024a1.245 1.245 0 0 0-1.599.126l-.858.85a.26.26 0 0 1-.317.035 24.6 24.6 0 0 1-7.584-7.511.25.25 0 0 1 .035-.314l.86-.853a1.215 1.215 0 0 0 .13-1.58L7.04 2.716c-.283-.39-.77-.578-1.219-.397A6.6 6.6 0 0 0 3.67 3.738c-1.374 1.36-1.847 3.407-.991 5.134"/>`,
      }, children);
    };
  },
});
