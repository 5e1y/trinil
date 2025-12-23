import { defineComponent, h } from 'vue';

export const Scene = defineComponent({
  name: 'Scene',
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
        innerHTML: `<path d="M12 12a5.012 5.012 0 0 0-1.84 5.259m1.84-5.26a5 5 0 1 1-1.84 5.259M12 12 8.928 4.321c-.335-.838-1.521-.838-1.856 0l-4 10a.77.77 0 0 0-.06.37C3.131 15.736 4.241 17.5 8 17.5c.849 0 1.562-.09 2.16-.242M17.83 17A5 5 0 0 1 16 18.831M20 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>`,
      }, children);
    };
  },
});
