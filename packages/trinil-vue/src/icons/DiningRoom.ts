import { defineComponent, h } from 'vue';

export const DiningRoom = defineComponent({
  name: 'DiningRoom',
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
        innerHTML: `<path d="M12 20.25V12m0 0h-1.5m1.5 0h1.5m2.25 8.25v-4.5h6m0 0v-6m0 6v4.5m-13.5 0v-4.5h-6m0 0v-6m0 6v4.5M10.5 12H6m4.5 0-.323-.485A2.59 2.59 0 0 1 10.5 8.25H12M13.5 12H18m-4.5 0 .323-.485A2.59 2.59 0 0 0 13.5 8.25H12m0 0c0-1 .45-3.3 2.25-4.5M12 8.25c0-.75-.45-2.4-2.25-3m4.5-1.5v.75m0-.75H15m-.75 0V3m0 .75h-.75m-3.75 1.5V4.5m0 .75H9m.75 0V6m0-.75h.75"/>`,
      }, children);
    };
  },
});
