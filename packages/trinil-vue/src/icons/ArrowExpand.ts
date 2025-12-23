import { defineComponent, h } from 'vue';

export const ArrowExpand = defineComponent({
  name: 'ArrowExpand',
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
        innerHTML: `<path d="m12 21 3.5-3.5M12 21l-3.5-3.5M12 21v-6.5M12 3 8.5 6.5M12 3l3.5 3.5M12 3v6.5m7.5 2.5h-15"/>`,
      }, children);
    };
  },
});
