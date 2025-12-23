import { defineComponent, h } from 'vue';

export const Fight = defineComponent({
  name: 'Fight',
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
        innerHTML: `<path d="M15.799 8.5a2.5 2.5 0 1 0 3.403-3.664A2.5 2.5 0 0 0 15.798 8.5Zm0 0L11 13.168M15.799 8.5l1.093 3.337a1 1 0 0 1-.013.658L16 14.875M15.799 8.5l-3.695-.285a1 1 0 0 1-.842-.603l-1.015-2.366M11 13.168l-3.789-1.894a1 1 0 0 0-.447-.106H3.5m7.5 2 .94 3.758a1 1 0 0 1 0 .485l-.773 3.089"/>`,
      }, children);
    };
  },
});
