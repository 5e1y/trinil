import { defineComponent, h } from 'vue';

export const Lamp1 = defineComponent({
  name: 'Lamp1',
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
        innerHTML: `<path d="M12 12H5.184a1.5 1.5 0 0 1-1.4-2.038l2.596-6.75a1.5 1.5 0 0 1 1.4-.962h8.44a1.5 1.5 0 0 1 1.4.962l2.596 6.75a1.5 1.5 0 0 1-1.4 2.038H15.75M12 12v9.75M12 12h3.75M12 21.75h5.25m-5.25 0H6.75m9-9.75v5.25"/>`,
      }, children);
    };
  },
});
