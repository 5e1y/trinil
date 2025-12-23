import { defineComponent, h } from 'vue';

export const Music = defineComponent({
  name: 'Music',
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
        innerHTML: `<path d="M8 9V6.09c0-.05.04-.09.09-.09a60 60 0 0 0 10.733-.968.15.15 0 0 1 .177.148V8M8 9v7m0-7h.09a60 60 0 0 0 10.733-.968L19 8M8 16v1.75A1.75 1.75 0 1 1 6.25 16zm11-8v7m0 0v1.75A1.75 1.75 0 1 1 17.25 15z"/>`,
      }, children);
    };
  },
});
