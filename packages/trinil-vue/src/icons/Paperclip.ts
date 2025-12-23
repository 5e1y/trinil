import { defineComponent, h } from 'vue';

export const Paperclip = defineComponent({
  name: 'Paperclip',
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
        innerHTML: `<path d="m14.465 8.035-7.233 7.233A1.25 1.25 0 1 0 9 17.035l9-9A2.5 2.5 0 0 0 14.464 4.5l-9.353 9.353a3.75 3.75 0 0 0 5.303 5.304L18 11.57"/>`,
      }, children);
    };
  },
});
