import { defineComponent, h } from 'vue';

export const Devices = defineComponent({
  name: 'Devices',
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
        innerHTML: `<path d="M18 11.25v-1.5a1.5 1.5 0 0 0-1.5-1.5H12a1.5 1.5 0 0 0-1.5 1.5v6m7.5-4.5h2.25m-2.25 0a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 0 0 .75 1.3m-6.75-4.3v3a1.5 1.5 0 0 0 1.5 1.5m-1.5-4.5H3.75a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h15a1.5 1.5 0 0 1 1.5 1.5v6m-15 9H12m0 0h4.5c.273 0 .53-.073.75-.2m3-8.8a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5H18c-.273 0-.53-.073-.75-.2"/>`,
      }, children);
    };
  },
});
