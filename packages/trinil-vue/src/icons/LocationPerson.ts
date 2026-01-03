import { defineComponent, h } from 'vue';

export const LocationPerson = defineComponent({
  name: 'LocationPerson',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M12 12.75A3.747 3.747 0 0 1 8.256 9 3.747 3.747 0 0 1 12 5.25 3.747 3.747 0 0 1 15.744 9 3.747 3.747 0 0 1 12 12.75m0 0h1.133a4.117 4.117 0 0 1 4.117 4.117M12 12.75h-1.133a4.117 4.117 0 0 0-4.117 4.117m10.5 0L12 21.75l-5.25-4.883m10.5 0 .352-.328C23.086 11.44 19.483 2.25 12 2.25S.914 11.44 6.398 16.54l.352.327"/>`,
      }, children);
    };
  },
});
