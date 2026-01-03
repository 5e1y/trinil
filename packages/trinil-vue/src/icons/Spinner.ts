import { defineComponent, h } from 'vue';

export const Spinner = defineComponent({
  name: 'Spinner',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M12 2.25v3m0 16.5v-3m4.876-15.197-1.5 2.598M7.126 20.44l1.5-2.598M20.448 7.119l-2.599 1.5M3.56 16.869l2.598-1.5m15.6-3.376h-3m-16.5 0h3M3.56 7.132l2.598 1.5m14.29 8.25-2.599-1.5M7.126 3.56l1.5 2.598m8.25 14.29-1.5-2.599"/>`,
      }, children);
    };
  },
});
