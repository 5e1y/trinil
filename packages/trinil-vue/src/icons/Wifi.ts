import { defineComponent, h } from 'vue';

export const Wifi = defineComponent({
  name: 'Wifi',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M22.076 8.674A14.2 14.2 0 0 0 12 4.5 14.2 14.2 0 0 0 1.924 8.674m6.364 6.364A5.23 5.23 0 0 1 12 13.5c1.45 0 2.762.588 3.712 1.538M5.106 11.856A9.72 9.72 0 0 1 12 9a9.72 9.72 0 0 1 6.894 2.856M12.75 18.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0"/>`,
      }, children);
    };
  },
});
