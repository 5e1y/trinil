import { defineComponent, h } from 'vue';

export const KeyframeEaseIn = defineComponent({
  name: 'KeyframeEaseIn',
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
        innerHTML: `<path d="M12 3.75H3.621c-1.336 0-2.005 1.616-1.06 2.56l4.628 4.63a1.5 1.5 0 0 1 0 2.12l-4.628 4.63c-.945.944-.276 2.56 1.06 2.56H12m0-16.5h1.629a1.5 1.5 0 0 1 1.06.44l6.75 6.75a1.5 1.5 0 0 1 0 2.12l-6.75 6.75a1.5 1.5 0 0 1-1.06.44H12m0-16.5v16.5"/>`,
      }, children);
    };
  },
});
