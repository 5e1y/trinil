import { defineComponent, h } from 'vue';

export const FruitStrawberry = defineComponent({
  name: 'FruitStrawberry',
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
        innerHTML: `<path d="M14.506 4.116s13.61 3.816-.62 16.753a2.814 2.814 0 0 1-3.772 0c-14.23-12.937-.62-16.753-.62-16.753m5.012 0-.256.384 1.5 3.75L12 6.75l-3.75 1.5 1.5-3.75-.256-.384m5.012 0L15.75 2.25 12 3l-3.75-.75 1.244 1.866M8.25 11.25V12m7.5-.75V12M12 12v.75m-2.25 3v.75m4.5-.75v.75"/>`,
      }, children);
    };
  },
});
