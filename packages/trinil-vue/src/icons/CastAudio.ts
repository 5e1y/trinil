import { defineComponent, h } from 'vue';

export const CastAudio = defineComponent({
  name: 'CastAudio',
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
        innerHTML: `<path d="M10.94 13.06a1.5 1.5 0 1 1 2.12 0m-3.888 1.768a4 4 0 1 1 5.656 0m-7.424 1.768a6.5 6.5 0 1 1 9.192 0m-10.96 1.768a9 9 0 1 1 12.728 0M16.759 20.5H7.24a.1.1 0 0 1-.07-.17l4.122-4.123a1 1 0 0 1 1.414 0l4.122 4.122a.1.1 0 0 1-.07.171Z"/>`,
      }, children);
    };
  },
});
