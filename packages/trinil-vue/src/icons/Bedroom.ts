import { defineComponent, h } from 'vue';

export const Bedroom = defineComponent({
  name: 'Bedroom',
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
        innerHTML: `<path d="M2.25 18.75v1.5m0-1.5h10.5m-10.5 0V15m10.5 3.75v1.5m0-1.5V16.5a1.5 1.5 0 0 0-1.5-1.5h-9m0-3.75V15m15 1.5v3.75h4.5V16.5m-4.5 0h4.5m-4.5 0V12m4.5 4.5V12m-4.5 0V5.25h4.5V12m-4.5 0h4.5m-15-5.25v-3h6v4.5m-6-1.5v4.5h6v-3m-6-1.5c2.25 1.5 3.6 1.5 6 1.5"/>`,
      }, children);
    };
  },
});
