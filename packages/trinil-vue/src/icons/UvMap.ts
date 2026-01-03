import { defineComponent, h } from 'vue';

export const UvMap = defineComponent({
  name: 'UvMap',
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
        innerHTML: `<path d="M21.75 12c0-5.385-4.365-9.75-9.75-9.75M21.75 12c0 5.385-4.365 9.75-9.75 9.75M21.75 12c0 2.485-4.365 4.5-9.75 4.5-1.46 0-2.844-.148-4.087-.413M12 2.25c-5.385 0-9.75 4.365-9.75 9.75M12 2.25c-2.485 0-4.5 4.365-4.5 9.75 0 1.46.148 2.844.413 4.087M12 21.75c-5.385 0-9.75-4.365-9.75-9.75M12 21.75c-1.812 0-3.373-2.32-4.087-5.663M2.25 12c0 1.812 2.32 3.373 5.663 4.087"/>`,
      }, children);
    };
  },
});
