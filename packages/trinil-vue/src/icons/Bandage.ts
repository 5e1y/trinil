import { defineComponent, h } from 'vue';

export const Bandage = defineComponent({
  name: 'Bandage',
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
        innerHTML: `<path d="M4.5 19.5a4.243 4.243 0 0 0 6 0l9-9a4.243 4.243 0 0 0-6-6l-9 9a4.243 4.243 0 0 0 0 6Zm10.793-9.207-1.586-1.586a1 1 0 0 0-1.415 0l-3.585 3.585a1 1 0 0 0 0 1.415l1.586 1.586a1 1 0 0 0 1.414 0l3.586-3.586a1 1 0 0 0 0-1.414Z" clip-rule="evenodd"/>`,
      }, children);
    };
  },
});
