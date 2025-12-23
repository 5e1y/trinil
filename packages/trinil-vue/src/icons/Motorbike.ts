import { defineComponent, h } from 'vue';

export const Motorbike = defineComponent({
  name: 'Motorbike',
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
        innerHTML: `<path d="m16.5 11-3.2 4.114a1 1 0 0 1-.79.386H9m7.5-4.5.584 1.642M16.5 11h2c.552 0 1.01-.452.9-.993a4.99 4.99 0 0 0-3.805-3.875M16.5 11c-.667-2.001-3.269-2.51-4.67-.933A2.78 2.78 0 0 1 9.759 11H7.842m9.242 1.642q.436-.14.916-.142a3 3 0 1 1-.916.142ZM9 15.5a2.995 2.995 0 0 0-1.863-2.777M9 15.5a3 3 0 1 1-1.863-2.777m0 0L7.842 11m0 0H3.5"/>`,
      }, children);
    };
  },
});
