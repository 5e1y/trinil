import { defineComponent, h } from 'vue';

export const Bell = defineComponent({
  name: 'Bell',
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
        innerHTML: `<path d="M9 18.75h6m-6 0a3 3 0 1 0 6 0m-6 0H3.75a8.93 8.93 0 0 0 1.5-4.954V12a6.75 6.75 0 0 1 4.759-6.451 2.25 2.25 0 1 1 3.983 0A6.75 6.75 0 0 1 18.75 12v1.796c0 1.763.522 3.487 1.5 4.954H15"/>`,
      }, children);
    };
  },
});
