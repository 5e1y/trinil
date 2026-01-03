import { defineComponent, h } from 'vue';

export const Plug = defineComponent({
  name: 'Plug',
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
        innerHTML: `<path d="M14.25 21.75v-1.676c0-.756.572-1.377 1.29-1.613a6.85 6.85 0 0 0 4.71-6.508V8.36a.11.11 0 0 0-.11-.11h-2.89m-7.5 13.5v-1.676c0-.756-.572-1.377-1.29-1.613a6.85 6.85 0 0 1-4.71-6.508V8.36c0-.06.05-.11.11-.11h2.89m0 0v-4.5a1.5 1.5 0 1 1 3 0v4.5m-3 0h3m0 0h4.5m3 0v-4.5a1.5 1.5 0 0 0-3 0v4.5m3 0h-3"/>`,
      }, children);
    };
  },
});
