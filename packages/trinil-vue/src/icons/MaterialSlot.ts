import { defineComponent, h } from 'vue';

export const MaterialSlot = defineComponent({
  name: 'MaterialSlot',
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
        innerHTML: `<path d="M21 6.75V4.5A1.5 1.5 0 0 0 19.5 3h-2.25M6.75 3H4.5A1.5 1.5 0 0 0 3 4.5v2.25m0 10.5v2.25A1.5 1.5 0 0 0 4.5 21h2.25m10.5 0h2.25a1.5 1.5 0 0 0 1.5-1.5v-2.25M15.75 12A3.75 3.75 0 0 1 12 15.75m0 3a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5"/>`,
      }, children);
    };
  },
});
