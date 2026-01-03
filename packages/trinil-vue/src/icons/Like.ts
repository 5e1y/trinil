import { defineComponent, h } from 'vue';

export const Like = defineComponent({
  name: 'Like',
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
        innerHTML: `<path d="M7.5 9.75H3.75a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5H7.5m0-10.5L14.25 3l.721.721a3 3 0 0 1 .562 3.463L14.25 9.75h6c.828 0 1.507.673 1.431 1.498a16.4 16.4 0 0 1-2.983 8.024l-.25.35a1.5 1.5 0 0 1-1.22.628H7.5m0-10.5v10.5"/>`,
      }, children);
    };
  },
});
