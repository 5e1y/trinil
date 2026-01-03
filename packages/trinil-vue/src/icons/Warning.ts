import { defineComponent, h } from 'vue';

export const Warning = defineComponent({
  name: 'Warning',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M12 16.5v.75m0-3.75V9m-1.322-5.053-8.019 14.84A1.5 1.5 0 0 0 3.98 21h16.01a1.5 1.5 0 0 0 1.32-2.211l-7.99-14.84c-.567-1.051-2.074-1.053-2.641-.002"/>`,
      }, children);
    };
  },
});
