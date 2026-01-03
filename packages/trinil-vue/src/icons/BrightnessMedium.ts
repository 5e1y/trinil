import { defineComponent, h } from 'vue';

export const BrightnessMedium = defineComponent({
  name: 'BrightnessMedium',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M12 5.25v-1.5m0 15v1.5m6.758-8.257h1.5m-15 0h-1.5m13.028 4.775 1.06 1.06M7.24 7.222l-1.06-1.06m1.06 10.617-1.06 1.06M16.785 7.233l1.06-1.061M12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5"/>`,
      }, children);
    };
  },
});
