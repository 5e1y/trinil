import { defineComponent, h } from 'vue';

export const Star = defineComponent({
  name: 'Star',
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
        innerHTML: `<path d="M11.104 5.302a1 1 0 0 1 1.791 0l1.886 3.794 4.202.606a1 1 0 0 1 .553 1.709L16.5 14.349l.718 4.159a1 1 0 0 1-1.448 1.056L12 17.596l-3.77 1.968a1 1 0 0 1-1.448-1.056l.718-4.159-3.036-2.938a1 1 0 0 1 .553-1.709l4.202-.606z"/>`,
      }, children);
    };
  },
});
