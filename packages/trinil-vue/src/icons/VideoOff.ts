import { defineComponent, h } from 'vue';

export const VideoOff = defineComponent({
  name: 'VideoOff',
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
        innerHTML: `<path d="M14.25 8.25v-1.5a1.5 1.5 0 0 0-1.5-1.5h-3m4.5 3 7.5-3v12m-7.5-9v1.5m0 6v1.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5V6.75a1.5 1.5 0 0 1 1.5-1.5h1.5m9 10.5v-1.5m0 1.5 2.5 1M5.25 5.25l-3-3m3 3L7.5 7.5l2.25 2.25L12 12l2.25 2.25m0 0 2.5 2.5m0 0 5 5"/>`,
      }, children);
    };
  },
});
