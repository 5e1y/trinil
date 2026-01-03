import { defineComponent, h } from 'vue';

export const Atom = defineComponent({
  name: 'Atom',
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
        innerHTML: `<path d="M16.345 12c0 5.385-1.94 9.75-4.333 9.75S7.679 17.385 7.679 12s1.94-9.75 4.333-9.75 4.333 4.365 4.333 9.75"/><path d="M14.179 15.753c-4.664 2.692-9.414 3.195-10.61 1.122-1.197-2.072 1.613-5.935 6.276-8.628 4.664-2.692 9.414-3.194 10.61-1.122 1.197 2.073-1.613 5.936-6.276 8.628"/><path d="M9.845 15.753c-4.663-2.692-7.473-6.555-6.277-8.628 1.197-2.072 5.947-1.57 10.61 1.122 4.664 2.693 7.474 6.556 6.278 8.628s-5.947 1.57-10.61-1.122"/>`,
      }, children);
    };
  },
});
