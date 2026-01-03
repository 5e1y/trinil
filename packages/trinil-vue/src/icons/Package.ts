import { defineComponent, h } from 'vue';

export const Package = defineComponent({
  name: 'Package',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M12 21.514c-.261 0-.522-.069-.756-.205l-7.5-4.375A1.5 1.5 0 0 1 3 15.638V8.363c0-.267.07-.523.199-.746M12 21.514c.261 0 .522-.069.756-.205l7.5-4.375A1.5 1.5 0 0 0 21 15.638V8.363a1.5 1.5 0 0 0-.198-.746M12 21.514V12.75m0 0-4.5-2.625M12 12.75l8.802-5.134M7.5 10.125l9.006-5.247M7.5 10.125l-4.301-2.51m13.307-2.737 3.75 2.188a1.5 1.5 0 0 1 .546.55m-4.296-2.738-3.75-2.187a1.5 1.5 0 0 0-1.512 0l-7.5 4.375a1.5 1.5 0 0 0-.545.55"/>`,
      }, children);
    };
  },
});
