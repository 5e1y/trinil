import { defineComponent, h } from 'vue';

export const Presentation = defineComponent({
  name: 'Presentation',
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
        innerHTML: `<path d="M2.25 18h1.5m0 0V7.5A1.5 1.5 0 0 1 5.25 6h4.846M3.75 18h2.654m13.846 0h1.5m-1.5 0V7.5a1.5 1.5 0 0 0-1.5-1.5h-4.846m6.346 12h-2.654m0 0 1.154 3.75M17.596 18H6.404m0 0L5.25 21.75M10.096 6l.933-3.033a1.016 1.016 0 0 1 1.942 0L13.904 6m-3.808 0h3.808"/>`,
      }, children);
    };
  },
});
