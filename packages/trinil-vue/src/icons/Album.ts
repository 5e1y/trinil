import { defineComponent, h } from 'vue';

export const Album = defineComponent({
  name: 'Album',
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
        innerHTML: `<path d="M18 18.497v.253a1.5 1.5 0 0 1-1.5 1.5H3.75a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5H16.5a1.5 1.5 0 0 1 1.5 1.5v.253m0 12.994V5.503m0 12.994A7.5 7.5 0 0 0 21.75 12c0-2.776-1.508-5.2-3.75-6.497m-7.5 8.747a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0m0 0V7.5l.659.22c1.019.34 2.13.26 3.091-.22"/>`,
      }, children);
    };
  },
});
