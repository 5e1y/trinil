import { defineComponent, h } from 'vue';

export const StickyNotes = defineComponent({
  name: 'StickyNotes',
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
        innerHTML: `<path d="M9.75 21h6a1.5 1.5 0 0 0 1.5-1.5V8.25a1.5 1.5 0 0 0-1.5-1.5H4.5A1.5 1.5 0 0 0 3 8.25v6M9.75 21v-5.25a1.5 1.5 0 0 0-1.5-1.5H3M9.75 21 3 14.25m3.2-10.5A1.5 1.5 0 0 1 7.5 3h12A1.5 1.5 0 0 1 21 4.5v11.25a1.5 1.5 0 0 1-.75 1.3"/>`,
      }, children);
    };
  },
});
