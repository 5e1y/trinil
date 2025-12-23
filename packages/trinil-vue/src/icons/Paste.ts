import { defineComponent, h } from 'vue';

export const Paste = defineComponent({
  name: 'Paste',
  props: {
    size: { type: Number, default: 24 },
    color: { type: String, default: 'currentColor' },
    class: { type: String, default: undefined },
    title: { type: String, default: undefined },
    ariaLabel: { type: String, default: undefined },
  },
  setup(props) {
    return () => {
      const children = props.title ? [h('title', {}, props.title)] : [];
      return h('svg', {
        xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none', stroke: props.color,
        'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke',
        width: props.size, height: props.size, class: props.class, role: 'img', 'aria-label': props.ariaLabel,
        innerHTML: `<path d="M8 6.5V6a1 1 0 0 1 1-1h2m6 12.5h1.5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2M11 5v-.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1V5M11 5v.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1V5m-11 15.5h8a1 1 0 0 0 1-1v-6.086a1 1 0 0 0-.293-.707l-3.414-3.414A1 1 0 0 0 10.086 9H5.5a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1Z"/>`,
      }, children);
    };
  },
});
