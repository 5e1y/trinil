import { defineComponent, h } from 'vue';

export const FileStl = defineComponent({
  name: 'FileStl',
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
        innerHTML: `<path d="M20.25 9.75h-6a1.5 1.5 0 0 1-1.5-1.5v-6m7.5 7.5-7.5-7.5m7.5 7.5v3m-7.5-10.5h-7.5a1.5 1.5 0 0 0-1.5 1.5V22.5m3.75-.75s.75.75 1.61.75a1.39 1.39 0 0 0 .621-2.634l-1.462-.732A1.39 1.39 0 0 1 8.89 16.5c.84 0 1.609.75 1.609.75m4.5-.75v6m0-6h-1.5m1.5 0h1.5m3 0v6h3"/>`,
      }, children);
    };
  },
});
