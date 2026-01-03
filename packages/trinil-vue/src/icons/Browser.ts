import { defineComponent, h } from 'vue';

export const Browser = defineComponent({
  name: 'Browser',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M6.75 12c0-2.9 2.35-5.25 5.25-5.25M6.75 12c0 2.9 2.35 5.25 5.25 5.25M6.75 12h3.375M12 6.75c2.9 0 5.25 2.35 5.25 5.25M12 6.75c-1.036 0-1.875 2.35-1.875 5.25M12 6.75c1.036 0 1.875 2.35 1.875 5.25M12 17.25c2.9 0 5.25-2.35 5.25-5.25M12 17.25c-1.036 0-1.875-2.35-1.875-5.25M12 17.25c1.036 0 1.875-2.35 1.875-5.25m3.375 0h-3.375m0 0h-3.75M5.25 3.75h13.5a3 3 0 0 1 3 3v10.5a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6.75a3 3 0 0 1 3-3"/>`,
      }, children);
    };
  },
});
