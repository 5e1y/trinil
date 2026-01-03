import { defineComponent, h } from 'vue';

export const WateringCan = defineComponent({
  name: 'WateringCan',
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
        innerHTML: `<path d="M9 8.25h-.75a1.5 1.5 0 0 0-1.5 1.5v1.5l-4.5-1.5v3l4.5 3v3a1.5 1.5 0 0 0 1.5 1.5h8.25a1.5 1.5 0 0 0 1.5-1.5v-1.5m-9-9c1.457-6.594 12.71-5.847 12.75 1.5.035 6.563-3.75 7.5-3.75 7.5m-9-9a5.175 5.175 0 0 0 6.53.647l.97-.647a1.5 1.5 0 0 1 1.5 1.5v7.5"/>`,
      }, children);
    };
  },
});
