import { defineComponent, h } from 'vue';

export const FolderOpen = defineComponent({
  name: 'FolderOpen',
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
        innerHTML: `<path d="M2.25 20.25v-15a1.5 1.5 0 0 1 1.5-1.5h3.257a3 3 0 0 1 2.122.879L10.37 5.87a3 3 0 0 0 2.122.879h3.257a1.5 1.5 0 0 1 1.5 1.5v2.25m-15 9.75 4.5-9.75h10.5m-15 9.75h15l4.5-9.75h-4.5"/>`,
      }, children);
    };
  },
});
