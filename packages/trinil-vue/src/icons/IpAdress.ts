import { defineComponent, h } from 'vue';

export const IpAdress = defineComponent({
  name: 'IpAdress',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M6.75 10.5c0-2.9 2.35-5.25 5.25-5.25M6.75 10.5c0 2.9 2.35 5.25 5.25 5.25M6.75 10.5h3.375M12 5.25c2.9 0 5.25 2.35 5.25 5.25M12 5.25c-1.036 0-1.875 2.35-1.875 5.25M12 5.25c1.036 0 1.875 2.35 1.875 5.25M12 15.75c2.9 0 5.25-2.35 5.25-5.25M12 15.75c-1.036 0-1.875-2.35-1.875-5.25M12 15.75c1.036 0 1.875-2.35 1.875-5.25m3.375 0h-3.375m0 0h-3.75M12 21.75l5.602-5.21C23.086 11.44 19.483 2.25 12 2.25S.914 11.44 6.398 16.54z"/>`,
      }, children);
    };
  },
});
