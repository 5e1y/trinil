import { defineComponent, h } from 'vue';

export const Film = defineComponent({
  name: 'Film',
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
        innerHTML: `<path d="M2.25 7.5v9m0-9H6m-3.75 0V3.75H6M2.25 16.5H6m-3.75 0v3.75H6M6 7.5V3.75M6 7.5h.75M6 3.75h3.75m0 0V7.5m0-3.75h3.75M9.75 7.5h3.75m-3.75 0h-3m6.75 0V3.75m0 3.75h3.75M13.5 3.75h3.75m0 3.75V3.75m0 3.75h1.5m-1.5-3.75H21m.75 0H21m0 0V7.5m0 0h-2.25m2.25 0h.75v9H21m-14.25-9v9m0 0H6m.75 0h3m9-9v9m0 0h-1.5m1.5 0H21M6 20.25V16.5m0 3.75h3.75m0 0V16.5m0 3.75h3.75M9.75 16.5h3.75m0 3.75V16.5m0 3.75h3.75M13.5 16.5h3.75m0 3.75V16.5m0 3.75H21m0 0h.75m-.75 0V16.5"/>`,
      }, children);
    };
  },
});
