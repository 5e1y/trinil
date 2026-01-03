import { defineComponent, h } from 'vue';

export const Globe = defineComponent({
  name: 'Globe',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75M2.25 12c0 5.385 4.365 9.75 9.75 9.75M2.25 12H7.5M12 2.25c5.385 0 9.75 4.365 9.75 9.75M12 2.25c-2.485 0-4.5 4.365-4.5 9.75M12 2.25c2.485 0 4.5 4.365 4.5 9.75M12 21.75c5.385 0 9.75-4.365 9.75-9.75M12 21.75c-2.485 0-4.5-4.365-4.5-9.75m4.5 9.75c2.485 0 4.5-4.365 4.5-9.75m5.25 0H16.5m-9 0h9"/>`,
      }, children);
    };
  },
});
