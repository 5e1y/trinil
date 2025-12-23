import { defineComponent, h } from 'vue';

export const Dollar = defineComponent({
  name: 'Dollar',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="M12 20c.523 0 1.027-.062 1.5-.182 2.029-.513 3.5-2.08 3.5-4.318a3.05 3.05 0 0 0-2.451-2.99L12 12m0 8a5.002 5.002 0 0 1-5-5m5 5v1.5m0-1.5v-8m0-8c-.523 0-1.027.062-1.5.182C8.471 4.695 7 6.262 7 8.5a3.05 3.05 0 0 0 2.451 2.99L12 12m0-8a5.002 5.002 0 0 1 5 5m-5-5v8m0-8V2.5"/>`,
      }, children);
    };
  },
});
