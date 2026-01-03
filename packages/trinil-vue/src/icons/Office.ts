import { defineComponent, h } from 'vue';

export const Office = defineComponent({
  name: 'Office',
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
        innerHTML: `<path d="M19.5 11.25h2.25m-2.25 0v4.5m0-4.5h-2.25m-4.5 4.5v3a1.5 1.5 0 0 0 1.5 1.5H18a1.5 1.5 0 0 0 1.5-1.5v-3m-6.75 0v-4.5m0 4.5h6.75m-6.75-4.5h-6m6 0h1.5m-7.5 0V7.5m0 3.75H4.5M6.75 7.5h3V6a3 3 0 0 0-6 0v1.5zm-4.5 3.75H4.5m0 0v9m9.75-9V7.5h2.25m-2.25 3.75h3m0 0V7.5h-.75m0 0V4.719"/>`,
      }, children);
    };
  },
});
