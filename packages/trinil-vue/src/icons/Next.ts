import { defineComponent, h } from 'vue';

export const Next = defineComponent({
  name: 'Next',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M21 3v18m-4.426-10.25L5.332 3.254C4.335 2.589 3 3.304 3 4.502V19.54c0 1.2 1.34 1.915 2.336 1.246l11.241-7.543a1.5 1.5 0 0 0-.003-2.493"/>`,
      }, children);
    };
  },
});
