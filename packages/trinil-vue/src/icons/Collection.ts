import { defineComponent, h } from 'vue';

export const Collection = defineComponent({
  name: 'Collection',
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
        innerHTML: `<path d="M21.75 7.5c0 2.9-4.365 5.25-9.75 5.25S2.25 10.4 2.25 7.5m19.5 0c0-2.9-4.365-5.25-9.75-5.25S2.25 4.6 2.25 7.5m19.5 0V12M2.25 7.5V12m19.5 0c0 2.9-4.365 5.25-9.75 5.25S2.25 14.9 2.25 12m19.5 0v4.5c0 2.9-4.365 5.25-9.75 5.25S2.25 19.4 2.25 16.5V12"/>`,
      }, children);
    };
  },
});
