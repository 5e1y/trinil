import { defineComponent, h } from 'vue';

export const Scene = defineComponent({
  name: 'Scene',
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
        innerHTML: `<path d="M11.854 11.557a5.255 5.255 0 0 0-1.93 5.517m1.93-5.517a5.246 5.246 0 1 1-1.93 5.517m1.93-5.517L8.632 3.501c-.352-.879-1.597-.879-1.948 0L2.487 13.993a.8.8 0 0 0-.063.389c.127 1.094 1.291 2.946 5.234 2.946.89 0 1.639-.095 2.266-.253m7.326-1.325A2.25 2.25 0 0 1 15 18m2.25-12.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"/>`,
      }, children);
    };
  },
});
