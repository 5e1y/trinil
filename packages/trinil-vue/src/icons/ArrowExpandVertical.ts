import { defineComponent, h } from 'vue';

export const ArrowExpandVertical = defineComponent({
  name: 'ArrowExpandVertical',
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
        innerHTML: `<path d="m3 12 3.5 3.5M3 12l3.5-3.5M3 12h6.5M21 12l-3.5-3.5M21 12l-3.5 3.5M21 12h-6.5M12 19.5v-15"/>`,
      }, children);
    };
  },
});
