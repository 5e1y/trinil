import { defineComponent, h } from 'vue';

export const Alarm = defineComponent({
  name: 'Alarm',
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
        innerHTML: `<path d="M17.834 18.583 20.25 21m-2.416-2.417a8.22 8.22 0 0 0 2.416-5.833c0-.904-.145-1.773-.413-2.587m-2.003 8.42A8.22 8.22 0 0 1 12 21a8.22 8.22 0 0 1-5.834-2.417m0 0L3.75 21m2.416-2.417A8.22 8.22 0 0 1 3.75 12.75c0-.904.145-1.773.414-2.587m15.673 0 1.602-1.603a1.5 1.5 0 0 0 0-2.12l-3.878-3.88a1.5 1.5 0 0 0-2.122 0L13.5 4.5l.162.162m6.175 5.501A8.254 8.254 0 0 0 10.33 4.67m0 0 .169-.17L8.56 2.56a1.5 1.5 0 0 0-2.12 0L2.56 6.44a1.5 1.5 0 0 0 0 2.12l1.604 1.603M10.33 4.67a8.26 8.26 0 0 0-6.167 5.494M16.5 10.5 12 14.25l-3.75-3"/>`,
      }, children);
    };
  },
});
