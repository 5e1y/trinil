import { defineComponent, h } from 'vue';

export const Train = defineComponent({
  name: 'Train',
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
        innerHTML: `<path d="M13.5 17.5h5.382c.992 0 1.898-.56 2.342-1.447l.013-.027a2.493 2.493 0 0 0-.947-3.252L14.785 9.47A13.83 13.83 0 0 0 7.669 7.5H6.5m7 10h-4m4 0a2 2 0 0 1-2 2m-2-2h-4m4 0a2 2 0 0 1-2 2m2-2a2 2 0 0 0 2 2m-6-2H3m2.5 0a2 2 0 0 0 2 2m-4.5-7h10.138c.424 0 .599-.545.253-.792A9.17 9.17 0 0 0 8.061 10H3m18.5 9.5h-10m0 0h-4m0 0H3m3.5-12H3m3.5 0V5m0 0h2.264a1 1 0 0 1 .447.106L10 5.5M6.5 5H4.236a1 1 0 0 0-.447.106L3 5.5"/>`,
      }, children);
    };
  },
});
