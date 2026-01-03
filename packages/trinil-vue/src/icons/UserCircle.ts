import { defineComponent, h } from 'vue';

export const UserCircle = defineComponent({
  name: 'UserCircle',
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
        innerHTML: `<path d="M12 15a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m0 0h1.314A4.686 4.686 0 0 1 18 19.686M12 15h-1.314A4.686 4.686 0 0 0 6 19.686m12 0A9.73 9.73 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12A9.73 9.73 0 0 0 6 19.686m12 0a9.7 9.7 0 0 1-6 2.064 9.7 9.7 0 0 1-6-2.064"/>`,
      }, children);
    };
  },
});
