import { defineComponent, h } from 'vue';

export const Coupon = defineComponent({
  name: 'Coupon',
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
        innerHTML: `<path d="M9.75 20.25h-6a1.5 1.5 0 0 1-1.5-1.5v-1.5c0-.472.232-.908.57-1.238 2.24-2.19 2.24-5.834 0-8.024-.338-.33-.57-.766-.57-1.238v-1.5a1.5 1.5 0 0 1 1.5-1.5h6m0 16.5h10.5a1.5 1.5 0 0 0 1.5-1.5v-1.5c0-.472-.232-.908-.57-1.238-2.24-2.19-2.24-5.834 0-8.024.338-.33.57-.766.57-1.238v-1.5a1.5 1.5 0 0 0-1.5-1.5H9.75m0 16.5v-1.5m0-15v1.5m0 3.75v.75m0 4.5V15"/>`,
      }, children);
    };
  },
});
