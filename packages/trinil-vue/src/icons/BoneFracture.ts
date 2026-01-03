import { defineComponent, h } from 'vue';

export const BoneFracture = defineComponent({
  name: 'BoneFracture',
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
        innerHTML: `<path d="M5.281 18.719q-.198.03-.406.031a2.625 2.625 0 1 1 1.856-4.481L7.5 13.5h6l-3.769 3.769a2.625 2.625 0 1 1-4.45 1.45m0 0a2.63 2.63 0 0 0 1.775-1.132M19.208 5.939q.2.022.4.075a2.625 2.625 0 1 1-2.952 3.848l-1.105.638-5.795-1.553 4.778-2.759a2.625 2.625 0 1 1 4.674-.249m0 0a2.63 2.63 0 0 0-2.007.634M17.25 18l.75 2.25m1.5-4.5 2.25.75M6.75 6 6 3.75m-1.5 4.5L2.25 7.5"/>`,
      }, children);
    };
  },
});
