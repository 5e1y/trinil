import { defineComponent, h } from 'vue';

export const File3d = defineComponent({
  name: 'File3d',
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
        innerHTML: `<path d="M12.387 21.75H5.25a1.5 1.5 0 0 1-1.5-1.5V3.75a1.5 1.5 0 0 1 1.5-1.5h7.5m7.5 9.384V9.75m0 0h-6a1.5 1.5 0 0 1-1.5-1.5v-6m7.5 7.5-7.5-7.5m5.625 20.25 4.125-2.25V16.5m-4.125 6-4.125-2.25V16.5m4.125 6v-3.75M22.5 16.5l-4.125-2.25-4.125 2.25m8.25 0-4.125 2.25M14.25 16.5l4.125 2.25"/>`,
      }, children);
    };
  },
});
