import { defineComponent, h } from 'vue';

export const UvUnwrap = defineComponent({
  name: 'UvUnwrap',
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
        innerHTML: `<path d="M7.5 16.5H3V12h4.5m0 4.5V12m0 4.5H12m-4.5 0V21H12v-4.5M7.5 12H12m-4.5 0V7.5m4.5 9V12m0 4.5h4.5M12 12h4.5M12 12V7.5m4.5 9V12m0 4.5H21V12h-4.5m-9-4.5V3H12v4.5m-4.5 0H12M15 9l2.128-2.128A2.417 2.417 0 0 0 16.5 3M15 9V6m0 3h3"/>`,
      }, children);
    };
  },
});
