import { defineComponent, h } from 'vue';

export const Seed = defineComponent({
  name: 'Seed',
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
        innerHTML: `<path d="M12 12c.61-3.087 4.87-5.571 7.872-4.62a.096.096 0 0 1 .065.113C19.26 10.568 14.978 13.015 12 12Zm0 0v3m0-3V8m0 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0-7c-.61-3.087-4.87-5.57-7.872-4.62a.096.096 0 0 0-.065.113C4.74 6.568 9.02 9.015 12 8Z"/>`,
      }, children);
    };
  },
});
