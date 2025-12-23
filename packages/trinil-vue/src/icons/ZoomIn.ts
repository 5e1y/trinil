import { defineComponent, h } from 'vue';

export const ZoomIn = defineComponent({
  name: 'ZoomIn',
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
        innerHTML: `<path d="m4 20 4.904-4.904m0 0a6.5 6.5 0 1 1 9.192-9.192 6.5 6.5 0 0 1-9.192 9.192Zm4.692-4.692V7m0 3.404V14m0-3.596H17m-3.404 0H10"/>`,
      }, children);
    };
  },
});
