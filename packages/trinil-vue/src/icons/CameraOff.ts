import { defineComponent, h } from 'vue';

export const CameraOff = defineComponent({
  name: 'CameraOff',
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
        innerHTML: `<path d="M20.25 20.25H3.75a1.5 1.5 0 0 1-1.5-1.5V7.5A1.5 1.5 0 0 1 3.75 6H6m14.25 14.25-4.715-4.715m4.715 4.715 1.5 1.5m0-4.5V7.5a1.5 1.5 0 0 0-1.5-1.5h-2.379a1.5 1.5 0 0 1-1.06-.44l-1.372-1.37a1.5 1.5 0 0 0-1.06-.44H9.62a1.5 1.5 0 0 0-.994.377M2.25 2.25 6 6m0 0 3.215 3.215m6.32 6.32a4.5 4.5 0 1 1-6.32-6.32m6.32 6.32-6.32-6.32m7.21 2.71a4.5 4.5 0 0 0-3.6-3.6"/>`,
      }, children);
    };
  },
});
