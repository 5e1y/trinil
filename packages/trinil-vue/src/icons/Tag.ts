import { defineComponent, h } from 'vue';

export const Tag = defineComponent({
  name: 'Tag',
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
        innerHTML: `<path d="M3 6v5.379c0 .398.158.779.44 1.06l8.25 8.25a1.5 1.5 0 0 0 2.12 0l6.88-6.878a1.5 1.5 0 0 0 0-2.122l-8.25-8.25A1.5 1.5 0 0 0 11.378 3H6a3 3 0 0 0-3 3m3.75 3a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0" clip-rule="evenodd"/>`,
      }, children);
    };
  },
});
