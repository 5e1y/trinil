import { defineComponent, h } from 'vue';

export const DoorOpen = defineComponent({
  name: 'DoorOpen',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M15.75 18.75h1.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5h-12m10.5 16.5v1.416a1.5 1.5 0 0 1-1.974 1.424l-7.5-2.498a1.5 1.5 0 0 1-1.026-1.423V2.25m10.5 16.5V6.828a1.5 1.5 0 0 0-1.026-1.423L5.25 2.25m7.5 11.25-2.25-.75"/>`,
      }, children);
    };
  },
});
