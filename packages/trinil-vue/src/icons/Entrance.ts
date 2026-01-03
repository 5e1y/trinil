import { defineComponent, h } from 'vue';

export const Entrance = defineComponent({
  name: 'Entrance',
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
        innerHTML: `<path d="M18.75 17.25h-3v3h6v-3zm0 0v-4.5m0-3v-4.5m0 4.5h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.5m-3 3v3m0 0h-1.5a1.5 1.5 0 0 1-1.5-1.5v-1.5m-7.5 1.5v1.5m-4.5-9h6a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5"/>`,
      }, children);
    };
  },
});
