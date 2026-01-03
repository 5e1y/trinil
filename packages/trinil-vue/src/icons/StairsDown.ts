import { defineComponent, h } from 'vue';

export const StairsDown = defineComponent({
  name: 'StairsDown',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M20.25 20.25V16.5a.75.75 0 0 0-.75-.75H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75H9A.75.75 0 0 1 8.25 9V4.5a.75.75 0 0 0-.75-.75H3a.75.75 0 0 0-.75.75v15.75M21.75 9 16.5 3.75M21.75 9V5.25m0 3.75H18"/>`,
      }, children);
    };
  },
});
