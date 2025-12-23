import { defineComponent, h } from 'vue';

export const McrophoneOff = defineComponent({
  name: 'McrophoneOff',
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
        innerHTML: `<path d="M8.5 12V6.5A3.5 3.5 0 0 1 14.45 4M6 10.5V12c0 1.227.368 2.367 1 3.318M18 10.5V12a6 6 0 0 1-6 6m0 0v3m0-3a5.97 5.97 0 0 1-3.329-1.007M12 21h4m-4 0H8m.671-4.007L6 21m2.671-4.007 1.387-2.08m0 0A3.5 3.5 0 0 0 15.5 12V6.749m-5.442 8.163L15.5 6.75M18 3l-2.5 3.75"/>`,
      }, children);
    };
  },
});
