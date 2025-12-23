import { defineComponent, h } from 'vue';

export const LocationPlus = defineComponent({
  name: 'LocationPlus',
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
        innerHTML: `<path d="M18 18v-2.5m0 2.5h2.5M18 18v2.5m0-2.5h-2.5m2.876-4.986a5 5 0 0 0-5.125 6.556m5.125-6.556a5 5 0 1 1-5.125 6.556m5.125-6.556c.361-.947.526-1.967.475-2.998l-.026-.524a6.833 6.833 0 0 0-13.65 0l-.026.524a7.39 7.39 0 0 0 1.818 5.232l4.28 4.892a1 1 0 0 0 1.506 0l.498-.57M15 10a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"/>`,
      }, children);
    };
  },
});
