import { defineComponent, h } from 'vue';

export const AnimalButterfly = defineComponent({
  name: 'AnimalButterfly',
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
        innerHTML: `<path d="M13.5 4v5m0 0v.5m0-.5a5 5 0 0 1 5-5h1a1 1 0 0 1 1 1v3a5 5 0 0 1-5 5H14m-.5-3.5V13m0-3.5a1.5 1.5 0 0 0-3 0m3 3.5v2m0-2h.5m-.5 2v1.5a1.5 1.5 0 0 1-3 0V15m3 0a5 5 0 0 0 5 5 .5.5 0 0 0 .5-.5V18a5 5 0 0 0-5-5m-3.5 2v-2m0 2a5 5 0 0 1-5 5 .5.5 0 0 1-.5-.5V18a5 5 0 0 1 5-5m.5 0V9.5m0 3.5H10m.5-3.5V9m0 0a5 5 0 0 0-5-5h-1a1 1 0 0 0-1 1v3a5 5 0 0 0 5 5H10m.5-4V4"/>`,
      }, children);
    };
  },
});
