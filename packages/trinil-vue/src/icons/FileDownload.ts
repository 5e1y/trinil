import { defineComponent, h } from 'vue';

export const FileDownload = defineComponent({
  name: 'FileDownload',
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
        innerHTML: `<path stroke-miterlimit="1.788" d="M20.25 9.75h-6a1.5 1.5 0 0 1-1.5-1.5v-6m7.5 7.5-7.5-7.5m7.5 7.5v1.884m-7.5-9.384h-7.5a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h7.137m6.363-7.5v5.25m0 0L21 17.25m-2.25 2.25-2.25-2.25m-1.5 3V21a1.5 1.5 0 0 0 1.5 1.5H21a1.5 1.5 0 0 0 1.5-1.5v-.75"/>`,
      }, children);
    };
  },
});
