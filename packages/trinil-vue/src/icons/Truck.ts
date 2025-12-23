import { defineComponent, h } from 'vue';

export const Truck = defineComponent({
  name: 'Truck',
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
        innerHTML: `<path d="M9.5 17.25a1.75 1.75 0 1 1-3.5 0m3.5 0a1.75 1.75 0 1 0-3.5 0m3.5 0H15m-9 0H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3.5m5 6.75a1.75 1.75 0 1 1-3.5 0m3.5 0a1.75 1.75 0 1 0-3.5 0m3.5 0h.5a1 1 0 0 0 1-1v-2.447a1 1 0 0 0-.168-.555l-1.535-2.303a1 1 0 0 0-.832-.445H15m1.5 6.75H15m0 0V10.5"/>`,
      }, children);
    };
  },
});
