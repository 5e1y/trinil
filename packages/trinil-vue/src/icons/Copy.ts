import { defineComponent, h } from 'vue';

export const Copy = defineComponent({
  name: 'Copy',
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
        innerHTML: `<path d="M8 5v-.5a1 1 0 0 1 1-1h6.086a1 1 0 0 1 .707.293l3.414 3.414a1 1 0 0 1 .293.707V16.5a1 1 0 0 1-1 1H18m-12.5 3h9a1 1 0 0 0 1-1v-7.586a1 1 0 0 0-.293-.707l-3.414-3.414a1 1 0 0 0-.707-.293H5.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1Z"/>`,
      }, children);
    };
  },
});
