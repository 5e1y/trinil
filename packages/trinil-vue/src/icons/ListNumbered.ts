import { defineComponent, h } from 'vue';

export const ListNumbered = defineComponent({
  name: 'ListNumbered',
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
        innerHTML: `<path d="M10.5 3.75h11.25M10.5 12h11.25M10.5 20.25h11.25M2.25 3.75l2.25-1.5v7.5m0 0h2.25m-2.25 0H2.25m4.5 12h-4.5l3.879-3.879a2.121 2.121 0 0 0-1.5-3.621H4.5a2.25 2.25 0 0 0-2.25 2.25"/>`,
      }, children);
    };
  },
});
