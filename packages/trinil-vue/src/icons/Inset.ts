import { defineComponent, h } from 'vue';

export const Inset = defineComponent({
  name: 'Inset',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M20.802 7.616a1.5 1.5 0 0 1 .198.746v7.277a1.5 1.5 0 0 1-.744 1.295l-7.5 4.375a1.5 1.5 0 0 1-.756.204m8.802-13.897a1.5 1.5 0 0 0-.546-.55l-7.5-4.375a1.5 1.5 0 0 0-1.512 0l-7.5 4.375a1.5 1.5 0 0 0-.545.55m17.603 0L12 12.75M3.199 7.616c-.128.223-.199.48-.199.746v7.277a1.5 1.5 0 0 0 .744 1.295l7.5 4.375c.234.136.495.204.756.204M3.199 7.617 12 12.75m0 8.764V12.75m0-3.611L9.184 7.5 12 5.862 14.816 7.5z"/>`,
      }, children);
    };
  },
});
