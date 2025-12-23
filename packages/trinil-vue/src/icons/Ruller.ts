import { defineComponent, h } from 'vue';

export const Ruller = defineComponent({
  name: 'Ruller',
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
        innerHTML: `<path d="M17 19.5h3a1 1 0 0 0 1-1v-2m-4 3a1 1 0 0 0 1-1v-.586a1 1 0 0 0-.293-.707L16.5 16m.5 3.5h-2m6-12v-2a1 1 0 0 0-1-1h-2.5a1 1 0 0 0-1 1V16M21 7.5h-1.5m1.5 0v3m0 0h-1.5m1.5 0v3m0 0h-1.5m1.5 0v3m0 0h-1.5m-3-.5L5.293 4.793a1 1 0 0 0-.707-.293H4a1 1 0 0 0-1 1v2m12 12V18m0 1.5h-3m0 0V18m0 1.5H9m0 0V18m0 1.5H6m0 0H4a1 1 0 0 1-1-1v-2m3 3V18M3 7.5h1.5M3 7.5v3m0 0h1.5m-1.5 0v3m0 0h1.5m-1.5 0v3m0 0h1.5m3-4.259V14.9a.1.1 0 0 0 .1.1h2.659a.1.1 0 0 0 .07-.17l-2.658-2.66a.1.1 0 0 0-.171.071Z"/>`,
      }, children);
    };
  },
});
