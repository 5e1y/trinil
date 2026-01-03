import { defineComponent, h } from 'vue';

export const Copy = defineComponent({
  name: 'Copy',
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
        innerHTML: `<path d="M7.5 4.5v-.75A1.5 1.5 0 0 1 9 2.25h6.129a1.5 1.5 0 0 1 1.06.44l5.122 5.12a1.5 1.5 0 0 1 .439 1.061v6.13a1.5 1.5 0 0 1-1.5 1.5l-.75-.001M2.25 9v11.25a1.5 1.5 0 0 0 1.5 1.5H15a1.5 1.5 0 0 0 1.5-1.5v-6.129a1.5 1.5 0 0 0-.44-1.06l-5.12-5.122A1.5 1.5 0 0 0 9.878 7.5H3.75A1.5 1.5 0 0 0 2.25 9"/>`,
      }, children);
    };
  },
});
