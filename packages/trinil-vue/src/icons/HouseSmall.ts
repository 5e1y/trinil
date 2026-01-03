import { defineComponent, h } from 'vue';

export const HouseSmall = defineComponent({
  name: 'HouseSmall',
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
        innerHTML: `<path d="M17.25 7.5v14.25h-3v-4.5a1.5 1.5 0 0 0-1.5-1.5h-1.5a1.5 1.5 0 0 0-1.5 1.5v4.5h-3V7.5m10.5 0 2.25 2.25M17.25 7.5 15.75 6m-9 1.5L12 2.25 15.75 6m-9 1.5L4.5 9.75M15.75 6V2.25m-3.75 6a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"/>`,
      }, children);
    };
  },
});
