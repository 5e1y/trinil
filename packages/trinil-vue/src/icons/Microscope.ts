import { defineComponent, h } from 'vue';

export const Microscope = defineComponent({
  name: 'Microscope',
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
        innerHTML: `<path d="M3.75 17.25h4.5m0 0h4.5m-4.5 0v3a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-2.592a9.25 9.25 0 0 0-6-8.658m0 0L12 13.5l-.75-.375-.375.75-3-1.5.375-.75-.75-.375 3.83-7.658a1.5 1.5 0 0 1 2.012-.671l1.816.908a1.5 1.5 0 0 1 .671 2.013z"/>`,
      }, children);
    };
  },
});
