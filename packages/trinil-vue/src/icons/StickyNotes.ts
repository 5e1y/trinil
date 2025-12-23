import { defineComponent, h } from 'vue';

export const StickyNotes = defineComponent({
  name: 'StickyNotes',
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
        innerHTML: `<path d="M6 4.5a1 1 0 0 1 1-1h12.5a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1m-10 3.41a1 1 0 0 0 .414.09H16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H4.5a1 1 0 0 0-1 1v6.086a1 1 0 0 0 .09.414m5.91 5.91a1 1 0 0 1-.293-.203l-5.414-5.414a1 1 0 0 1-.203-.293m5.91 5.91V15.5a1 1 0 0 0-1-1H3.59"/>`,
      }, children);
    };
  },
});
