import { defineComponent, h } from 'vue';

export const PiggyBank = defineComponent({
  name: 'PiggyBank',
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
        innerHTML: `<path d="M5.25 12.375C5.25 17.25 7.5 18 7.5 18v.75a1.5 1.5 0 0 0 1.5 1.5h.75a1.5 1.5 0 0 0 1.5-1.5h3a1.5 1.5 0 0 0 1.5 1.5h.75a1.5 1.5 0 0 0 1.5-1.5V18s2.25 0 2.25-2.25a1.5 1.5 0 0 0 1.5-1.5V12a1.5 1.5 0 0 0-1.5-1.5c0-2.992-2.25-3.843-2.25-3.843V3.75l-.377.094a7 7 0 0 0-2.982 1.586c-.504-.115-1.4-.19-1.891-.19-.982 0-1.27.012-2.25.19q-.371.067-.75.195c-2.223.748-4.5 3.045-4.5 6.75m0 0c-1.683.51-3.301-.96-2.957-2.684L2.432 9m8.068-.423c1.462-.704 3.75-.214 3.75-.214"/>`,
      }, children);
    };
  },
});
