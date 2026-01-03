import { defineComponent, h } from 'vue';

export const SpeakerMute = defineComponent({
  name: 'SpeakerMute',
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
        innerHTML: `<path d="M14.25 8.25 18 12m0 0 3.75 3.75M18 12l-3.75 3.75M18 12l3.75-3.75m-10.5-3v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5m-6 9v1.5a1.5 1.5 0 0 0 3 0v-1.5a1.5 1.5 0 0 0-3 0m3-6a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>`,
      }, children);
    };
  },
});
