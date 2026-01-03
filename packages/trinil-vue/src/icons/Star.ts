import { defineComponent, h } from 'vue';

export const Star = defineComponent({
  name: 'Star',
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
        innerHTML: `<path d="M10.63 3.074c.528-1.186 2.211-1.186 2.74 0l2.119 4.752a.15.15 0 0 0 .115.088l4.69.666c1.221.174 1.723 1.665.854 2.54l-3.392 3.425a.15.15 0 0 0-.04.136l1.078 5.212c.265 1.281-1.122 2.264-2.242 1.59l-4.475-2.694a.15.15 0 0 0-.154 0L7.44 21.483c-1.122.674-2.508-.31-2.242-1.592l1.085-5.21a.15.15 0 0 0-.04-.136L2.852 11.12c-.869-.876-.367-2.367.854-2.541l4.69-.666a.15.15 0 0 0 .115-.088z"/>`,
      }, children);
    };
  },
});
