import { defineComponent, h } from 'vue';

export const Syringe = defineComponent({
  name: 'Syringe',
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
        innerHTML: `<path d="M17.25 2.25 19.5 4.5m0 0 2.25 2.25M19.5 4.5 15 9m0 0 2.25 2.25M15 9l-2.25-2.25m4.5 4.5.314.314c.786.786 1.44 1.693 1.936 2.686m-2.25-3L15 13.5m-9.75 5.25h4.5l.75-.75m-5.25.75-3 3m3-3v-4.5l7.5-7.5m0 0-.314-.314A10.3 10.3 0 0 0 9.75 4.5M10.5 18 9 16.5m1.5 1.5 2.25-2.25m0 0-1.5-1.5m1.5 1.5L15 13.5m0 0L13.5 12"/>`,
      }, children);
    };
  },
});
