import { defineComponent, h } from 'vue';

export const Key = defineComponent({
  name: 'Key',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M7.5 11.25a5.25 5.25 0 1 0 4.386 2.364L17.25 8.25l2.25 2.25 2.25-2.25L19.5 6 21 4.5l-2.25-2.25-9.353 9.353A5.2 5.2 0 0 0 7.5 11.25m-.75 5.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5" clip-rule="evenodd"/>`,
      }, children);
    };
  },
});
