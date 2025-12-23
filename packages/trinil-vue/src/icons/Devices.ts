import { defineComponent, h } from 'vue';

export const Devices = defineComponent({
  name: 'Devices',
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
        innerHTML: `<path d="M9 14H4a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1V8m-6 6v4.5M9 14h2m-2 4.5H5m4 0h3m6-8h-.5a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m.5-8h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2.5m.5-8V9a1 1 0 0 0-1-1h-2m-3 10.5a1 1 0 0 1-1-1V14m1 4.5h5.5M15 8h-3a1 1 0 0 0-1 1v5"/>`,
      }, children);
    };
  },
});
