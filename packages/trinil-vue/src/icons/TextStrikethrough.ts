import { defineComponent, h } from 'vue';

export const TextStrikethrough = defineComponent({
  name: 'TextStrikethrough',
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
        innerHTML: `<path d="M14.25 12.75c2.437.482 3.199 1.843 3.512 3.569.515 2.828-1.658 5.431-5.282 5.431h-.433C8.34 21.75 6 19.365 5.959 16.5m8.291-3.75h7.5m-7.5 0h-12m5.625-3C6.75 9.375 6.378 8.454 6.237 7.681 5.723 4.853 7.896 2.25 11.52 2.25h.433c3.706 0 5.297 2.385 5.338 5.25"/>`,
      }, children);
    };
  },
});
