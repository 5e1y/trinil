import { defineComponent, h } from 'vue';

export const Car = defineComponent({
  name: 'Car',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M19.5 17.25h.75a1.5 1.5 0 0 0 1.5-1.5v-3.573a1.5 1.5 0 0 0-.83-1.342l-1.723-.861a1.5 1.5 0 0 1-.67-.671l-1.612-3.224a1.5 1.5 0 0 0-1.342-.829H6.177a1.5 1.5 0 0 0-1.342.83l-2.427 4.853a1.5 1.5 0 0 0-.158.671v4.146a1.5 1.5 0 0 0 1.5 1.5h.75m15 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0m-10.5 0a2.25 2.25 0 0 1 4.5 0m-4.5 0a2.25 2.25 0 0 0 4.5 0m0 0h6"/>`,
      }, children);
    };
  },
});
