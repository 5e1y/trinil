import { defineComponent, h } from 'vue';

export const LocationCross = defineComponent({
  name: 'LocationCross',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M12.4 14.229A3.747 3.747 0 0 1 8.256 10.5 3.747 3.747 0 0 1 12 6.75a3.747 3.747 0 0 1 3.545 4.96m4.638-.1c.594-4.578-2.785-9.36-8.183-9.36-7.483 0-11.086 9.19-5.602 14.29L12 21.75l.242-.225m3.508.975 3.375-3.375m0 0L22.5 15.75m-3.375 3.375L22.5 22.5m-3.375-3.375L15.75 15.75"/>`,
      }, children);
    };
  },
});
