import { defineComponent, h } from 'vue';

export const TextileSparkle = defineComponent({
  name: 'TextileSparkle',
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
        innerHTML: `<path d="M9.75 18c0 1.243-1.679 2.25-3.75 2.25M9.75 18c0-1.243-1.679-2.25-3.75-2.25S2.25 16.757 2.25 18m7.5 0V6.75M6 20.25c-2.071 0-3.75-1.007-3.75-2.25M6 20.25h14.25a1.5 1.5 0 0 0 1.5-1.5V8.25M2.25 18V5.25C2.25 4.007 3.929 3 6 3s3.75 1.007 3.75 2.25v1.5m0 0h3.75m5.25-4.5.276.827a3 3 0 0 0 1.897 1.897l.827.276-.827.276a3 3 0 0 0-1.897 1.897l-.276.827-.276-.827a3 3 0 0 0-1.897-1.897l-.827-.276.827-.276a3 3 0 0 0 1.897-1.897zm-3 7.5.276.827a3 3 0 0 0 1.897 1.897l.827.276-.827.276a3 3 0 0 0-1.897 1.897l-.276.827-.276-.827a3 3 0 0 0-1.897-1.897l-.827-.276.827-.276a3 3 0 0 0 1.897-1.897z"/>`,
      }, children);
    };
  },
});
