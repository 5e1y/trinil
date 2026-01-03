import { defineComponent, h } from 'vue';

export const WifiLock = defineComponent({
  name: 'WifiLock',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M22.076 8.674A14.2 14.2 0 0 0 12 4.5 14.2 14.2 0 0 0 1.924 8.674m6.364 6.364a5.23 5.23 0 0 1 4.613-1.461m-7.795-1.721A9.72 9.72 0 0 1 12 9a9.7 9.7 0 0 1 6.235 2.254m-6.895 7.853a.75.75 0 0 1-.067-.543M16.5 18v-1.125a2.625 2.625 0 0 1 5.25 0V18m-5.25 0h5.25m-5.25 0a.75.75 0 0 0-.75.75V21a1.5 1.5 0 0 0 1.5 1.5H21a1.5 1.5 0 0 0 1.5-1.5v-2.25a.75.75 0 0 0-.75-.75"/>`,
      }, children);
    };
  },
});
