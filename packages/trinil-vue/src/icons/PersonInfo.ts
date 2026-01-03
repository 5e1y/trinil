import { defineComponent, h } from 'vue';

export const PersonInfo = defineComponent({
  name: 'PersonInfo',
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
        innerHTML: `<path d="M9 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0h.75a3 3 0 0 1 3 3v1.5h-7.5v-1.5a3 3 0 0 1 3-3zM18.75 9h-3M18 12h-2.25m1.5 3h-1.5m6-8.25v10.5a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6.75a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3"/>`,
      }, children);
    };
  },
});
