import { defineComponent, h } from 'vue';

export const Gps = defineComponent({
  name: 'Gps',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75m0-19.5a9.72 9.72 0 0 1 6.903 2.865M12 2.25v1.5m0 18a9.72 9.72 0 0 0 6.903-2.865M12 21.75v-1.5m6.903-1.365A9.72 9.72 0 0 0 21.75 12v-.008m-2.847 6.893.004.004m-.004-.004-1.057-1.057m3.904-5.835a9.72 9.72 0 0 0-2.847-6.878m2.847 6.877h.008m-.008 0h-1.492m-1.355-6.877-1.057 1.057m1.057-1.057.004-.004m-15.15 6.882h-1.5M6.18 6.16l-1.06-1.06m0 13.799 1.06-1.06M12 13.5l3.75 1.5L12 7.5 8.25 15z"/>`,
      }, children);
    };
  },
});
