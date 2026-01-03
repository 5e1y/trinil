import { defineComponent, h } from 'vue';

export const Grid = defineComponent({
  name: 'Grid',
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
        innerHTML: `<path d="M12 3h7.5A1.5 1.5 0 0 1 21 4.5V12m-9-9H4.5A1.5 1.5 0 0 0 3 4.5V12m9-9v9m0 9H4.5A1.5 1.5 0 0 1 3 19.5V12m9 9h7.5a1.5 1.5 0 0 0 1.5-1.5V12m-9 9v-9m0 0H3m9 0h9"/>`,
      }, children);
    };
  },
});
