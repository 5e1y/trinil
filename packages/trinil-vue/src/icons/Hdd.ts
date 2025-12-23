import { defineComponent, h } from 'vue';

export const Hdd = defineComponent({
  name: 'Hdd',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="m9.119 14.087-1.133 1.557a1.42 1.42 0 1 0 2.507 1.253l.609-1.977m-1.983-.833 1.552-2.135a.66.66 0 0 1 1.165.582l-.734 2.385m-1.983-.832a5 5 0 1 1 1.983.833M5 4v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1Z"/>`,
      }, children);
    };
  },
});
