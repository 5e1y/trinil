import { defineComponent, h } from 'vue';

export const MaterialSlot = defineComponent({
  name: 'MaterialSlot',
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
        innerHTML: `<path d="M10.965 15.863a3.99 3.99 0 0 0 3.736-.913m1.162-1.915a4 4 0 0 1-.1.318M21 7V4a1 1 0 0 0-1-1h-3M7 3H4a1 1 0 0 0-1 1v3m0 10v3a1 1 0 0 0 1 1h3m14-4v3a1 1 0 0 1-1 1h-3m.794-7.447a5.998 5.998 0 1 1-11.588-3.105 5.998 5.998 0 0 1 11.588 3.105Z"/>`,
      }, children);
    };
  },
});
