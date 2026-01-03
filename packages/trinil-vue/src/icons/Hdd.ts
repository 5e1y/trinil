import { defineComponent, h } from 'vue';

export const Hdd = defineComponent({
  name: 'Hdd',
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
        innerHTML: `<path d="M8.543 14.451a5.25 5.25 0 1 1 2.427 1.198m-2.427-1.198-.902 1.03a1.77 1.77 0 0 0 1.888 2.843c.6-.2 1.048-.707 1.172-1.328l.27-1.347m-2.428-1.198 2.534-2.896a.374.374 0 0 1 .648.319l-.755 3.775M5.25 2.25h13.5a1.5 1.5 0 0 1 1.5 1.5v16.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V3.75a1.5 1.5 0 0 1 1.5-1.5"/>`,
      }, children);
    };
  },
});
