import { defineComponent, h } from 'vue';

export const Cpu = defineComponent({
  name: 'Cpu',
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
        innerHTML: `<path d="M16.5 19.5H18a1.5 1.5 0 0 0 1.5-1.5v-1.5m-3 3h-3m3 0V21m-3-1.5h-3m3 0V21m-3-1.5h-3m3 0V21m-3-1.5H6A1.5 1.5 0 0 1 4.5 18v-1.5m3 3V21m-3-4.5v-3m0 3H3m1.5-3v-3m0 3H3m1.5-3v-3m0 3H3m1.5-3V6A1.5 1.5 0 0 1 6 4.5h1.5m-3 3H3m4.5-3V3m0 1.5h3m0 0V3m0 1.5h3m0 0V3m0 1.5h3m0 0H18A1.5 1.5 0 0 1 19.5 6v1.5m-3-3V3m3 4.5v3m0-3H21m-1.5 3v3m0-3H21m-1.5 3v3m0-3H21m-1.5 3H21M8.25 9.75v4.5a1.5 1.5 0 0 0 1.5 1.5h4.5a1.5 1.5 0 0 0 1.5-1.5v-4.5a1.5 1.5 0 0 0-1.5-1.5h-4.5a1.5 1.5 0 0 0-1.5 1.5"/>`,
      }, children);
    };
  },
});
