import { defineComponent, h } from 'vue';

export const ZoomCamera = defineComponent({
  name: 'ZoomCamera',
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
        innerHTML: `<path d="M21.75 3H18m3.75 0v3.75m0-3.75-3 3M2.25 3v3.75m0-3.75 3 3m-3-3H6m15.75 18H18m3.75 0v-3.75m0 3.75-3-3m-16.5 3v-3.75m0 3.75 3-3m-3 3H6M16.5 9.75v-1.5h-2.25M7.5 9.75v-1.5h2.25M7.5 13.5V15h2.25m6.75-1.5V15h-2.25"/>`,
      }, children);
    };
  },
});
