import { defineComponent, h } from 'vue';

export const KeyframeLinear = defineComponent({
  name: 'KeyframeLinear',
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
        innerHTML: `<path d="M12 3.621c-.384 0-.768.147-1.06.44l-6.88 6.878a1.5 1.5 0 0 0 0 2.122l6.88 6.878c.292.293.676.44 1.06.44M12 3.62c.384 0 .768.147 1.06.44l6.88 6.878a1.5 1.5 0 0 1 0 2.122l-6.88 6.878c-.292.293-.676.44-1.06.44M12 3.62V20.38"/>`,
      }, children);
    };
  },
});
