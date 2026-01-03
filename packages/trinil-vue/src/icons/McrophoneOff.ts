import { defineComponent, h } from 'vue';

export const McrophoneOff = defineComponent({
  name: 'McrophoneOff',
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
        innerHTML: `<path d="M18.75 11.25V12a6.8 6.8 0 0 1-.29 1.96M5.25 11.25V12A6.75 6.75 0 0 0 12 18.75m-3.75 3H12m0 0h3.75m-3.75 0v-3m0 0a6.73 6.73 0 0 0 4.773-1.977M15.75 11.25V6a3.75 3.75 0 0 0-7.044-1.794M2.25 2.25l6 6m0 0V12a3.75 3.75 0 0 0 6.402 2.652M8.25 8.25l6.402 6.402m0 0 2.121 2.121m0 0 4.977 4.977"/>`,
      }, children);
    };
  },
});
