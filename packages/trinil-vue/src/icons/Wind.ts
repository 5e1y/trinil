import { defineComponent, h } from 'vue';

export const Wind = defineComponent({
  name: 'Wind',
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
        innerHTML: `<path d="M3 14h14c2.21 0 4-1.829 4-4.038C21 7.795 19.243 6 17.075 6c-.984 0-1.903.492-2.449 1.31l-.126.19M3 16h10a2 2 0 1 1 0 4h-.293c-.453 0-.887-.18-1.207-.5m-6-14 .126-.19A2.94 2.94 0 0 1 8.076 4C10.242 4 12 5.794 12 7.962 12 10.172 10.21 12 8 12H3"/>`,
      }, children);
    };
  },
});
